import BaseAPI from './BaseAPI';

class EventsAPI extends BaseAPI {
  constructor() {
    super('events/');
  }

  public getList(userId: number): Promise<IEventsUserListData> {
    return this.get(`user/${userId}`) as Promise<IEventsUserListData>;
  }
}

export default new EventsAPI();
