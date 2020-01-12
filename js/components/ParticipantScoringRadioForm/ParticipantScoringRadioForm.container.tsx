import React, {Component} from 'react';
import {
  IParticipantScoringRadioFormProps,
  IParticipantScoringRadioFormState,
} from '../interfaces';
import ParticipantScoringRadioForm from './ParticipantScoringRadioForm.component';

export default class ParticipantScoringRadioFormContainer extends Component<
  IParticipantScoringRadioFormProps,
  IParticipantScoringRadioFormState
> {
  private readonly setActive: (active: number) => void;
  private contentButtons: number[] = [];

  constructor(props: IParticipantScoringRadioFormProps) {
    super(props);
    this.state = {
      active: props.value || 0,
    };
    this.setActive = active => {
      this.props.changeCallback(active);
      this.setState({
        active,
      });
    };

    const MAX_SCORING_VALUE = 10;

    for (let i = 0; i <= (props.max || MAX_SCORING_VALUE); i++) {
      this.contentButtons.push(i);
    }
  }

  public componentDidUpdate(prevProps: IParticipantScoringRadioFormProps) {
    if (prevProps.value !== this.props.value) {
      this.setState({
        active: this.props.value || 0,
      });
    }
  }

  public render() {
    return (
      <ParticipantScoringRadioForm
        content={this.contentButtons}
        active={this.state.active}
        setActive={this.setActive}
      />
    );
  }
}
