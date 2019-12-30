interface IAuthLoginData {
  data: {
    fullName: string;
    id: number;
  };
}

interface IEventsUserListData {
  data: IEventsUserList[];
}

interface IEventsUserList {
  title: string;
  id: number;
  imageLink: string;
  description: string;
  location: string;
  date: string; // transform to date ->
  // participants: IEventParticipants[];
}

interface IEventParticipantsListData {
  data: IEventParticipantsList[];
}

interface IEventParticipantsList {
  id: number;
  fullName: string;
  avatar: string;
  totalscore: string;
}
