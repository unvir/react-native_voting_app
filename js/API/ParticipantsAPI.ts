import BaseAPI from './BaseAPI';

class ParticipantsAPI extends BaseAPI {
  constructor() {
    super('participants/');
  }

  public getParticipants(eventId: number): Promise<IEventParticipantsListData> {
    return this.get(`${eventId}`) as Promise<IEventParticipantsListData>;
  }
}

export default new ParticipantsAPI();
