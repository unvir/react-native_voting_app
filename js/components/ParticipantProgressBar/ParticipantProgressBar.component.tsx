import {Text, View} from 'native-base';
import React, {ReactElement} from 'react';
import {IProgressBarProps} from '../interfaces';

const MAX_PROGRESS_VALUE = 100;
const normalizeProgress = (progress: number) =>
  progress > MAX_PROGRESS_VALUE ? MAX_PROGRESS_VALUE : progress;

const TextInformation = (progressString: string): ReactElement => (
  <Text note>
    {progressString}/{MAX_PROGRESS_VALUE}
  </Text>
);

export default function ParticipantProgressBar({
  progress,
  textInfo = true,
}: IProgressBarProps): ReactElement {
  const progressString = normalizeProgress(progress).toFixed(1);
  return (
    <>
      {textInfo === true ? TextInformation(progressString) : ''}
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
    </>
  );
}
