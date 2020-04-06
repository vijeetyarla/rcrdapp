import React from "react";
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "../styles.js";
import { connect } from "react-redux";
import logo from "../assets/logo_full.png";
import { bindActionCreators } from "redux";
import {
  updateEmail,
  updatePassword,
  updateUsername,
  updateBio,
} from "../actions/user.js";
import KeyboardShift from "../helpers/KeyboardShift.js"; /*To adjust the view when user is typing in TextInput blocked by the keyboard*/ 
class Signup extends React.Component {
  render() {
    return (
      <KeyboardShift>
        {() => (
          <View style={styles.container}>
            <Image source={logo} style={styles.logoImage} />
            <TextInput
              style={styles.textField}
              value={this.props.user.username}
              onChangeText={(input) => this.props.updateUsername(input)}
              placeholder="Username"
            />
            <TextInput
              style={styles.textField}
              value={this.props.user.email}
              onChangeText={(input) => this.props.updateEmail(input)}
              placeholder="Email"
            />
            <TextInput
              style={styles.textField}
              value={this.props.user.password}
              onChangeText={(input) => this.props.updatePassword(input)}
              placeholder="Password"
              secureTextEntry={true}
            />
            <TextInput
              style={styles.bioTextInput}
              value={this.props.user.bio}
              multiline
              numberOfLines={2}
              onChangeText={(input) => this.props.updateBio(input)}
              placeholder="Tell us a little about yourself..."
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate("Signup")}
            >
              <Text style={styles.loginButtonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        )}
      </KeyboardShift>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { updateEmail, updatePassword, updateUsername, updateBio },
    dispatch
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
