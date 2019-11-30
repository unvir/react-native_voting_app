import { Col, Grid, List, Row } from 'native-base';
import React from 'react';
import { ListItemScoring } from '.';

export default function TabEventScoring(props) {
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
