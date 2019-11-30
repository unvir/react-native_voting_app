import { Body,
    Left,
    List,
    ListItem,
    Right,
    Text,
    Thumbnail} from 'native-base';
import React, { ReactElement } from 'react';
import { ParticipantProgressBar } from '.';
import { IListItemParticipantsProps } from './interfaces';

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
