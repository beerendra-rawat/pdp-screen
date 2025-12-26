import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function SliderNav() {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.row}>
          {[
            "The Verdict",
            "Photos",
            "Restaurant Contact",
            "Comments",
            "Experience",
          ].map((item, index) => (
            <View key={index} style={styles.item}>
              <Text style={styles.text} numberOfLines={1}>
                {item}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
  },
  row: {
    flexDirection: "row",
    paddingHorizontal: 16,
  },
  item: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 12,
  },
  text: {
    fontFamily: 'DMSans-Regular',
    fontSize: 16,
    fontWeight: 500,
  },
});
