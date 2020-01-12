interface IEventParticipant {
  id: string;
  fullName: string;
  avatar: string;
}

interface IEvent {
  id: string;
  imageLink: string;
  title: string;
  description: string;
  location?: string;
  date: string;
  participants?: IEventParticipant;
}

// tslint:disable-next-line:no-empty-interface
export interface IListItemParticipantsProps extends IEventParticipantsList {}
// tslint:disable-next-line:no-empty-interface
export interface IListItemEventsProps extends IEvent {}

export interface ITabEventParticipantsProps {
  participants: IEventParticipantsList[];
  eventId: number;
  userId: number;
}

export interface ITabEventInfoProps {
  dateString: string;
  timeString: string;
  location: string;
  description: string;
  isFeatured: boolean;
}

export interface IProgressBarProps {
  progress: number;
  value?: number;
  textInfo?: boolean;
}

export interface IParticipantScoringRadioFormState {
  active: number;
}

export interface IParticipantScoringRadioFormProps {
  changeCallback: (active: number) => void;
  maxValue?: number;
  max?: number;
  value?: number;
}
