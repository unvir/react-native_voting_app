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
import ScoresAPI from '../../API/ScoresAPI';

import {ParticipantScoringRadioForm} from '../';
import {IListItemParticipantsProps} from '../interfaces';
import {participantScoringAvatar} from '../styles';

export default function ListItemScoring(
  props: IListItemParticipantsProps & IEventScoresFromJudge,
): ReactElement {
  const {avatar, participantId, fullName, value, eventId, judgeId} = props;

  return (
    <List>
      <ListItem>
        <Body>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={participantScoringAvatar.avatarContainer}>
              <Thumbnail
                source={{uri: avatar}}
                style={participantScoringAvatar.avatar}
              />
            </View>
            <Text>{fullName}</Text>
          </View>
          <ParticipantScoringRadioForm
            changeCallback={(score) => ScoresAPI.score(eventId, judgeId, participantId, score)}
            value={value}
          />
        </Body>
      </ListItem>
    </List>
  );
}
