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

export default function Profile(): ReactElement {
  const eventsStub = events;
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
                  dataArray={eventsStub}
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
