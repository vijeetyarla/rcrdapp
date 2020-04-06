import React from "react";
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "../styles.js";
import logo from "../assets/logo_full.png";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateEmail, updatePassword } from "../actions/user.js";
import KeyboardShift from "../helpers/KeyboardShift.js";
class Login extends React.Component {
  login = () => {
    if (this.props.user.email) {
      this.props.navigation.navigate("Home");
    }
  };
  render() {
    return (
      <KeyboardShift>
        {() => (
          <View style={styles.container}>
            <Image source={logo} style={styles.logoImage} />
            <TextInput
              style={styles.border}
              value={this.props.user.email}
              onChangeText={(input) => this.props.updateEmail(input)}
              placeholder="Email or Username"
            />
            <TextInput
              secureTextEntry={true}
              style={styles.border}
              value={this.props.user.password}
              onChangeText={(input) => this.props.updatePassword(input)}
              placeholder="Password"
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.login()}
            >
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
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
  return bindActionCreators({ updateEmail, updatePassword }, dispatch);
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
