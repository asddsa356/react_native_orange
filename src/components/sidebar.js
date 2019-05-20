import React, { Component } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  Linking,
  TouchableOpacity
} from "react-native";

class SideBar extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={require("../assets/orange.png")} />
        </View>
        <Text style={styles.title}>Orange</Text>
        <Text style={styles.titleAbout}>About Orange</Text>
        <Text style={styles.about}>
          This app was build using react-native-tensorflow and React Native. I
          used the model to correctly identify oranges.
        </Text>
        <Text style={styles.about}>
          This is my first app, where I used React Native.
        </Text>
        <TouchableOpacity
          onPress={() => Linking.openURL("https://github.com/asddsa356/")}
        >
          <Text style={styles.link}>My github</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              "https://www.facebook.com/profile.php?id=100004057874355"
            )
          }
        >
          <Text style={styles.link}>My facebook</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

export default SideBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#5f5ff6"
  },
  imageContainer: {
    marginTop: 50,
    marginBottom: 30,
    flexDirection: "row",
    justifyContent: "center"
  },
  title: {
    fontFamily: "Cochin",
    color: "#dde737",
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10
  },
  titleAbout: {
    fontFamily: "Cochin",
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    marginLeft: 10,
    marginRight: 10
  },
  about: {
    fontFamily: "Cochin",
    color: "white",
    fontSize: 14,
    marginBottom: 15,
    marginLeft: 10,
    marginRight: 10
  },
  link: {
    fontFamily: "Cochin",
    color: "#dde737",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 15,
    marginLeft: 10,
    marginRight: 10
  }
});
