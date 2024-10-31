import { StyleSheet, Text, TextInput, View } from "react-native";

const Input = ({ label, value, onChangeText, secureTextEntry }) => {
    return (
        <View>
            <Text style={styles.label}>{label}:</Text>      
                <TextInput
                style={styles.input}
                    placeholder={label}
                    placeholderTextColor={'rgba(0, 128, 0, 0.6)'}
                    value={value}
                    onChangeText={onChangeText}
                    secureTextEntry={secureTextEntry || false}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        fontWeight: 'bold',
        marginBottom: 3,
        color: 'green', // Alterado para verde
        fontSize: 16,
        fontFamily: 'Arial' // Nova fonte
    },
    input: {
        height: 42,
        minWidth: 250,
        width: '90%',
        maxWidth: 320,
        backgroundColor: '#1B1B1B',
        borderColor: 'green',  // Alterado para verde
        borderWidth: 1,
        paddingHorizontal: 6,
        borderRadius: 4,
        color: 'green', // Alterado para verde
        fontSize: 14,
        fontFamily: 'Arial' // Nova fonte
    }
});

export default Input;