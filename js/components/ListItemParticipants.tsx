import React, { ReactElement } from 'react';
import { Left,
    Body,
    Right,
    Thumbnail,
    ListItem,
    Text,
    List} from 'native-base';
import { IListItemParticipantsProps } from './interfaces';
import { ParticipantProgressBar } from '.';

export default function ListItemParticipants(props: IListItemParticipantsProps): ReactElement {
    return (
        <List>
            <ListItem avatar>
            <Left>
                <Thumbnail source={{ uri: props.avatar }} />
            </Left>
            <Body>
                <Text>{ props.fullName }</Text>
                <ParticipantProgressBar progress={50} />
            </Body>
            </ListItem>
        </List>
    );
}