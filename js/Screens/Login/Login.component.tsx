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
  makeLogin: (login: string, password: string, callback?: () => {}) => {};
}

export default function Login(props: ILoginProps): ReactElement {
  const {errorMessage, isAuthorizationPending, isAuthorized, makeLogin} = props;
  const [loginValue, onChangeLogin] = React.useState('');
  const [passwordValue, onChangePassword] = React.useState('');

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
                  <Row style={{marginBottom: '5%'}}>
                    <Col>
                      <Item regular style={screenStyles.formItem}>
                        <Label>Логин</Label>
                        <Input
                          value={loginValue}
                          onChangeText={onChangeLogin}
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
                          onChangeText={onChangePassword}
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
                    makeLogin(loginValue, passwordValue, () => {
                      NavigationService.navigate('Profile');
                    });
                  }}>
                  <Text>Войти</Text>
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <Text style={{textAlign: 'right', color: 'powderblue'}}>
                  Еще нет профиля?{' '}
                </Text>
              </Col>
              <Col>
                <Text style={{color: '#ffffff'}}>Зарегистрируйтесь</Text>
              </Col>
            </Row>
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
