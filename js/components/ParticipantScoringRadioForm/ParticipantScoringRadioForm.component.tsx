import {Button, Text, View} from 'native-base';
import React, {ReactElement} from 'react';
import {FlatList, ScrollView, StyleSheet} from 'react-native';
import {participantScoringForm} from '../styles';

export default function ParticipantScoringRadioForm(props: {
  setActive: (active: number) => void;
  active: number;
  content: number[];
}): ReactElement {
  const {setActive, active, content} = props;
  const FormButton = ({
    buttonContent,
    isActiveButton,
  }: {
    buttonContent: number;
    isActiveButton?: boolean;
  }): ReactElement => {
    const style = {
      button: {},
      text: {},
    };

    if (isActiveButton) {
      style.button = StyleSheet.flatten([
        participantScoringForm.radioButton,
        participantScoringForm.radioButtonActive,
      ]);
      style.text = StyleSheet.flatten([
        participantScoringForm.radioButtonText,
        participantScoringForm.radioButtonActiveText,
      ]);
    } else {
      style.button = participantScoringForm.radioButton;
      style.text = participantScoringForm.radioButtonText;
    }

    return (
      <Button style={style.button} onPress={() => setActive(buttonContent)}>
        <Text style={style.text}>{buttonContent}</Text>
      </Button>
    );
  };

  return (
    <View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        snapToStart={true}>
        <FlatList
          horizontal={true}
          data={content}
          keyExtractor={item => '' + item}
          renderItem={({item}) => (
            <FormButton buttonContent={item} isActiveButton={active === item} />
          )}
        />
      </ScrollView>
    </View>
  );
}
