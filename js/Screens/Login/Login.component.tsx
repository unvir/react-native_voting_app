import {
  Body,
  Button,
  Card,
  CardItem,
  Col,
  Container,
  Content,
  Form,
  Grid,
  Input,
  Item,
  Label,
  Row,
} from 'native-base';
import React, {ReactElement} from 'react';
import {Image, StatusBar, Text} from 'react-native';
import NavigationService from '../../navigationService';
import {screenStyles} from '../styles';

interface ILoginProps {
  errorMessage: string | null;
  isAuthorizationPending: boolean;
  isAuthorized: boolean;
  makeLogin: (login: string, password: string, callback?: () => void) => {};
  makeRegistration: (username: string, password: string, fullName: string, callback?: () => void) => {};
}

const DEFAULT_AUTH_MODE = 'login';

export default function Login(props: ILoginProps): ReactElement {
  const {errorMessage, isAuthorizationPending, isAuthorized, makeLogin, makeRegistration} = props;
  const [loginValue, setLogin] = React.useState('');
  const [passwordValue, setPassword] = React.useState('');
  const [nameValue, setName] = React.useState('');
  const [authMode, setAuthMode] = React.useState(DEFAULT_AUTH_MODE);
  const clearForm = () => {
    setLogin('');
    setPassword('');
    setName('');
    setAuthMode(DEFAULT_AUTH_MODE);
  };

  if (isAuthorized) {
    NavigationService.navigate('Profile');
    return <></>;
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#343434" />
      <Container>
        <Content padder style={{backgroundColor: 'steelblue'}}>
          <Grid>
            <Row style={screenStyles.defaultRow}>
              <Col>
                <Image
                  style={{width: 75, height: 75, alignSelf: 'center'}}
                  source={require('../../assets/VP_logo.png')}
                />
                <Text
                  style={{color: '#fafafa', fontSize: 20, textAlign: 'center'}}>
                  mobile
                </Text>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form>
                  {authMode === 'register' && (
                      <Row style={{marginBottom: '5%'}}>
                        <Col>
                          <Item regular style={screenStyles.formItem}>
                            <Label>Имя</Label>
                            <Input
                                value={nameValue}
                                onChangeText={setName}
                            />
                          </Item>
                        </Col>
                      </Row>
                  )}
                  <Row style={{marginBottom: '5%'}}>
                    <Col>
                      <Item regular style={screenStyles.formItem}>
                        <Label>Логин</Label>
                        <Input
                          value={loginValue}
                          onChangeText={setLogin}
                        />
                      </Item>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Item regular style={screenStyles.formItem}>
                        <Label>Пароль</Label>
                        <Input
                            secureTextEntry={true}
                            value={passwordValue}
                            onChangeText={setPassword}
                        />
                      </Item>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
            <Row style={screenStyles.defaultRow}>
              <Col>
                <Button
                  light
                  full
                  disabled={isAuthorizationPending}
                  onPress={() => {
                    const successCallback = () => {
                      clearForm();
                      NavigationService.navigate('Profile');
                    };
                    if (authMode === 'login') {
                      makeLogin(loginValue, passwordValue, successCallback);
                    } else if (authMode === 'register') {
                      makeRegistration(loginValue, passwordValue, nameValue, successCallback);
                    }
                  }}>
                  <Text>{authMode === 'login' ? 'Войти' : 'Зарегистрироваться'}</Text>
                </Button>
              </Col>
            </Row>
            {authMode === 'login' ? (
              <Row>
                <Col>
                  <Text style={{color: 'powderblue'}}>
                    Еще нет профиля?{' '}
                  </Text>
                </Col>
                <Col>
                  <Text
                    onPress={() => {
                      setAuthMode('register');
                    }}
                    style={{color: '#ffffff'}}>Зарегистрируйтесь</Text>
                </Col>
              </Row>
            ) : (
              <Row>
                <Col>
                  <Text style={{color: 'powderblue'}}>
                    Уже зарегистрированы?{' '}
                  </Text>
                </Col>
                <Col>
                  <Text
                    onPress={() => {
                      clearForm();
                    }}
                    style={{color: '#ffffff'}}
                  >
                    Войти
                  </Text>
                </Col>
              </Row>
            )}
            {errorMessage && (
              <Row>
                <Col>
                  <Card style={{backgroundColor: 'transparent'}}>
                    <CardItem>
                      <Body>
                        <Text style={{color: 'red'}}>{errorMessage}</Text>
                      </Body>
                    </CardItem>
                  </Card>
                </Col>
              </Row>
            )}
          </Grid>
        </Content>
      </Container>
    </>
  );
}
