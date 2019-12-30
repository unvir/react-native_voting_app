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

class Event extends React.Component<NavigationInjectedProps & IEventProps> {
  constructor(props: NavigationInjectedProps & IEventProps) {
    super(props);
  }

  public componentDidMount(): void {
    const { fetchParticipants, navigation } = this.props;

    fetchParticipants(navigation.getParam('id'));
  }

  public render() {
    const {navigation, participants, fetchParticipants} = this.props;
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
            <Tabs locked onChangeTab={() => {
              fetchParticipants(navigation.getParam('id'));
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
              <Tab heading="Оценивание">
                <TabEventScoring
                  participants={participants}
                />
              </Tab>
            </Tabs>
          </Content>
        </Container>
      </>
    );
  }
}

export default withNavigation(Event);
