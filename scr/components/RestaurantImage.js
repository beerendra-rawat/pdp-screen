import { View, Text, Image, Pressable, StyleSheet } from "react-native";

export default function RestaurantImage() {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.title}>Restaurant Photos</Text>
                <Pressable>
                    <Text style={styles.viewAll}>View All</Text>
                </Pressable>
            </View>

            <View style={styles.mainRow}>
                <View>
                    <Image
                        source={require("../../assets/img/img8.png")}
                        style={styles.bigImage}
                    />
                </View>
                <View>
                    <Image source={require("../../assets/img/img2.png")} style={styles.smallImage} />
                    <Image source={require("../../assets/img/img3.png")} style={styles.smallImage} />
                    <Image source={require("../../assets/img/img4.png")} style={styles.smallImage} />
                </View>
            </View>

            <View style={styles.bottomRow}>
                <Image source={require("../../assets/img/img5.png")} style={styles.bottomImage} />
                <Image source={require("../../assets/img/img6.png")} style={styles.bottomImage} />
                <Image source={require("../../assets/img/img7.png")} style={styles.bottomImage} />
                <Image source={require("../../assets/img/img8.png")} style={styles.bottomImage} />
            </View>
            
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        paddingLeft: 24,
        paddingRight: 24,
        backgroundColor: "#fff",
    },
    header: {
        paddingTop: 36,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    title: {
        fontFamily: 'Lora-SemiBold',
        fontSize: 22,
        fontWeight: 600,
    },
    viewAll: {
        fontFamily: 'Lora-Medium',
        color: "#D3072B",
        fontSize: 14,
        fontWeight: 500,
    },
    mainRow: {
        paddingTop: 24,
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    bigImage: {
        width: 247,
        height: 247,
        borderRadius: 12,
    },
    smallImage: {
        width: 73,
        height: 73,
        borderRadius: 12,
        marginBottom: 12,
    },
    bottomRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 12,
    },
    bottomImage: {
        width: 73,
        height: 73,
        borderRadius: 12,
        marginBottom: 36,
    },
});

