import { View, StyleSheet, Text, TouchableOpacity } from "react-native"
import { LinearGradient } from "expo-linear-gradient";
import LoginForm from "../../components/LoginForm";
import { Link, useRouter } from "expo-router";

const login = () => {
    const router = useRouter()
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#1F1F1F', 'black']}
                style={styles.background}
            />
            <View style={styles.header}>
            <Text style={styles.title}>Entrar</Text>
            </View>
            <LoginForm />
            <Text style={styles.signUpPath}>Não tem uma conta? <Link href={'/cadastro'} style={styles.link}>Cadastre-se</Link></Text>
            <TouchableOpacity 
            onPress={() => router.push('/home')}
            activeOpacity={0.5}
            style={styles.passwordButton}>
            <Text style={styles.forgotPassword}>sem senha</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d6d6d6'
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
    },
    header: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        top: 20,
        left: 0,
        position: 'absolute'
    },
    title: {
        color: 'white',
        fontSize: 26,
        fontWeight: 'bold'
    },
    passwordButton:{
        backgroundColor: 'white',
        width: 90,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
        marginTop: 12
    },
    forgotPassword: {
        color: 'back',
        fontSize: 10,
        },
    signUpPath: {
        color: 'white',
        marginTop: 6
    },

    link: {
        color: '#6a0dad' // Roxo que combina com o verde
    }
}
)

export default login