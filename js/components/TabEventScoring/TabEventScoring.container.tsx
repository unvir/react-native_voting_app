import React from 'react';
import ScoresAPI from '../../API/ScoresAPI';
import {IListItemParticipantsProps} from '../interfaces';
import TabEventScoring from './TabEventScoring.component';

interface ITabEventScoringContainerProps {
    participants: IListItemParticipantsProps;
    eventId: number;
    userId: number;
}

interface ITabEventScoringContainerState {
    dataArray: Array<IListItemParticipantsProps & IEventScoresFromJudge>;
}

export default class TabEventScoringContainer
    extends React.Component<ITabEventScoringContainerProps, ITabEventScoringContainerState>{
    constructor(props: ITabEventScoringContainerProps) {
        super(props);
        this.state = {
            dataArray: props.participants,
        };
    }

    public componentDidMount() {
        const {eventId, userId, participants} = this.props;
        ScoresAPI.getScoresFromJudge(eventId, userId).then((result) => {
            const dataWithScores = [...participants, ...result.data].reduce((acc: object, element) => {
                const key = element.id || element.participantId;
                acc[key] = Object.assign(acc[key] || {}, element);
                return acc;
            }, {});
            this.setState({
                dataArray: Object.values(dataWithScores),
            });
        });
    }

    public render() {
        const {eventId, userId} = this.props;
        return (
            <TabEventScoring
                participants={this.state.dataArray}
                eventId={eventId}
                userId={userId}
            />
        );
    }
};
