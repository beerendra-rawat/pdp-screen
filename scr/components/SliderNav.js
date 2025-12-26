import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";

const tabs = [
  "The Verdict",
  "Photos",
  "Restaurant Contact",
  "Comments",
  "Experience",
];

export default function SliderNav({ activeTab, setActiveTab }) {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.row}>
          {tabs.map((item, index) => {
            const isActive = activeTab === index;

            return (
              <TouchableOpacity
                key={index}
                style={styles.item}
                onPress={() => setActiveTab(index)}
              >
                <Text
                  style={[
                    styles.text,
                    isActive && styles.activeText,
                  ]}
                  numberOfLines={1}
                >
                  {item}
                </Text>

                {isActive && <View style={styles.activeLine} />}
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingVertical: 8,
  },

  row: {
    flexDirection: "row",
    paddingHorizontal: 16,
  },

  item: {
    marginRight: 20,
    alignItems: "center",
  },

  text: {
    fontSize: 16,
    color: "#111",
    fontFamily: "DMSans-Regular",
  },

  activeText: {
    fontFamily: "DMSans-Bold",
  },

  activeLine: {
    marginTop: 6,
    height: 3,
    width: "100%",
    backgroundColor: "red",
    borderRadius: 2,
  },
});
