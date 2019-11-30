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
    date: Date | null;
    participants?: IEventParticipant
}

export interface IListItemParticipantsProps extends IEventParticipant { }
export interface IListItemEventsProps extends IEvent { }

export interface ITabEventParticipantsProps {
    participants: IEventParticipant[]
}

export interface ITabEventInfoProps {
    dateString: string;
    timeString: string;
    location: string;
    description: string;
}

export interface IProgressBarProps {
    progress: number;
    textInfo?: boolean;
}

export interface IParticipantScoringRadioFormState {
    active: number;
}

export interface IParticipantScoringRadioFormProps {
    maxValue?: number;
    defaultValue?: number;
}
