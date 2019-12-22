interface IAuthLoginData {
  data: {
    fullName: string;
    id: number;
  };
}

interface IEventsUserListData {
  data: {
    title: string;
    id: number;
    imageLink: string;
    description: string;
    location: string;
    date: string; // transform to date ->
    participants: IEventParticipants[];
  };
}

interface IEventParticipants {
  id: number;
  fullName: string;
  avatar: string;
}
