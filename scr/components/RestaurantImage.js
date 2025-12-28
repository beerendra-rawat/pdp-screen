import { View, Text, Image, Pressable, StyleSheet, TouchableOpacity } from "react-native";

export default function RestaurantImage() {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.title}>Restaurant Photos</Text>
                <TouchableOpacity>
                    <Text style={styles.viewAll}>View All</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.topRow}>
                <View >
                    <Image source={require("../../assets/img/img8.png")}
                        style={styles.bigImg}
                    />
                </View>
                <View style={styles.rightImgCol}>
                    <Image source={require("../../assets/img/img3.png")}
                        style={styles.rightimg}
                    />
                    <Image source={require("../../assets/img/img6.png")}
                        style={styles.rightimg}
                    />
                    <Image source={require("../../assets/img/img5.png")}
                        style={styles.rightimg}
                    />
                </View>
            </View>

            <View style={styles.BottomRow}>
                <Image source={require("../../assets/img/img7.png")}
                    style={styles.BottomImg} />
                <Image source={require("../../assets/img/img2.png")}
                    style={styles.BottomImg} />
                <Image source={require("../../assets/img/img1.png")}
                    style={styles.BottomImg} />
                <Image source={require("../../assets/img/img4.png")}
                    style={styles.BottomImg} />
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
        alignItems: "center",
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
    topRow: {
        paddingTop: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bigImg: {
        borderRadius: 12,
        width: 225,
        height: 247,
    },
    rightImgCol: {
        justifyContent: 'space-between',
    },
    rightimg: {
        marginLeft: 16,
        borderRadius: 12,
        width: 73,
        height: 73
    },
    BottomRow: {
        paddingTop: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    BottomImg: {
        width: 73,
        height: 73,
        borderRadius: 12,
    }
});

