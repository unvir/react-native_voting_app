interface IEventParticipant {
    id: string;
    fullName: string;
    avater: string;
}

export interface ITabEventParticipantsProps {
    participants: IEventParticipant[]
}

export interface ITabEventInfoProps {
    title: string;
    description: string;
    dateString: string;
    timeString: string;
    location?: string;
}

export interface IListItemParticipantsProps {
    fullName: string;
    avatar: string;
}

export interface IListItemEventsProps {
    title: string;
    description: string;
    imageLink: string;
    date: Date | null;
}

export interface IProgressBarProps {
    progress: number;
    textInfo?: boolean;
}