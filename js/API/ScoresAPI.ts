import BaseAPI from './BaseAPI';

class ScoresAPI extends BaseAPI {
  constructor() {
    super('scores/');
  }

  public score(eventId: number, userId: number, participantId: number, score: number): Promise<unknown> {
    return this.put('', {
      eventId,
      participantId,
      score,
      userId,
    }) as Promise<unknown>;
  }

  public getScoresFromJudge(eventId: number, judgeId: number): Promise<IEventScoresFromJudgeData> {
    return this.get(`${eventId}/${judgeId}`) as Promise<IEventScoresFromJudgeData>;
  }
}

export default new ScoresAPI();
