import React, { ReactElement } from 'react';
import { Grid, Row, Body, Col, Text, List, ListItem, Left, Thumbnail, Right, Tab, View } from 'native-base';
import { ListItemParticipants } from '.';
import { ITabEventParticipantsProps } from './interfaces';

export default function EventParticipantsTab(props: ITabEventParticipantsProps): ReactElement {
    return (
        <Grid>
            <Row>
                <Col>
                    <List dataArray={ props.participants }
                            renderRow={ ListItemParticipants }
                            keyExtractor={ item => item.id } />
                </Col>
            </Row>
        </Grid>
    );
}