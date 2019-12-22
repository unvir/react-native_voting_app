import {
  Body,
  Left,
  List,
  ListItem,
  Right,
  Text,
  Thumbnail,
  View,
} from 'native-base';
import React, {ReactElement} from 'react';
import {ParticipantScoringRadioForm} from '../';
import {IListItemParticipantsProps} from '../interfaces';
import {participantScoringAvatar} from '../styles';

export default function ListItemScoring(
  props: IListItemParticipantsProps,
): ReactElement {
  return (
    <List>
      <ListItem>
        <Body>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={participantScoringAvatar.avatarContainer}>
              <Thumbnail
                source={{uri: props.avatar}}
                style={participantScoringAvatar.avatar}
              />
            </View>
            <Text>{props.fullName}</Text>
          </View>
          <ParticipantScoringRadioForm />
        </Body>
      </ListItem>
    </List>
  );
}
