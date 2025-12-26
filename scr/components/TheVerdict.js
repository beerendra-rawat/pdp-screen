import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";

export default function TheVerdict() {
  const [rating, setRating] = useState(0);
  const maxRating = 5;

  useEffect(() => {
    const fetchVerdict = async () => {
      try {
        const response = await fetch("http://10.0.2.2:3000/verdict");
        //const response = await fetch("http://:3000/verdict");
        if (!response.ok) {
          throw new Error("API not reachable");
        }
        const data = await response.json();
        console.log("API DATA:", data);
        setRating(data.rating);
      } catch (error) {
        console.log("Error fetching verdict:", error);
      }
    };
    fetchVerdict();
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
          The Bombay Canteen is an award-winning restaurant and bar located
          in the heart of Mumbai. Founded by Sameer Seth who started his career
          as a banker, but soon realized it wasn’t his true love.
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
    color: '#FFFFFF',
  },
  cardRow: {
    paddingTop: 20,
    paddingLeft: 16,
    paddingBottom: 16,
    backgroundColor: 'gray',
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
  },
  divider: {
    height: 1,
    backgroundColor: "#FFFFFF33",
    marginVertical: 24,
  },
  footer: {
    paddingTop: 24,
    paddingBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerText: {
    fontFamily: 'Lora-Medium',
    fontSize: 14,
    fontWeight: 400,
    color: '#FFFFFF',
  },
})


