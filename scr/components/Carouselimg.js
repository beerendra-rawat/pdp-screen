import { useEffect, useRef, useState } from "react";
import {
    View,
    Image,
    Text,
    FlatList,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
} from "react-native";

const { width } = Dimensions.get("window");

const images = [
    require("../../assets/img/banner1.png"),
    require("../../assets/img/banner2.png"),
    require("../../assets/img/banner1.png"),
    require("../../assets/img/banner2.png"),
];

export default function Carouselimg() {
    const flatListRef = useRef(null);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            const next = (index + 1) % images.length;

            flatListRef.current?.scrollToIndex({
                index: next,
                animated: true,
            });

            setIndex(next);
        }, 3000);

        return () => clearInterval(timer);
    }, [index]);

    return (
        <View>
            <FlatList
                ref={flatListRef}
                data={images}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                keyExtractor={(_, i) => i.toString()}
                renderItem={({ item }) => (
                    <Image source={item} style={styles.image} />
                )}
                onMomentumScrollEnd={(e) => {
                    const i = Math.round(
                        e.nativeEvent.contentOffset.x / width
                    );
                    setIndex(i);
                }}
            />

            <View style={styles.indicator}>
                {images.map((_, i) => (
                    <View
                        key={i}
                        style={[
                            styles.dot,
                            index === i && styles.activeDot,
                        ]}
                    />
                ))}
            </View>

            <TouchableOpacity style={styles.viewAll}>
                <Text style={styles.btnText}>View All (20)</Text>
            </TouchableOpacity>

            <View style={styles.topRow}>
                <View style={styles.leftBtn}>
                    <TouchableOpacity>
                        <Image source={require("../../assets/img/leftArrow.png")} />
                    </TouchableOpacity>
                </View>
                <View style={styles.rightBtn}>
                    <TouchableOpacity>
                        <Image source={require("../../assets/img/translate.png")} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require("../../assets/img/heart.png")} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require("../../assets/img/share.png")} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    image: {
        width: width,
        height: 260,
        resizeMode: "cover",
    },

    indicator: {
        position: "absolute",
        bottom: 24,
        left: 24,
        flexDirection: "row",
        justifyContent: 'space-between',
    },

    dot: {
        marginTop: 24,
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "#ccc",
        marginRight: 6,
    },

    activeDot: {
        width: 22,
        backgroundColor: "red",
    },

    viewAll: {
        backgroundColor: '#111111B8',
        borderRadius: 6,
        width: 114,
        position: "absolute",
        bottom: 10,
        right: 24,
    },

    btnText: {
        color: '#ffffff',
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 8,
        paddingBottom: 13,
        fontSize: 14,
        fontWeight: 600,
        fontFamily: 'DMSans-SemiBold',
    },

    topRow: {
        position: "absolute",
        top: 44,
        left: 24,
        right: 24,
        flexDirection: "row",
        justifyContent: "space-between",
    },

    leftBtn: {
        backgroundColor: '#111111B8',
        padding: 13,
        width: 36,
        height: 36,
        borderRadius: 6,
    },

    rightBtn: {
        flexDirection: "row",
        gap: 12,
        backgroundColor: '#111111B8',
        padding: 13,
        width: 116,
        height: 36,
        borderRadius: 6,
    },
});
