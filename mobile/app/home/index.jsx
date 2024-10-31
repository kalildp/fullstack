import { FlatList, ScrollView, StyleSheet, Text, View, Image } from "react-native"




const Home = () => {
    return (
        <View style={styles.container}>
            <Text>orknbkle ekibj</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1F1F1F',
    },
    sectionContainer: {
        marginVertical: 10,
    },
    feed: {
        marginTop: 90
    },
    row: {
        paddingHorizontal: 20,
        gap: 10,
    },
    img: {
        width: 125,
        height: 125,
    },
    itemContainer: {
        alignItems: 'center',

        backgroundColor: '#2F2F2F',
        borderRadius: 8,
    },
    textContainer: {
        marginLeft: 8,
    },
    itemText: {
        color: '#FFFFFF',
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
        paddingVertical: 8,
        paddingHorizontal: 10,
    }
});

export default Home;