import {Button, Col, Content, Grid, H1, Input, Item, Label, Row} from 'native-base';
import React from 'react';
import {Alert, Modal, Text} from 'react-native';
import {screenStyles} from '../../Screens/styles';

export interface IModalEventOpenerProps {
    visible: boolean;
}

export default function ModalEventOpener(props: IModalEventOpenerProps) {
    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
            }}>
            <Content padder style={{backgroundColor: 'steelblue'}}>
                <Grid>
                    <Row style={{margin: '5%'}}>
                        <Col>
                            <H1 style={{color: 'white', textAlign: 'center'}}>Поиск события</H1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Item regular style={screenStyles.formItem}>
                                <Label>ID события</Label>
                                <Input
                                    value={'1'}
                                />
                            </Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button
                                light
                                full
                                style={{margin: '1%'}}
                            >
                                <Text>Ок</Text>
                            </Button>
                        </Col>
                        <Col>
                            <Button
                                light
                                full
                                style={{margin: '1%'}}
                                onPress={() => {
                                    this.setState({
                                        modalVisible: false,
                                    });
                                }}
                            >
                                <Text>Отмена</Text>
                            </Button>
                        </Col>
                    </Row>
                </Grid>
            </Content>
        </Modal>
    );
}
