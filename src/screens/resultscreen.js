import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  Linking
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default class ResultScreen extends Component {
  renderResult = () => {
    if (this.props.navigation.state.params.result === "orange") {
      return (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>THIS IS ORANGE</Text>
          <Image source={require("../assets/orange.png")} />
        </View>
      );
    } else {
      return (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>THIS IS NOT ORANGE</Text>
          <Image source={require("../assets/notorange.png")} />
        </View>
      );
    }
  };
  render() {
    return (
      <ImageBackground
        source={{ uri: this.props.navigation.state.params.image }}
        style={styles.container}
      >
        <View style={{ flex: 2 }} />
        {this.renderResult()}
        <View style={{ flex: 2 }} />
        <View style={styles.captureContainer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Home")}
            style={styles.item}
          >
            <Icon size={32} color="white" name="arrow-left" />
          </TouchableOpacity>
          <View style={styles.item} />
          <TouchableOpacity
            onPress={() => Linking.openURL("https://github.com/asddsa356/")}
            style={styles.item}
          >
            <Icon size={32} color="white" name="info" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  resultContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  resultText: {
    fontFamily: "Cochin",
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 25,
    marginRight: 10,
    marginBottom: 15
  },
  captureContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginLeft: 70
  },
  item: {
    flex: 1
  }
});
