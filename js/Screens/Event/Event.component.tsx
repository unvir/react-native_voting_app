import {
  Body,
  Container,
  Content,
  Header,
  Left,
  Right,
  Tab,
  Tabs,
  Title,
} from 'native-base';
import React from 'react';
import {Image, StatusBar} from 'react-native';
import {NavigationInjectedProps, withNavigation} from 'react-navigation';
import EventsAPI from "../../API/EventsAPI";
import {
  TabEventInfo,
  TabEventParticipants,
  TabEventScoring,
} from '../../components';
import * as authSelectors from '../../redux/selectors/auth';
import * as participantsSelectors from '../../redux/selectors/participants';

interface IEventProps {
  errorMessage: string;
  isParticipantsPending: boolean;
  participants: IEventParticipantsList[];
  userId: number;
  fetchParticipants: (eventId: number) => Promise<void>;
}

interface IEventState {
  judgeAccess: boolean;
}

class Event extends React.Component<NavigationInjectedProps & IEventProps, IEventState> {
  constructor(props: NavigationInjectedProps & IEventProps) {
    super(props);

    this.state = {
      judgeAccess: false,
    };
  }

  public componentDidMount(): void {
    const { fetchParticipants, navigation, userId } = this.props;
    const eventId = navigation.getParam('id');

    EventsAPI.getJudgeList(eventId).then((result) => {
      this.setState({
        judgeAccess: result.data[0].userIds.indexOf(userId) !== -1,
      });
    });
    fetchParticipants(eventId);
  }

  public render() {
    const {navigation, participants, fetchParticipants, userId} = this.props;
    const eventId = navigation.getParam('id');
    const {judgeAccess} = this.state;
    const TAB_INDEX_PARTICIPANTS = 1;
    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor="#343434" />
        <Container>
          <Header hasTabs span>
            <Image
              source={require('../../assets/bg2.jpg')}
              style={{
                height: '130%',
                left: 0,
                position: 'absolute',
                top: 0,
                width: '130%',
              }}
              resizeMode="cover"
            />
            <Left />
            <Body>
              <Title>{navigation.getParam('title')}</Title>
            </Body>
            <Right />
          </Header>
          <Content>
            <Tabs
              locked
              onChangeTab={(tabInfo) => {
                if (tabInfo.i === TAB_INDEX_PARTICIPANTS) {
                  fetchParticipants(eventId);
                }
              }}>
              <Tab heading="Информация">
                <TabEventInfo
                  description={navigation.getParam('description')}
                  dateString={navigation.getParam('dateString')}
                  timeString={navigation.getParam('timeString')}
                  location={navigation.getParam('location')}
                />
              </Tab>
              <Tab heading="Участники">
                <TabEventParticipants
                  participants={participants}
                />
              </Tab>
              {
                judgeAccess &&
                (
                  <Tab heading="Оценивание">
                    <TabEventScoring
                      eventId={navigation.getParam('id')}
                      userId={userId}
                      participants={participants}
                    />
                  </Tab>
                )
              }
            </Tabs>
          </Content>
        </Container>
      </>
    );
  }
}

export default withNavigation(Event);
