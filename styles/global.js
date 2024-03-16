import {StyleSheet} from 'react-native';
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
        color: COLORS.DARK,
    },
    paragraph:{
        lineHeight: 20
    },
    input:{
        borderWidth: 1,
        borderColor: COLORS.LIGHT,
        borderRadius: 6,
        fontSize: 18,
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 20
    },
    formContainer:{
        marginTop: 20
    }

})