import { Col, Grid, List, Row } from 'native-base';
import React from 'react';
import { ListItemScoring } from '.';
import { ITabEventParticipantsProps } from './interfaces';

export default function TabEventScoring(props: ITabEventParticipantsProps) {
    return (
        <Grid>
            <Row>
                <Col>
                    <List dataArray={ props.participants }
                            renderRow={ ListItemScoring }
                            keyExtractor={ (item) => item.id } />
                </Col>
            </Row>
        </Grid>
    );
}
