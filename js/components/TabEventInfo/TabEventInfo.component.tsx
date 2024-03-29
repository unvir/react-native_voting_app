import {
  Body,
  Button,
  Card,
  CardItem,
  Col,
  Grid,
  Icon,
  Row,
  Text,
  Toast,
} from 'native-base';
import React, {ReactElement} from 'react';
import {ITabEventInfoProps} from '../interfaces';

export default function TabEventInfo(props: ITabEventInfoProps): ReactElement {
  const {location, dateString, timeString, description, isFeatured} = props;
  return (
    <>
      <Grid>
        <Row
          style={{paddingHorizontal: '10%', paddingTop: 15, maxWidth: '90%'}}>
          <Col style={{flex: 1, flexDirection: 'row'}}>
            <Icon
              name="pin"
              style={{color: '#787878', fontSize: 20, marginRight: 10}}
            />
            <Text style={{color: '#787878'}}>{location}</Text>
          </Col>
        </Row>
        <Row
          style={{paddingHorizontal: '10%', paddingTop: 15, maxWidth: '90%'}}>
          <Col style={{flex: 1, flexDirection: 'row'}}>
            <Icon
              name="calendar"
              style={{color: '#787878', fontSize: 20, marginRight: 10}}
            />
            <Text style={{color: '#787878'}}>{dateString}</Text>
          </Col>
          <Col style={{flex: 1, flexDirection: 'row'}}>
            <Icon
              name="time"
              style={{color: '#787878', fontSize: 20, marginRight: 10}}
            />
            <Text style={{color: '#787878'}}>{timeString}</Text>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card transparent>
              <CardItem>
                <Body>
                  <Text numberOfLines={7}>{description}</Text>
                </Body>
              </CardItem>
            </Card>
          </Col>
        </Row>
        {!isFeatured && (
          <Row>
            <Col style={{paddingHorizontal: 18}}>
              <Button
                full
                iconLeft
                onPress={() =>
                  Toast.show({
                    text: 'Добавлено в список событий',
                  })
                }>
                <Icon name="add" />
                <Text>В мои события</Text>
              </Button>
            </Col>
          </Row>
        )}
        <Row>
          <Col>
            <Text />
          </Col>
        </Row>
      </Grid>
    </>
  );
}
