import { Text, View, StyleSheet, Image, Pressable } from "react-native";

export default function VisitorComment() {
  return (
    <View style={styles.container}>

      <Text style={styles.heading}>Visitor Comments</Text>

      <View style={styles.card}>
        <Image style={styles.img} source={require("../../assets/img/visitor2.png")} />
        <View style={styles.nameRow}>
          <Text style={styles.nameText}>Darrell Steward</Text>
          <View style={styles.childRow}>
            <Text style={styles.ratingText}>4.0</Text>
            <Image style={styles.ratingimg} source={require("../../assets/img/rating.png")} />
          </View>
        </View>
      </View>


      <View style={styles.tag}>
        <Text style={styles.tagText}>#Delicious</Text>
        <Text style={styles.tagText}>#Good Ambience</Text>
      </View>

      <View style={styles.commentRow}>
        <Text style={styles.commentText}>Your trusted source for honest reviews, local eats,
          and exclusive dining deals. Your trusted source for honest reviews,
          local eats, and exclusive dining deals.
        </Text>
      </View>

      <View style={styles.imgRow}>
        <Image style={styles.foodImage} source={require("../../assets/img/food1.png")} />
        <Image style={styles.foodImage} source={require("../../assets/img/food2.png")} />
        <Image style={styles.foodImage} source={require("../../assets/img/food3.png")} />

        <View style={styles.moreImageWrapper}>
          <Image
            style={styles.foodImage}
            source={require("../../assets/img/food4.png")}
          />

          <View style={styles.overlay}>
            <Text style={styles.moreText}>6 +{`\n`}More</Text>
          </View>
        </View>
      </View>

      <Text style={styles.date}>July 23, 2020</Text>

      <View style={styles.divider}></View>

      <View style={styles.card}>
        <Image style={styles.img} source={require("../../assets/img/visitor1.png")} />
        <View style={styles.nameRow}>
          <Text style={styles.nameText}>Mayank maggon</Text>
          <View style={styles.childRow}>
            <Text style={styles.ratingText}>4.0</Text>
            <Image style={styles.ratingimg} source={require("../../assets/img/rating.png")} />
          </View>
        </View>
      </View>


      <View style={styles.tag}>
        <Text style={styles.tagText}>#Delicious</Text>
        <Text style={styles.tagText}>#Authentic</Text>
      </View>

      <View style={styles.commentRow}>
        <Text style={styles.commentText}>Your trusted source for honest reviews, local eats,
          and exclusive dining deals. Your trusted source for honest reviews,
          local eats, and exclusive dining deals.
        </Text>
      </View>

      <Text style={styles.date}>July 2, 2020</Text>

      <Pressable style={styles.commmentPress}>
        <Text style={styles.btnText}>View All Comments</Text>
        <Image style={styles.rightArrow} source={require("../../assets/img/rightArrow.png")} />
      </Pressable>


    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingLeft: 24,
    paddingRight: 24,
  },
  heading: {
    fontFamily: 'Lora-SemiBold',
    paddingTop: 36,
    fontSize: 22,
    fontWeight: 600,
  },
  card: {
    paddingTop: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 12,
  },
  nameRow: {
    paddingLeft: 12,
  },
  childRow: {
    paddingTop: 5,
    flexDirection: 'row',
  },
  nameText: {
    fontSize: 16,
    fontWeight: 500,
    fontFamily: 'DMSans-Medium',
  },
  ratingText: {
    fontSize: 14,
    fontWeight: 400,
    fontFamily: 'DMSans-Regular',
  },
  ratingimg: {
    marginLeft: 4,
  },
  tag: {
    flexDirection: 'row',
  },
  tagText: {
    paddingTop: 20,
    paddingRight: 6,
    fontSize: 14,
    fontWeight: 600,
    fontFamily: 'DMSans-SemiBold',
  },
  commentRow: {
    marginTop: 4,
  },
  commentText: {
    fontSize: 16,
    fontWeight: 400,
    fontFamily: 'DMSans-Regular',
  },
  imgRow: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  foodImage: {
    borderRadius: 8,
    width: 73,
    height: 73,
  },
  date: {
    marginTop: 16,
    fontSize: 12,
    fontWeight: 500,
    fontFamily: 'DMSans-Medium',
  },
  divider: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginVertical: 24,
  },
  commmentPress: {
    marginTop: 24,
    marginBottom: 36,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 12,
    alignItems: 'center',
  },
  btnText: {
    paddingLeft: 16,
    paddingTop: 21,
    paddingBottom: 21,
    fontSize: 16,
    fontWeight: 500,
    fontFamily: 'Lora-Medium',
  },
  rightArrow: {
    marginRight: 20,
  },


  moreImageWrapper: {
    position: "relative",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  moreText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    fontFamily: 'DMSans-Regular',
  },
})