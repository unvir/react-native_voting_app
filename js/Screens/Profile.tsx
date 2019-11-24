import React, { ReactElement } from 'react';
import { screenStyles } from './styles';
import {
    StatusBar,
    Image
} from 'react-native';
import ListItemRenderer from '../components/eventsListItem';
import { Container,
    Content,
    Grid,
    Row,
    Col,
    Header, 
    Left,
    Body,
    Right,
    List,
    Thumbnail,
    ListItem,
    Text,
    Title,
    Icon,
    Button} from 'native-base';
import { events } from '../../stubs.json';

export default function Profile(): ReactElement {
    const eventsStub = events;
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#343434" />
            <Container>
            <Header span>
                <Image source={require('../assets/bg2.jpg')}
                            style={{ position: 'absolute', top: 0, left: 0, width: '130%', height: '100%' }}
                            resizeMode='cover' />
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
                <Content padder style={{ backgroundColor: '#ffffff' }}>
                    <Grid>
                        <Row>
                            <Col>
                                <List dataArray={eventsStub}
                                    renderRow={ListItemRenderer}
                                    keyExtractor={item => item.id} />
                            </Col>
                        </Row>
                    </Grid>
                </Content>
            </Container>
        </>
    );
}