import BaseAPI from './BaseAPI';

class EventsAPI extends BaseAPI {
  constructor() {
    super('events/');
  }

  public getFeaturedList(userId: number): Promise<IEventParticipantsListData> {
    return this.get(`user/${userId}`) as Promise<IEventParticipantsListData>;
  }
}

export default new EventsAPI();
