import {Col, Grid, List, Row} from 'native-base';
import React from 'react';
import {ListItemScoring} from '../';
import {IListItemParticipantsProps} from '../interfaces';

interface ITabEventScoringProps {
    participants: Array<IListItemParticipantsProps & IEventScoresFromJudge>;
    eventId: number;
    userId: number;
}

export default function TabEventScoring(props: ITabEventScoringProps) {
    const {userId, eventId, participants} = props;

    return (
        <Grid>
            <Row>
                <Col>
                    <List
                        dataArray={participants}
                        renderRow={ListItemScoring}
                        keyExtractor={item => item.id}
                    />
                </Col>
            </Row>
        </Grid>
    );
}
