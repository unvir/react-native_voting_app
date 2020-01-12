import {Text, View} from 'native-base';
import React, {ReactElement} from 'react';
import {IProgressBarProps} from '../interfaces';

const MAX_PROGRESS_VALUE = 100;
const normalizeProgress = (progress: number) =>
  progress > MAX_PROGRESS_VALUE ? MAX_PROGRESS_VALUE : progress;

const TextInformation = (progressString: number, progressValue?: number): ReactElement => (
  <Text note>
      {progressString}%{/*/{MAX_PROGRESS_VALUE}*/}
  </Text>
);

export default function ParticipantProgressBar({
  progress,
  value,
  textInfo = true,
}: IProgressBarProps): ReactElement {
  const progressString = progress * 100; // normalizeProgress(progress).toFixed(1);
  return (
    <>
      {value && (<Text note>Баллы: {value}</Text>)}
      <View
        style={{
          backgroundColor: 'rgba(200, 200, 200, 0.2)',
          height: 3,
          width: '95%',
        }}>
        <View
          style={{
            backgroundColor: 'powderblue',
            height: 3,
            width: `${progressString}%`,
          }}
        />
      </View>
      {textInfo === true ? TextInformation(progressString) : ''}
    </>
  );
}
