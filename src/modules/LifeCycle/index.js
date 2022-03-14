// React Libraries
import React from 'react';

import {View, Text} from 'react-native';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  /*Life Cycle Components*/
  componentDidMount() {
    //
    console.log('did mount');
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    //
    console.log('will un mount');
    clearInterval(this.timerID);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // did update
    console.log('did update');
    console.log(prevState, this.state);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <View>
        <Text>Hello, world!</Text>
        <Text>It is {this.state.date.toLocaleTimeString()}.</Text>
      </View>
    );
  }
}

export default Clock;
