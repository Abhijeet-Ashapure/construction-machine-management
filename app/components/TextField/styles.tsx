import {StyleSheet} from 'react-native';
import scale, {verticalScale} from '../../utils/Scale';
import Theme from '../../utils/Theme';

export default StyleSheet.create({
    textfield: {
        borderWidth: 1,
        borderColor: Theme.titleborder,
        borderRadius: 5,
        height: verticalScale(30),
        flex: 1,
        paddingHorizontal: scale(5),
        color: Theme.text,
    }
})