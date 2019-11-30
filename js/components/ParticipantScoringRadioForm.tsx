import { Text, View } from 'native-base';
import React, { ReactElement } from 'react';
import { IParticipantScoringRadioFormProps } from './interfaces';
import { participantScoringForm } from './styles';

const MAX_SCORING_VALUE = 10;

const FormButton = (content: string) =>
        <View style={ participantScoringForm.radioButton }><Text>{ content }</Text></View>;

export default function ParticipantScoringRadioForm({ maxValue, defaultValue = 0 }:
    IParticipantScoringRadioFormProps): ReactElement {

    return (
        <View>

        </View>
    );
}
