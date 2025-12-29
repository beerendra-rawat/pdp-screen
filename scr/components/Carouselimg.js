import { useEffect, useRef, useState } from "react";
import {
    View,
    Image,
    Text,
    FlatList,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

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
        <View style={styles.carouselContainer}>
            <FlatList
                ref={flatListRef}
                data={images}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                keyExtractor={(_, i) => i.toString()}
                renderItem={({ item }) => (

                    <ImageBackground source={item} style={styles.image} resizeMode="cover">
                        <LinearGradient
                            colors={["rgba(17,17,17,0.6)", "transparent"]}
                            style={styles.topFade}
                        />
                        <LinearGradient
                            colors={["transparent", "rgba(17,17,17,0.6)"]}
                            style={styles.bottomFade}
                        />
                        <LinearGradient
                            colors={["rgba(17,17,17,0.6)", "transparent"]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.leftFade}
                        />
                        <LinearGradient
                            colors={["transparent", "rgba(17,17,17,0.6)"]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.rightFade}
                        />
                    </ImageBackground>
                )}
                onMomentumScrollEnd={(e) => {
                    const i = Math.round(e.nativeEvent.contentOffset.x / width);
                    setIndex(i);
                }}
            />

            <View style={styles.indicator}>
                {images.map((_, i) => (
                    <View key={i} style={[styles.dot, index === i && styles.activeDot]} />
                ))}
            </View>

            <TouchableOpacity style={styles.viewAll}>
                <Text style={styles.btnText}>View All (20)</Text>
            </TouchableOpacity>

            <View style={styles.topRow}>
                <TouchableOpacity>
                    <View style={styles.leftBtn}>
                        <Image source={require("../../assets/img/leftArrow.png")} />
                    </View>
                </TouchableOpacity>

                <View style={styles.rightBtn}>
                    <TouchableOpacity>
                        <View style={styles.rightSmlBtn}>
                            <Image source={require("../../assets/img/translate.png")} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.rightSmlBtn}>
                            <Image source={require("../../assets/img/heart.png")} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.rightSmlBtn}>
                            <Image source={require("../../assets/img/share.png")} />
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    carouselContainer: {
        position: "relative",
    },

    image: {
        width,
        height: 332,
    },

    topFade: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 80,
    },

    bottomFade: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 80,
    },

    leftFade: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        width: 80,
    },

    rightFade: {
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        width: 80,
    },

    indicator: {
        position: "absolute",
        bottom: 24,
        left: 24,
        flexDirection: "row",
    },

    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "#ccc",
        marginRight: 6,
    },

    activeDot: {
        width: 40,
        height: 8,
        borderRadius: 8,
        backgroundColor: "#D3072B",
    },

    viewAll: {
        position: "absolute",
        bottom: 10,
        right: 24,
        backgroundColor: "#111111B8",
        borderRadius: 6,
    },

    btnText: {
        color: "#FFFFFF",
        paddingHorizontal: 16,
        paddingVertical: 8,
        fontSize: 14,
        fontWeight: "600",
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
        backgroundColor: "#11111166",
        width: 36,
        height: 36,
        borderRadius: 6,
        justifyContent: "center",
        alignItems: "center",
    },

    rightBtn: {
        flexDirection: "row",
        backgroundColor: "#11111166",
        paddingHorizontal: 12,
        height: 36,
        borderRadius: 6,
        alignItems: "center",
    },
    rightSmlBtn: {
        width: 36,
        height: 36,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
