import {StyleSheet} from 'react-native';
import scale, {verticalScale} from '../../utils/Scale';
import Theme from '../../utils/Theme';

export default StyleSheet.create({
    title: {
        color: Theme.blue,
        marginLeft: scale(10)
    },
    dateHeader: {
        backgroundColor: Theme.dateHeader,
        height: verticalScale(25),
        justifyContent: 'center',
        paddingHorizontal: scale(15),
    },
    dateHeaderText: {
        color: Theme.text,
        fontWeight: 'bold',
    },
    titleStyle: {
        fontSize: 22,
        color: Theme.text,
        fontWeight: 'bold',
    },
    subTitleStyle: {
        fontSize: 14,
        color: Theme.text,
    },
    weatherContainer: {
        paddingHorizontal: scale(20),
        height: verticalScale(80),
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    weatherData: {
        height: verticalScale(60),
        justifyContent: 'space-evenly',
        flex: 1
    },
    imageStyle: {
        height: scale(60),
        width: scale(60),
    }
})