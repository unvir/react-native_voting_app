import React from 'react';
import {
    StatusBar,
    Image
} from 'react-native';
import { withNavigation, NavigationInjectedProps } from 'react-navigation';
import { TabEventInfo, TabEventParticipants } from '../components';
import { Container,
    Content,
    Grid,
    Row,
    Col,
    Header, 
    Left,
    Body,
    Right,
    Text,
    Title,
    Tabs,
    Tab
} from 'native-base';

class Event extends React.Component<NavigationInjectedProps> {
    render() {
        const { navigation } = this.props;
        return (
            <>
                <StatusBar barStyle="light-content" backgroundColor="#343434" />
                <Container>
                    <Header hasTabs span>
                        <Image source={ require('../assets/bg2.jpg') }
                                style={{ position: 'absolute', top: 0, left: 0, width: '130%', height: '130%' }}
                                resizeMode='cover' />
                        <Left />
                        <Body>
                            <Title>{ navigation.getParam('title') }</Title>
                        </Body>
                        <Right />
                    </Header>
                    <Content>
                        <Tabs>
                        <Tab heading="Информация">
                            <TabEventInfo title={ navigation.getParam('title') }
                                            description={ navigation.getParam('description') }
                                            dateString={ navigation.getParam('dateString') }
                                            timeString={ navigation.getParam('timeString') }
                                            location={ navigation.getParam('location') } />
                        </Tab>
                        <Tab heading="Участники">
                            <TabEventParticipants participants={ navigation.getParam('participants') }/>
                        </Tab>
                            <Tab heading="Оценивание">
                                <Grid>
                                    <Row>
                                        <Col>
                                            <Text>{ navigation.getParam('imageLink') }</Text>
                                        </Col>
                                    </Row>
                                </Grid>
                            </Tab>
                        </Tabs>
                    </Content>
                </Container>
            </>
        );
    }
}

export default withNavigation(Event);