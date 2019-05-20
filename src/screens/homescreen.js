import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { RNCamera } from "react-native-camera";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/Feather";
import AnimatedEllipsis from "react-native-animated-ellipsis";
import { recognizeImage } from "../actions/image";
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typeFacing: "back"
    };
  }

  recognizeImage = async () => {
    const options = { quality: 0.5, base64: true };
    const data = await this.camera.takePictureAsync(options);
    await this.props.recognizeImage(data, this.props.navigation);
  };

  toggleFacing = () => {
    this.setState({
      typeFacing: this.state.typeFacing === "back" ? "front" : "back"
    });
  };
  render() {
    return (
      <View style={styles.container}>
        {this.props.preloader ? (
          <View style={styles.preloader}>
            <AnimatedEllipsis />
          </View>
        ) : (
          <RNCamera
            style={styles.preview}
            ref={ref => {
              this.camera = ref;
            }}
            type={this.state.typeFacing}
            style={styles.preview}
            type={this.state.typeFacing}
            flashMode={RNCamera.Constants.FlashMode.on}
            androidCameraPermissionOptions={{
              title: "Permission to use camera",
              message: "We need your permission to use your camera",
              buttonPositive: "Ok",
              buttonNegative: "Cancel"
            }}
            androidRecordAudioPermissionOptions={{
              title: "Permission to use audio recording",
              message: "We need your permission to use your audio",
              buttonPositive: "Ok",
              buttonNegative: "Cancel"
            }}
          >
            <View style={{ flex: 5 }} />
            <View style={styles.captureContainer}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.openDrawer();
                }}
                style={styles.item}
              >
                <Icon size={32} color="white" name="info" />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  this.recognizeImage();
                }}
                style={styles.item}
              >
                <Icon size={32} color="white" name="aperture" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.toggleFacing();
                }}
                style={styles.item}
              >
                <Icon size={32} color="white" name="refresh-cw" />
              </TouchableOpacity>
            </View>
          </RNCamera>
        )}
      </View>
    );
  }
}

const mapDispatchtoProps = dispatch =>
  bindActionCreators({ recognizeImage }, dispatch);
const mapStateToProps = state => ({
  preloader: state.image.preloader
});
export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  preloader: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  preview: {
    flex: 1
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
