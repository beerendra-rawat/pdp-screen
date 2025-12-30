import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");
const GAP = 16;
const CONTAINER_PADDING = 48;
const AVAILABLE_WIDTH = width - CONTAINER_PADDING - GAP;

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
        <Image
          source={require("../../assets/img/food1.png")}
          style={styles.bigImg}
        />

        <View style={styles.rightImgCol}>
          <Image source={require("../../assets/img/food2.png")} style={styles.rightimg} />
          <Image source={require("../../assets/img/food3.png")} style={styles.rightimg} />
          <Image source={require("../../assets/img/food4.png")} style={styles.rightimg} />
        </View>
      </View>

      <View style={styles.BottomRow}>
        <Image source={require("../../assets/img/food5.png")} style={styles.BottomImg} />
        <Image source={require("../../assets/img/food6.png")} style={styles.BottomImg} />
        <Image source={require("../../assets/img/food7.png")} style={styles.BottomImg} />
        <Image source={require("../../assets/img/food8.png")} style={styles.BottomImg} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    backgroundColor: "#ffff",
  },

  header: {
    paddingTop: 36,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontFamily: "Lora-SemiBold",
    fontSize: 22,
    fontWeight: 600,
  },

  viewAll: {
    fontFamily: "Lora-Medium",
    color: "#D3072B",
    fontSize: 14,
    fontWeight: 500,
  },

  topRow: {
    paddingTop: 24,
    flexDirection: "row",
  },

  bigImg: {
    width: AVAILABLE_WIDTH * 0.75,
    height: 247,
    borderRadius: 12,
  },

  rightImgCol: {
    marginLeft: GAP,
    justifyContent: "space-between",
  },

  rightimg: {
    width: AVAILABLE_WIDTH * 0.25, 
    height: 73,
    borderRadius: 12,
  },

  BottomRow: {
    paddingTop: 12,
    paddingBottom: 36,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  BottomImg: {
    width: (width - CONTAINER_PADDING - 12) / 4,
    height: 73,
    borderRadius: 12,
  },
});
