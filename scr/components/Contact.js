import { Text, View, StyleSheet, Image, Pressable, Linking } from "react-native";

export default function Contact() {

  const openDirection = () => {
    const url = "https://www.google.com/maps/dir/?api=1&destination=Unit-1+Process+House+Kamala+Mills+Lower+Parel+Mumbai";
    Linking.openURL(url)
  }

  return (
    <View style={styles.container}>

      <View style={styles.card}>
        <View style={styles.mapWrapper}>
          <Image style={styles.map} source={require("../../assets/img/map.png")} />
          <Image style={styles.locationStar} source={require("../../assets/img/locationStar.png")} />
          <Pressable style={styles.btn}>
            <Text style={styles.btnText} onPress={openDirection}>Get Directions</Text>
            <Image style={styles.directionImg} source={require("../../assets/img/mapBtn.png")} />
          </Pressable>
        </View>

        <Text style={styles.text}>Unit-1, Process House, S.B. Road, Kamala Mills,
          Near Radio Mirchi Office Lower, Parel, Mumbai, Maharashtra - 400013
        </Text>
      </View>

      <View style={styles.contact}>
        <View style={styles.contactRow}>
          <Image style={styles.icon} source={require("../../assets/img/browser.png")} />
          <Text style={styles.textCon}>https://thebombaycanteen.com</Text>
        </View>
        <View style={styles.contactRow}>
          <Image source={require("../../assets/img/call.png")} />
          <Text style={styles.textCon}>+91-8448765432</Text>
        </View>
        <View style={styles.contactRow}>
          <Image source={require("../../assets/img/insta.png")} />
          <Text style={styles.textCon}>thebombaycanteen</Text>
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 24,
    paddingRight: 24,
    backgroundColor: '#2B2B2B',
  },
  card: {
    marginTop: 36,
    borderRadius: 12,
    backgroundColor: "#11111199",
  },
  mapWrapper: {
    position: "relative",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    overflow: "hidden",
  },
  map: {
    width: '100%',
    height: 184,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  locationStar: {
    position: "absolute",
    top: 84,
    left: 150,
    width: 19,
    height: 19,
  },
  btn: {
    width: 127,
    height: 32,
    position: "absolute",
    right: 16,
    bottom: 16,
    backgroundColor: "#ffffff",
    paddingHorizontal: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnText: {
    fontFamily: 'LoraSemiBold',
    fontSize: 12,
    fontWeight: 500,
    paddingRight: 10,
  },
  directionImg: {
    width: 17,
    height: 17,
  },
  text: {
    fontFamily: 'DMSans-Regular',
    padding: 16,
    fontSize: 14,
    fontWeight: 400,
    color: '#FFFFFF',
  },
  contact: {
    paddingTop: 36,
    paddingBottom: 36,
  },
  contactRow: {
    padding: 14.5,
    paddingLeft: 16,
    marginTop: 12,
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 12,
    borderColor: 'white',
  },
  icon: {
    width: 14,
    height: 14,
  },
  textCon: {
    fontFamily: 'DMSans-Regular',
    paddingLeft: 12,
    fontSize: 16,
    fontWeight: 400,
    color: "#FFFFFF",
  },


  outerCircle: {
  position: "absolute",
  width: 120,
  height: 120,
  borderRadius: 60,
  backgroundColor: "rgba(255, 0, 0, 0.15)",
},

innerCircle: {
  position: "absolute",
  width: 80,
  height: 80,
  borderRadius: 40,
  backgroundColor: "rgba(255, 0, 0, 0.25)",
},

})