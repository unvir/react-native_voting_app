import { StyleSheet } from 'react-native';

export const participantScoringForm = StyleSheet.create({
    radioButton: {
        alignItems: 'center',
        backgroundColor: '#fafafa',
        borderColor: '#33333333',
        borderRadius: 5,
        borderWidth: 1,
        color: '#000',
        flex: 1,
        height: 70,
        justifyContent: 'center',
        marginRight: 5,
        marginVertical: 10,
        width: 70,
    },
    radioButtonActive: {
        backgroundColor: 'steelblue',
    },
    radioButtonActiveText: {
        color: '#fff',
    },
    radioButtonText: {
        color: '#333',
    },
});
