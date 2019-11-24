import React, { ReactElement } from 'react';
import { screenStyles } from './styles';
import {
    StatusBar,
    Image
} from 'react-native';
import listItemRenderer from '../components/eventsListItem';
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

export default function Event(props: object): ReactElement {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#343434" />
            <Container>
                <Content padder style={{ backgroundColor: '#ffffff' }}>
                    <Grid>
                        <Row>
                            <Col>
                                <Text> hello</Text>
                            </Col>
                        </Row>
                    </Grid>
                </Content>
            </Container>
        </>
    );
}