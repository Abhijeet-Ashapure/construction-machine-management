import {StyleSheet} from 'react-native';
import scale, {verticalScale} from '../../utils/Scale';
import Theme from '../../utils/Theme';

export default StyleSheet.create({
    container: {
        height: verticalScale(40),
        width: '100%',
        backgroundColor: Theme.header,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: scale(2),
        borderColor: Theme.titleborder
    },
    title: {
        color: 'black',
        fontWeight: '700',
        fontSize: 14
    }
})