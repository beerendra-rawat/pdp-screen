import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useEffect, useRef } from "react";

const tabs = [
  "The Verdict",
  "Photos",
  "Restaurant Contact",
  "Comments",
  "Experience",
];

export default function SliderNav({ activeIndex, onTabPress }) {
  const scrollRef = useRef(null);
  const tabLayouts = useRef({});

  //auto scroll tab bar
  useEffect(() => {
    const x = tabLayouts.current[activeIndex];
    if (x !== undefined) {
      scrollRef.current?.scrollTo({
        x: Math.max(x - 50, 0),
        animated: true,
      });
    }
  }, [activeIndex]);

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.row}>
          {tabs.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <TouchableOpacity
                key={index}
                style={styles.item}
                onPress={() => onTabPress(index)}
                onLayout={(e) => {
                  tabLayouts.current[index] = e.nativeEvent.layout.x;
                }}
              >
                <Text style={[styles.text, isActive && styles.activeText]}>
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
    color: "#111",
    fontFamily: "DMSans-Medium",
  },
  activeText: {
    fontFamily: "DMSans-Bold",
  },
  activeLine: {
    marginTop: 6,
    height: 4,
    width: "100%",
    backgroundColor: "#D3072B",
    borderRadius: 2,
  },
});
