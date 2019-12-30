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
    const {featuredEvents} = this.props;
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
            <Left />
            <Body>
              <Title>Мои события</Title>
            </Body>
            <Right>
              <Button transparent>
                <Icon name="settings" />
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
