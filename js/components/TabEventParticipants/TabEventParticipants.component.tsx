import {Col, Grid, List, Row} from 'native-base';
import React, {ReactElement} from 'react';
import {ListItemParticipants} from '../';
import {ITabEventParticipantsProps} from '../interfaces';

export default function EventParticipantsTab(
  props: ITabEventParticipantsProps,
): ReactElement {
  const maxScore = props.participants.sort((p1, p2) => (+p2.totalscore) - (+p1.totalscore))[0].totalscore;
  return (
    <Grid>
      <Row>
        <Col>
          <List
            dataArray={props.participants.map((p) =>
                ({...p, score: p.totalscore, totalscore: (+p.totalscore / +maxScore)}))
                .sort((a, b) => a.score - b.score)
            }
            renderRow={ListItemParticipants}
            keyExtractor={item => item.id}
          />
        </Col>
      </Row>
    </Grid>
  );
}
