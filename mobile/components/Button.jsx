import { Pressable, StyleSheet, Text } from "react-native";

const Button = ({ title, onPress }) => {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.button,
                pressed && styles.buttonPressed // Aplica o estilo ao pressionar
            ]}
        >
            <Text style={styles.title}>{title}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        height: 36,
        width: 250,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green', 
        borderRadius: 6,
        marginVertical: 6,
        shadowColor: 'transparent',
        transform: [{ translateX: 0 }, { translateY: 0 }]
    },
    buttonPressed: {
        transform: [{ translateX: -2 }, { translateY: -2 }], // Move o botão
        shadowColor: '#5566c2',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 4
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'Arial'
    }
});

export default Button;
