import React from "react";
import { Text, View, Button } from "react-native";
import { bindActionCreators } from 'redux';
import styles from '../styles.js';
import { connect } from 'react-redux';
import { add } from '../actions';
class Home extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Home
        </Text>
        <Text>{this.props.counter}</Text>
        <Button title='Add' onPress={() => this.props.add()}/>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({add}, dispatch)
}
const mapStateToProps = (state) => {
    return {
        counter: state.counter,
        user: state.user
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);