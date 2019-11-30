import { Body, Col, Grid, Left, List, ListItem, Right, Row, Tab, Text, Thumbnail, View } from 'native-base';
import React, { ReactElement } from 'react';
import { ListItemParticipants } from '.';
import { ITabEventParticipantsProps } from './interfaces';

export default function EventParticipantsTab(props: ITabEventParticipantsProps): ReactElement {
    return (
        <Grid>
            <Row>
                <Col>
                    <List dataArray={ props.participants }
                            renderRow={ ListItemParticipants }
                            keyExtractor={ (item) => item.id } />
                </Col>
            </Row>
        </Grid>
    );
}
