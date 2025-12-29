import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";

const tabs = [
  "The Verdict",
  "Photos",
  "Restaurant Contact",
  "Comments",
  "Experience",
];

export default function SliderNav({ onTabPress, refs }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const sectionRefs = [
    refs.verdictRef,
    refs.photoRef,
    refs.contactRef,
    refs.commentRef,
    refs.experienceRef,
  ];

  const handlePress = (index) => {
    setActiveIndex(index);
    onTabPress(sectionRefs[index]);
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.row}>
          {tabs.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <TouchableOpacity
                key={index}
                style={styles.item}
                onPress={() => handlePress(index)}
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
    backgroundColor: "#FFFFFF",
  },
  row: {
    flexDirection: "row",
    paddingHorizontal: 24,
  },
  item: {
    marginRight: 20,
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: 400,
    color: "#111",
    fontFamily: "DMSans-Medium",
  },
  activeLine: {
    marginTop: 6,
    height: 4,
    width: "100%",
    backgroundColor: "#D3072B",
    borderRadius: 2,
  },
  activeText: {
    fontSize: 16,
    fontWeight: 500,
    fontFamily: "DMSans-Bold",
  },

});
