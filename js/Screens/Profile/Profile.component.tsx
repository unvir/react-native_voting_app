import {
  Body,
  Button,
  Col,
  Container,
  Content,
  Grid,
  Header,
  Icon,
  Left,
  List,
  Right,
  Row,
  Title,
} from 'native-base';
import React, {ReactElement} from 'react';
import {Image, StatusBar} from 'react-native';
import {events} from '../../../stubs.json';
import {ListItemEvents} from '../../components';
import container from './Profile.container';

interface IProfileProps {
  errorMessage: string;
  featuredEvents: IEventsUserList[];
  isFeaturedEventsPending: boolean;
  userId: number;
  fetchEvents: (userId: number) => {};
  logout: () => {};
}

export default class Profile extends React.Component<IProfileProps> {
  constructor(props: IProfileProps) {
    super(props);
  }

  public componentDidMount(): void {
    const {userId, fetchEvents} = this.props;

    fetchEvents(userId);
  }

  public render() {
    const {featuredEvents, logout} = this.props;
    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor="#343434" />
        <Container>
          <Header span>
            <Image
              source={require('../../assets/bg2.jpg')}
              style={{
                height: '100%',
                left: 0,
                position: 'absolute',
                top: 0,
                width: '130%',
              }}
              resizeMode="cover"
            />
            <Left>
              <Button
                transparent
                onPress={() => {
                  //
                }}
              >
                <Icon name="search" />
              </Button>
            </Left>
            <Body>
              <Title>Мои события</Title>
            </Body>
            <Right>
              <Button
                transparent
                onPress={() => {
                  logout();
                }}
              >
                <Icon name="exit" />
              </Button>
            </Right>
          </Header>
          <Content padder style={{backgroundColor: '#ffffff'}}>
            <Grid>
              <Row>
                <Col>
                  <List
                    dataArray={featuredEvents}
                    renderRow={ListItemEvents}
                    keyExtractor={item => item.id}
                  />
                </Col>
              </Row>
            </Grid>
          </Content>
        </Container>
      </>
    );
  }
}
