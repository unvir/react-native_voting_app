import { Body,
    Col,
    Container,
    Content,
    Grid,
    Header,
    Left,
    Right,
    Row,
    Tab,
    Tabs,
    Text,
    Title,
} from 'native-base';
import React from 'react';
import {
    Image,
    StatusBar,
} from 'react-native';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';
import { TabEventInfo, TabEventParticipants, TabEventScoring } from '../components';

class Event extends React.Component<NavigationInjectedProps> {
    public render() {
        const { navigation } = this.props;
        return (
            <>
                <StatusBar barStyle="light-content" backgroundColor="#343434" />
                <Container>
                    <Header hasTabs span>
                        <Image source={ require('../assets/bg2.jpg') }
                                style={{ position: 'absolute', top: 0, left: 0, width: '130%', height: '130%' }}
                                resizeMode="cover" />
                        <Left />
                        <Body>
                            <Title>{ navigation.getParam('title') }</Title>
                        </Body>
                        <Right />
                    </Header>
                    <Content>
                        <Tabs locked>
                        <Tab heading="Информация">
                            <TabEventInfo description={ navigation.getParam('description') }
                                            dateString={ navigation.getParam('dateString') }
                                            timeString={ navigation.getParam('timeString') }
                                            location={ navigation.getParam('location') } />
                        </Tab>
                        <Tab heading="Участники">
                            <TabEventParticipants participants={ navigation.getParam('participants') }/>
                        </Tab>
                        <Tab heading="Оценивание">
                            <TabEventScoring participants={ navigation.getParam('participants') }/>
                        </Tab>
                        </Tabs>
                    </Content>
                </Container>
            </>
        );
    }
}

export default withNavigation(Event);
