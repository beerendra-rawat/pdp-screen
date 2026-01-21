import { useRef, useState, useCallback } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
  Platform,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import Carouselimg from "./scr/components/Carouselimg";
import BombeCanteen from "./scr/components/BombeCanteen";
import SliderNav from "./scr/components/SliderNav";
import TheVerdict from "./scr/components/TheVerdict";
import RestaurantImage from "./scr/components/RestaurantImage";
import Contact from "./scr/components/Contact";
import VisitorComments from "./scr/components/VisitorComment";
import Experience from "./scr/components/Experience";

export default function App() {
  const scrollRef = useRef(null);

  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const sectionPositions = useRef({});
  const stickyY = useRef(0);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isSticky, setIsSticky] = useState(false);

  //Scroll handler 
  const handleScroll = useCallback((e) => {
    const scrollY = e.nativeEvent.contentOffset.y;
    setIsSticky(scrollY >= stickyY.current);

    for (let i = sectionRefs.length - 1; i >= 0; i--) {
      const y = sectionPositions.current[i];
      if (y !== undefined && scrollY >= y - 50) {
        setActiveIndex(i);
        break;
      }
    }
  }, []);

  ///scroll tab click
  const scrollToSection = (index) => {
    const y = sectionPositions.current[index];
    if (y !== undefined) {
      scrollRef.current?.scrollTo({
        y: y - 10,
        animated: true,
      });
      setActiveIndex(index);
    }
  };
  //fonts
  const [fontsLoaded] = useFonts({
    "Lora-Bold": require("./assets/fonts/Lora-Bold.ttf"),
    "Lora-Medium": require("./assets/fonts/Lora-Medium.ttf"),
    "Lora-SemiBold": require("./assets/fonts/Lora-SemiBold.ttf"),
    "DMSans-Bold": require("./assets/fonts/DMSans-Bold.ttf"),
    "DMSans-Regular": require("./assets/fonts/DMSans-Regular.ttf"),
    "DMSans-SemiBold": require("./assets/fonts/DMSans-SemiBold.ttf"),
    "DMSans-Medium": require("./assets/fonts/DMSans-Medium.ttf"),
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "bottom"]}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.root}>
        <ScrollView
          ref={scrollRef}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
          stickyHeaderIndices={[2]}
          onScroll={handleScroll}
          scrollEventThrottle={16}
        >
          <Carouselimg />
          <BombeCanteen />

          {/* Sticky Tabs */}
          <View
            style={[styles.stickyHeader, isSticky && styles.stickyActive]}
            onLayout={(e) => {
              stickyY.current = e.nativeEvent.layout.y;
            }}
          >
            <SliderNav
              activeIndex={activeIndex}
              onTabPress={scrollToSection}
            />
          </View>

          {/*Sections */}
          {[TheVerdict, RestaurantImage, Contact, VisitorComments, Experience].map(
            (Component, index) => (
              <View
                key={index}
                ref={sectionRefs[index]}
                onLayout={(e) => {
                  sectionPositions.current[index] =
                    e.nativeEvent.layout.y;
                }}
              >
                <Component />
              </View>
            )
          )}
        </ScrollView>

        {/* Fixed Button */}
        <Pressable style={styles.fixedBtn}>
          <Text style={styles.btnText}>Reserve a Table</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

/* Styles */
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  root: {
    flex: 1,
  },

  /* 🔧 Increased padding so last tab scrolls fully */
  scrollContent: {
    paddingBottom: 140,
  },

  fixedBtn: {
    position: "absolute",
    bottom: 16,
    left: 24,
    right: 24,
    backgroundColor: "#000",
    paddingVertical: 16,
    borderRadius: 8,
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontFamily: "Lora-Medium",
  },

  stickyHeader: {
    backgroundColor: "#fff",
    zIndex: 100,
  },
  stickyActive: {
    elevation: 4,
    paddingTop:
      Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
