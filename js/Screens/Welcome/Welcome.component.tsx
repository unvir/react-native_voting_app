import {
  Body,
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Footer,
  FooterTab,
  Text,
} from 'native-base';
import React, {ReactElement} from 'react';
import {Image, ScrollView, StatusBar, View} from 'react-native';
import {Col, Grid, Row} from 'react-native-easy-grid';
import NavigationService from '../../navigationService';

// @ts-ignore
import MainBGImage from '../../assets/bg2.jpg';
// @ts-ignore
import SmallLogo from '../../assets/VP_logo.png';

export default function Welcome(): ReactElement {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#343434" />
      <Container>
        <Image
          source={MainBGImage}
          style={{
            height: '100%',
            left: 0,
            position: 'absolute',
            top: 0,
            width: '100%',
          }}
          resizeMode="cover"
        />
        <Content style={{backgroundColor: 'transparent'}}>
          <Grid>
            <Card
              style={{
                backgroundColor: 'transparent',
                borderColor: 'transparent',
              }}>
              <CardItem
                style={{backgroundColor: 'rgba(0, 0, 0, 0.35)', margin: -8}}>
                <Body>
                  <Row style={{paddingVertical: '5%'}}>
                    <Col>
                      <Image
                        style={{width: 75, height: 75, alignSelf: 'center'}}
                        source={SmallLogo}
                      />
                      <Text
                        style={{
                          color: '#fafafa',
                          fontSize: 20,
                          textAlign: 'center',
                        }}>
                        mobile
                      </Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col style={{marginHorizontal: -5}}>
                      <Text style={{color: '#fff', textAlign: 'center'}}>
                        Votepad - твоя точка входа в мир ивентов. Ты можешь
                        внести свой вклад в любое мероприятие. Участвовать и
                        оценивать участников.
                      </Text>
                    </Col>
                  </Row>
                </Body>
              </CardItem>
            </Card>
            <Row>
              <Col>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  <Row>
                    <Col>
                      <View
                        style={{
                          alignItems: 'center',
                          backgroundColor: 'powderblue',
                          height: 250,
                          justifyContent: 'center',
                          margin: 25,
                          width: 250,
                        }}>
                        <Text style={{color: '#343434'}}>Посетитель</Text>
                      </View>
                    </Col>
                    <Col>
                      <View
                        style={{
                          alignItems: 'center',
                          backgroundColor: 'steelblue',
                          height: 250,
                          justifyContent: 'center',
                          margin: 25,
                          width: 250,
                        }}>
                        <Text style={{color: '#eee'}}>Жюри</Text>
                      </View>
                    </Col>
                  </Row>
                </ScrollView>
              </Col>
            </Row>
          </Grid>
        </Content>
        <Footer
          style={{backgroundColor: 'transparent', shadowColor: 'transparent'}}>
          <FooterTab>
            <Button light onPress={() => NavigationService.navigate('Login')}>
              <Text>Войти</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    </>
  );
}
