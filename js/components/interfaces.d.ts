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
    id: string;
    fullName: string;
    avatar: string;
}

export interface IProgressBarProps {
    progress: number;
    textInfo?: boolean;
}