import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import commentsData from "../data/Comments.json";

const images = {
  visitor1: require("../../assets/img/visitor1.png"),
  visitor2: require("../../assets/img/visitor2.png"),
  food9: require("../../assets/img/food9.png"),
  food10: require("../../assets/img/food10.png"),
  food11: require("../../assets/img/food11.png"),
  food12: require("../../assets/img/food12.png"),
  starFilled: require("../../assets/img/starFilled.png"),
  starEmpty: require("../../assets/img/starEmpty.png"),
  rightArrow: require("../../assets/img/rightArrow.png"),
};

const MAX_STARS = 5;

export default function VisitorComment() {

  const renderStars = (rating) => {
    let stars = [];
    for (let i = 1; i <= MAX_STARS; i++) {
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
    <View style={styles.container}>
      <Text style={styles.heading}>Visitor Comments</Text>

      {commentsData.visitorComments.map((item, index) => (
        <View key={item.id}>

          <View style={styles.card}>
            <Image style={styles.img} source={images[item.profileImage]} />

            <View style={styles.nameRow}>
              <Text style={styles.nameText}>{item.name}</Text>

              <View style={styles.childRow}>
                <Text style={styles.ratingText}>{item.rating}.0</Text>

                <View style={styles.starRow}>
                  {renderStars(item.rating)}
                </View>
              </View>
            </View>
          </View>

          <View style={styles.tag}>
            {item.tags.map((tag, index) => (
              <Text key={index} style={styles.tagText}>
                #{tag}
              </Text>
            ))}
          </View>

          <View style={styles.commentRow}>
            <Text style={styles.commentText}>{item.comment}</Text>
          </View>

          {item.images.length > 0 && (
            <View style={styles.imgRow}>
              {item.images.slice(0, 3).map((img, index) => (
                <Image
                  key={index}
                  style={styles.foodImage}
                  source={images[img]}
                />
              ))}

              {item.moreImagesCount && (
                <View style={styles.moreImageWrapper}>
                  <Image
                    style={styles.foodImage}
                    source={images[item.images[3]]}
                  />
                  <View style={styles.overlay}>
                    <Text style={styles.moreText}>
                      {item.moreImagesCount} +{`\n`}More
                    </Text>
                  </View>
                </View>
              )}
            </View>
          )}

          <Text style={styles.date}>{item.date}</Text>

          {index === 0 && <View style={styles.divider} />}

        </View>
      ))}

      <Pressable style={styles.commmentPress}>
        <Text style={styles.btnText}>View All Comments</Text>
        <Image style={styles.rightArrow} source={images.rightArrow} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },
  heading: {
    paddingTop: 36,
    fontSize: 22,
    fontWeight: "600",
    color: "#111111",
  },
  card: {
    paddingTop: 24,
    flexDirection: "row",
    alignItems: "center",
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
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  nameText: {
    fontSize: 16,
    fontWeight: "500",
  },
  ratingText: {
    fontSize: 14,
    marginRight: 6,
  },

  starRow: {
    backgroundColor: "rgba(0, 168, 39, 1)",
    flexDirection: "row",
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 5,
    alignItems: "center",
  },

  star: {
    width: 6,
    height: 6,
    marginRight: 2,
  },

  tag: {
    flexDirection: "row",
  },
  tagText: {
    paddingTop: 20,
    paddingRight: 6,
    fontSize: 14,
    fontWeight: "600",
  },
  commentRow: {
    marginTop: 4,
  },
  commentText: {
    color: "rgba(17,17,17,0.6)",
    fontSize: 16,
    textAlign: "justify",
  },
  imgRow: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  foodImage: {
    width: 73,
    height: 73,
    borderRadius: 8,
  },
  moreImageWrapper: {
    position: "relative",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(17,17,17,0.4)",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  moreText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },
  date: {
    marginTop: 16,
    fontSize: 12,
    color: "rgba(17,17,17,0.6)",
  },
  divider: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginTop: 24,
  },
  commmentPress: {
    marginTop: 24,
    marginBottom: 36,
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    borderColor: "#11111133",
  },
  btnText: {
    padding: 20,
    fontSize: 16,
    fontWeight: "500",
  },
  rightArrow: {
    width: 18,
    height: 12,
    marginRight: 20,
  },
});
