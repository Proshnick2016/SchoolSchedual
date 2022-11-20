import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#D4DEEB',
        borderBottomSize: 'solid',
    },
    paperImage: {
        marginTop: 10,
        marginBottom: 10,
        height: 100,
        width: 100,
        borderRadius: 15
    },
    paperDetails: {
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 1,
        marginLeft: 10
    },
    paperTitle: {
        fontSize: 16,
        fontWeight: 700
    },
    paperData: {
        fontSize: 12,
        marginTop: 12,
    }
});