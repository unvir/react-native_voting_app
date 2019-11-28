import React, { ReactElement } from 'react';
import { screenStyles } from './styles';
import {
    StatusBar,
    Image,
    Text
} from 'react-native';
import { Container,
    Content,
    Grid,
    Row,
    Col,
    Form,
    Item,
    Label,
    Button,
    Input } from 'native-base';
import NavigationService from '../navigationService';

export default function Login(): ReactElement {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#343434" />
            <Container>
                <Content padder style={{ backgroundColor: 'steelblue' }}>
                    <Grid>
                        <Row style={screenStyles.defaultRow}>
                            <Col>
                                <Image style={{ width: 75, height: 75, alignSelf: 'center' }}
                                        source={require('../assets/VP_logo.png')} />
                                <Text style={{ color: '#fafafa', fontSize: 20, textAlign: 'center' }}>mobile</Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form>
                                    <Row style={{ marginBottom: '5%' }}>
                                        <Col>
                                            <Item regular style={screenStyles.formItem}>
                                                <Label>Логин</Label>
                                                <Input />
                                            </Item>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Item regular style={screenStyles.formItem}>
                                                <Label>Пароль</Label>
                                                <Input />
                                            </Item>
                                        </Col>
                                    </Row>
                                </Form>
                            </Col>
                        </Row>
                        <Row style={screenStyles.defaultRow}>
                            <Col>
                                <Button light full onPress={() => NavigationService.navigate('Profile')}>
                                    <Text>Войти</Text>
                                </Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Text style={{ textAlign: 'right', color: 'powderblue' }}>Еще нет профиля? </Text>
                            </Col>
                            <Col>
                                <Text style={{ color: '#ffffff' }}>Зарегистрируйтесь</Text>
                            </Col>
                        </Row>
                    </Grid>
                </Content>
            </Container>
        </>
    );
}