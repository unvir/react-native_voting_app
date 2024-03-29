import {Body, Left, ListItem, Right, Text, Thumbnail} from 'native-base';
import React, {ReactElement} from 'react';
import NavigationService from '../../navigationService';
import {IListItemEventsProps} from '../interfaces';

export default function ListItemEvents(
  props: IListItemEventsProps,
): ReactElement {
  const {imageLink, title, description} = props;
  const date = new Date(props.date);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const dateString = `${(day < 10 ? '0' : '') + day}.${(month < 10 ? '0' : '') +
    month}.${year % 100}`;
  const timeString = `${(hours < 10 ? '0' : '') + hours}:${(minutes < 10
    ? '0'
    : '') + minutes}`;
  return (
    <ListItem
      onPress={() =>
        NavigationService.navigate('Event', {...props, dateString, timeString})
      }>
      <Left style={{flexGrow: 2}}>
        <Thumbnail source={{uri: imageLink}} />
      </Left>
      <Body style={{flexGrow: 6}}>
        <Text numberOfLines={1}>{title}</Text>
        <Text note numberOfLines={2} ellipsizeMode="tail">
          {description}
        </Text>
      </Body>
      <Right style={{flexGrow: 2}}>
        <Text note>{dateString}</Text>
        <Text note>{timeString}</Text>
      </Right>
    </ListItem>
  );
}
