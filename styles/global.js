import {ImageBackground, StyleSheet} from 'react-native';
import {FONTS} from './Fonts'
import { COLORS } from './Colors';

export const globalStyles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: Platform.OS === 'ios' && 20,
        padding: 20,
    },
    titleText:{
        fontFamily: FONTS.BOLD,
        fontSize: 18,
        color: COLORS.PRIMARY,
    },
    paragraph:{
        // margin: 8,
        lineHeight: 20
    }
})