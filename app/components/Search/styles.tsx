import {StyleSheet} from 'react-native';
import scale, {verticalScale} from '../../utils/Scale';
import Theme from '../../utils/Theme';

export default StyleSheet.create({
    container: {
        flexDirection:'row',
        paddingTop: scale(3.5),
        paddingHorizontal: scale(15),
        alignItems: 'center',
        justifyContent: 'space-around'
    }
})