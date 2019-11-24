import React, { ReactElement } from 'react';
import {
  ScrollView,
  View,
  StatusBar,
  Image,
  ImageBackground
} from 'react-native';
import { Container,
    Content,
    Card,
    CardItem,
    Button,
    Body,
    Text,
    FooterTab,
    Footer } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import NavigationService from '../navigationService';

const MainBGImage = require('../assets/bg2.jpg');
const SmallLogo = require('../assets/VP_logo.png');

export default function Welcome(props: object): ReactElement {
    return (
        <>
        <StatusBar barStyle="light-content" backgroundColor="#343434" />
        <Container>
            <Image source={MainBGImage}
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                            resizeMode='cover' />
            <Content style={{ backgroundColor: 'transparent' }}>
                <Grid>
                    <Row style={{ marginVertical: '5%' }}>
                        <Col>
                            <Image style={{ width: 75, height: 75, alignSelf: 'center' }}
                                    source={SmallLogo} />
                            <Text style={{ color: '#fafafa', fontSize: 20, textAlign: 'center' }}>mobile</Text>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card transparent>
                                <CardItem>
                                    <Body>
                                        <Text>Votepad - твоя точка входа в мир ивентов. Ты можешь внести свой вклад в любое мероприятие. Участвовать и оценивать участников.</Text>
                                    </Body>
                                </CardItem>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <Row>
                                    <Col>
                                        <View style={{width: 250, height: 250, margin: 25, backgroundColor: 'powderblue', justifyContent: 'center', alignItems: 'center'}}>
                                            <Text style={{ color: '#343434'}}>Посетитель</Text>
                                        </View>
                                    </Col>
                                    <Col>
                                        <View style={{width: 250, height: 250, margin: 25, backgroundColor: 'steelblue', justifyContent: 'center', alignItems: 'center'}}>
                                            <Text style={{ color: '#eee'}}>Жюри</Text>
                                        </View>
                                    </Col>
                                </Row>
                            </ScrollView>
                        </Col>
                    </Row>
                </Grid>
            </Content>
            <Footer style={{ backgroundColor: 'transparent', shadowColor: 'transparent' }}>
                <FooterTab>
                    <Button light onPress={() => NavigationService.navigate('Login')}>
                    <Text>Войти</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
        </>
    );
};