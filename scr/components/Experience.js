import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import CustomeModal from "../util/CustomeModal";

export default function Experience() {
  const [visible, setVisible] = useState(false)
  return (
    <View style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.container}>
          <Text style={styles.titleHeading}>Share your Experience</Text>
          <Text style={styles.subTitle}>
            Tell others what made The Bombay Canteen special and why it’s worth
            their next visit.
          </Text>

          <Pressable style={styles.btn} onPress={() => setVisible(true)}>
            <Text style={styles.btnText}>Write Your Comments</Text>
          </Pressable>

          <CustomeModal
            visible={visible}
            onClose={() => setVisible(false)}
          />
        </View>

        <View style={styles.section}>

          <Text style={styles.sHeading}>Nearby Restaurants</Text>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            snapToInterval={260}
            decelerationRate="fast"
          >
            <View style={styles.card}>
              <Image
                style={styles.image}
                source={require("../../assets/img/img9.png")}
              />
              <Text style={styles.cardTitle}>Willingdon Sports Club</Text>
              <View style={styles.ratingRow}>
                <Text style={styles.rating}>4.0</Text>
                <View style={styles.imgBg}>
                  <Image style={styles.ratingImg} source={require("../../assets/img/starFilled.png")} />
                </View>
                <Text style={styles.cardSubb}> • Indian • ₹₹₹₹</Text>
              </View>
              <Text style={styles.temp}>Casual Dining</Text>
            </View>

            <View style={styles.card}>
              <Image
                style={styles.image}
                source={require("../../assets/img/nearResto.png")}
              />
              <Text style={styles.cardTitle}>Willingdon Sports Club</Text>
              <View style={styles.ratingRow}>
                <Text style={styles.rating}>4.0</Text>
                <View style={styles.imgBg}>
                  <Image style={styles.ratingImg} source={require("../../assets/img/starFilled.png")} />
                </View>
                <Text style={styles.cardSubb}> • Indian • ₹₹₹₹</Text>
              </View>
              <Text style={styles.temp}>Casual Dining</Text>
            </View>

          </ScrollView>
        </View>
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 24,
    paddingRight: 24,
    backgroundColor: "#FFF2F2",
  },
  titleHeading: {
    fontFamily: 'Lora-SemiBold',
    paddingTop: 36,
    fontSize: 22,
    fontWeight: 600,
    marginBottom: 8,
  },
  subTitle: {
    fontFamily: 'DMSans-Regular',
    fontSize: 16,
    fontWeight: 400,
    color: "#555",
    paddingTop: 8,
    textAlign: 'justify'
  },
  btn: {
    marginTop: 24,
    marginBottom: 36,
    backgroundColor: "#000",
    paddingVertical: 16,
    borderRadius: 8,
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: 'Lora-Medium',
  },
  section: {
    padding: 24,
  },
  sHeading: {
    fontFamily: 'Lora-SemiBold',
    fontSize: 22,
    fontWeight: 600,
    marginBottom: 24,
  },
  card: {
    width: 258,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#ddd",
    marginRight: 20,
    overflow: "hidden",
  },
  image: {
    width: 258,
    height: 145,
  },
  cardTitle: {
    paddingTop: 16,
    paddingLeft: 16,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: 'DMSans-Medium',
  },
  ratingRow: {
    flexDirection: 'row',
    paddingTop: 4,
    paddingLeft: 16,
    alignItems: 'center',
  },
  ratingImg: {
    width: 5,
    height: 5,
  },
  imgBg: {
    marginLeft: 5,
    width: 12,
    height: 12,
    borderRadius: 40,
    backgroundColor: '#00A827',
    alignItems: 'center',
    paddingTop: 3,
  },
  rating: {
    color: "#555",
    fontSize: 14,
    fontWeight: 400,
    fontFamily: 'DMSans-Regular',
  },
  cardSubb: {
    marginLeft: 4,
    color: "#555",
    fontSize: 14,
    fontWeight: 400,
    fontFamily: 'DMSans-Regular',
  },
  temp: {
    paddingLeft: 16,
    paddingTop: 2,
    paddingBottom: 16,
    fontSize: 14,
    fontWeight: 400,
    fontFamily: 'DMSans-Regular',
  },

  fixedBtn: {
    position: "absolute",
    bottom: 24,
    left: 24,
    right: 24,
    backgroundColor: "#000",
    paddingVertical: 16,
    borderRadius: 12,
    zIndex: 10,
  },

});
