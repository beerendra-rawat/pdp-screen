import { StyleSheet, View, StatusBar, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import BombeCanteen from './scr/components/BombeCanteen';
import RestaurantImage from './scr/components/RestaurantImage';
import Experience from './scr/components/Experience';
import VisitorComments from './scr/components/VisitorComment';
import Contact from './scr/components/Contact';
import TheVardict from './scr/components/TheVerdict';
import SliderNav from './scr/components/SliderNav';
import Carouselimg from './scr/components/Carouselimg';

export default function App() {

  const [fontsLoaded] = useFonts({
    "Lora-Regular": require("./assets/fonts/Lora-Bold.ttf"),
    "Lora-Regular": require("./assets/fonts/Lora-Medium.ttf"),
    "Lora-SemiBold": require("./assets/fonts/Lora-SemiBold.ttf"),
    "DMSans-Regular": require("./assets/fonts/DMSans-Bold.ttf"),
    "DMSans-Bold": require("./assets/fonts/DMSans-Regular.ttf"),
    "DMSans-Bold": require("./assets/fonts/DMSans-SemiBold.ttf"),
    "DMSans-Bold": require("./assets/fonts/DMSans-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={styles.safeArea} edges={["bottom"]}>
      <StatusBar
        style="dark"
        backgroundColor="transparent"
      />

      <ScrollView>
        <View>
          <Carouselimg />
          <BombeCanteen />
          <SliderNav />
          <TheVardict />
          <RestaurantImage />
          <Contact />
          <VisitorComments />
          <Experience />
        </View>
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

