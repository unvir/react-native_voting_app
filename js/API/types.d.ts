interface IAuthLoginData {
  data: {
    fullName: string;
    id: number;
  };
}

interface IAuthRegisterData {
  data: {
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

interface IEventScoresFromJudgeData {
  data: IEventScoresFromJudge[];
}

interface IEventScoresFromJudge {
  participantId: number;
  value: number;
  eventId: number;
  judgeId: number;
}

interface IEventJudgesListData {
  data: IEventJudgesList;
}

interface IEventJudgesList {
  userIds: number[];
}

interface IEventParticipantsListData {
  data: IEventParticipantsList[];
}

interface IEventParticipantsList {
  id: number;
  fullName: string;
  avatar: string;
  totalscore: number;
  score?: number;
}
