import {
  StyleSheet,
  StatusBar,
  ScrollView,
  View,
  Pressable,
  Text,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { useRef, useState } from "react";

import BombeCanteen from "./scr/components/BombeCanteen";
import RestaurantImage from "./scr/components/RestaurantImage";
import Experience from "./scr/components/Experience";
import VisitorComments from "./scr/components/VisitorComment";
import Contact from "./scr/components/Contact";
import TheVerdict from "./scr/components/TheVerdict";
import SliderNav from "./scr/components/SliderNav";
import Carouselimg from "./scr/components/Carouselimg";

export default function App() {
  const scrollRef = useRef(null);

  const verdictRef = useRef(null);
  const photoRef = useRef(null);
  const contactRef = useRef(null);
  const commentRef = useRef(null);
  const experienceRef = useRef(null);

  const [isSticky, setIsSticky] = useState(false);
  const stickyY = useRef(0);


  const [fontsLoaded] = useFonts({
    "Lora-Bold": require("./assets/fonts/Lora-Bold.ttf"),
    "Lora-Medium": require("./assets/fonts/Lora-Medium.ttf"),
    "Lora-SemiBold": require("./assets/fonts/Lora-SemiBold.ttf"),
    "DMSans-Bold": require("./assets/fonts/DMSans-Bold.ttf"),
    "DMSans-Regular": require("./assets/fonts/DMSans-Regular.ttf"),
    "DMSans-SemiBold": require("./assets/fonts/DMSans-SemiBold.ttf"),
    "DMSans-Medium": require("./assets/fonts/DMSans-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const scrollToSection = (ref) => {
    ref.current?.measureLayout(
      scrollRef.current,
      (x, y) => {
        scrollRef.current.scrollTo({ y, animated: true });
      }
    );
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={["bottom"]}>
      <StatusBar style="dark" backgroundColor="transparent" />

      <View style={styles.root}>
        <ScrollView
          ref={scrollRef}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
          stickyHeaderIndices={[2]}
          onScroll={(e) => {
            const scrollY = e.nativeEvent.contentOffset.y;
            setIsSticky(scrollY >= stickyY.current);
          }}
          scrollEventThrottle={16}
        >
          <Carouselimg />

          <BombeCanteen />

          <View
            style={[
              styles.stickyHeader,
              isSticky && styles.stickyHeaderActive,
            ]}
            onLayout={(e) => {
              stickyY.current = e.nativeEvent.layout.y;
            }}
          >
            <SliderNav
              onTabPress={scrollToSection}
              refs={{
                verdictRef,
                photoRef,
                contactRef,
                commentRef,
                experienceRef,
              }}
            />
          </View>


          <View ref={verdictRef}>
            <TheVerdict />
          </View>

          <View ref={photoRef}>
            <RestaurantImage />
          </View>

          <View ref={contactRef}>
            <Contact />
          </View>

          <View ref={commentRef}>
            <VisitorComments />
          </View>

          <View ref={experienceRef}>
            <Experience />
          </View>
        </ScrollView>

        <Pressable style={styles.fixedBtn}>
          <Text style={styles.btnText}>Reserve a Table</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  root: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 80,
  },
  fixedBtn: {
    position: "absolute",
    bottom: 12,
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

  stickyHeaderActive: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
