import BaseAPI from './BaseAPI';

class EventsAPI extends BaseAPI {
  constructor() {
    super('events/');
  }

  public getFeaturedList(userId: number): Promise<IEventParticipantsListData> {
    return this.get(`user/${userId}`) as Promise<IEventParticipantsListData>;
  }

  public getJudgeList(eventId: number): Promise<IEventJudgesListData> {
    return this.get(`judges/${eventId}`) as Promise<IEventJudgesListData>;
  }
}

export default new EventsAPI();
