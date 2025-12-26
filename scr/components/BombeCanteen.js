import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { useState } from "react";

export default function BombeCanteen() {
  const [showMore, setShowMore] = useState(false);

  return (
    <View>
      <View style={styles.container}>

        <Text style={styles.headingText}>The Bombay Canteen</Text>
        <Text style={styles.subHeading}>Mumbai, India</Text>

        <View style={styles.divider} />

        <View style={styles.infoRow}>
          <View style={styles.infoItem}>
            <Image source={require("../../assets/img/Frame-4.png")} />
            <Text style={styles.infoText}>Casual{"\n"}Dining</Text>
          </View>
          <View style={styles.infoItem}>
            <Image source={require("../../assets/img/Frame.png")} />
            <Text style={styles.infoText}>Indian{"\n"}Cuisine</Text>
          </View>
          <View style={styles.infoItem}>
            <Image source={require("../../assets/img/Frame-2.png")} />
            <Text style={styles.infoText}>₹ 2700{"\n"}Per Person</Text>
          </View>
          <View style={styles.infoItem}>
            <Image source={require("../../assets/img/Frame-3.png")} />
            <Text style={styles.infoText}>4.0 Stars{"\n"}out of 5</Text>
          </View>
        </View>

        <View style={styles.divider} />

        <Text style={styles.description}>
          {showMore
            ? "Nestled in the heart of Soho, The Corner Store blends charm and convenience, offering curated essentials, fresh bites, and a welcoming atmosphere. Whether you're stopping by for a quick coffee or exploring thoughtfully sourced goods, it’s a place designed to make every visit special."
            : "Nestled in the heart of Soho, The Corner Store blends charm and convenience, offering curated essentials, fresh bites, and..."}
        </Text>

        <Pressable onPress={() => setShowMore(!showMore)}>
          <Text style={styles.showMore}>
            {showMore ? "Show Less" : "Show More"}
          </Text>
        </Pressable>


      </View>
      <View style={styles.divider} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 24,
    paddingRight: 24,
  },
  headingText: {
    fontFamily: 'Lora-SemiBold',
    paddingTop: 24,
    fontSize: 24,
    fontWeight: "600",
    lineHeight: 30,
    color: "#111111",
  },
  subHeading: {
    fontFamily: 'DMSans-Regular',
    paddingTop: 4,
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 22,
    color: "#11111199",
  },
  divider: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginVertical: 20,
  },
  infoRow: {
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoItem: {
    alignItems: "center",
    width: "22%",
  },
  infoText: {
    textAlign: "center",
    paddingTop: 6,
    fontFamily: 'DMSans-Regular',
    fontSize: 12,
    fontWeight: "400",
    color: "#000",
  },
  description: {
    paddingTop: 20,
    fontFamily: 'DMSans-Regular',
    fontSize: 16,
    fontWeight: "400",
    color: "#777",
    lineHeight: 26,
  },
  showMore: {
    fontFamily: 'Lora-Medium',
    paddingTop: 8,
    fontSize: 14,
    fontWeight: "500",
    color: "#000",
  },
});
