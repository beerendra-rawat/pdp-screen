import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import verdictData from "../data/db.json";
import { LinearGradient } from "expo-linear-gradient";

export default function TheVerdict() {
  const [rating, setRating] = useState(0);
  const maxRating = 5;

  useEffect(() => {
    const ratingFromJson = verdictData.verdict.maxRating;
    setRating(ratingFromJson);
    console.log(ratingFromJson)
  }, []);


  const renderStars = () => {
    let stars = [];
    for (let i = 1; i <= maxRating; i++) {
      stars.push(
        <Image
          key={i}
          source={
            i <= rating
              ? require("../../assets/img/starFilled.png")
              : require("../../assets/img/starEmpty.png")
          }
          style={styles.star}
        />
      );
    }
    return stars;
  };

  return (
    <LinearGradient
      colors={["#0D0D0D", "#2E2E2E"]}
      locations={[0.2478, 0.9465]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <ImageBackground
        source={require("../../assets/img/bgImage.png")}
        style={styles.bg}
      >
        <View style={styles.container}>

          <Text style={styles.title}>Dr. Habib's Verdict</Text>

          <View style={styles.cardRow}>
            <View>
              <Text style={styles.subTitle}>
                {rating.toFixed(1)} out of {maxRating}
              </Text>
              <View style={styles.starRow}>
                {renderStars()}
              </View>
            </View>
            <Image
              style={styles.image}
              source={require("../../assets/img/visitor3.png")}
            />
          </View>

          <Text style={styles.text}>
            The Bombay Canteen is an award-winning restaurant and bar located in the heart of Mumbai.
            Founded by Sameer Seth who started his career as a banker, but soon realized it wasn’t his true love.
            Menus by Chef Floyd Cardoz and Thomas Zacharias, formerly of New York’s Le Bernardin,
            celebrate and reinterpret Indian classics.
          </Text>

          <View style={styles.divider} />

          <View style={styles.footer}>
            <Text style={styles.footerText}>20 Oct, 2025</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity>
                <Image source={require("../../assets/img/like.png")} />
              </TouchableOpacity>
              <Text style={styles.footerText}> Found this helpful</Text>
            </View>
          </View>

        </View>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  container: {
    paddingLeft: 24,
    paddingRight: 24,
  },
  title: {
    fontFamily: 'Lora-SemiBold',
    paddingTop: 36,
    paddingBottom: 20,
    fontSize: 22,
    fontWeight: 600,
    color: '#FFFFFFE5',
  },
  cardRow: {
    paddingTop: 20,
    paddingLeft: 16,
    paddingBottom: 16,
    backgroundColor: "rgba(128, 128, 128, 0.5)",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 12,
  },
  subTitle: {
    fontFamily: 'DMSans-Medium',
    fontSize: 20,
    fontWeight: 500,
    color: '#FFFFFF',
  },
  starRow: {
    flexDirection: "row",
    paddingLeft: 16,
    padding: 6,
    paddingTop: 6,
    backgroundColor: 'green',
    borderRadius: 12,
  },
  star: {
    width: 10,
    height: 10,
    marginRight: 6,
  },
  image: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: 170,
    height: 130,
  },
  text: {
    paddingTop: 24,
    fontSize: 16,
    fontWeight: 400,
    color: '#FFFFFF',
    fontFamily: 'DMSans-Regular',
    textAlign: 'left',
  },
  divider: {
    height: 1,
    backgroundColor: "#FFFFFF33",
    marginVertical: 24,
  },
  footer: {
    paddingBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerText: {
    fontFamily: 'Lora-Medium',
    fontSize: 14,
    fontWeight: 400,
    color: '#FFFFFFCC',
  },
})


