import { Body,
    Left,
    List,
    ListItem,
    Right,
    Text,
    Thumbnail} from 'native-base';
import React, { ReactElement } from 'react';
import { IListItemParticipantsProps } from './interfaces';

export default function ListItemScoring(props: IListItemParticipantsProps): ReactElement {
    return (
        <List>
            <ListItem>
                <Body>
                    <Thumbnail large source={{ uri: props.avatar }} />
                    <Text>{ props.fullName }</Text>
                </Body>
            </ListItem>
        </List>
    );
}
