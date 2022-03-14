// React Libraries
import React from 'react';

// React Native Libraries
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  Appearance,
} from 'react-native';

// Custom Modules
import styles from './styles';
/*===== Class Components===== */
// class Container extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isDarkMode: Appearance.getColorScheme() === 'dark',
//     };
//   }
//
//   render() {
//     return (
//       <SafeAreaView style={styles.container}>
//         <StatusBar
//           barStyle={this.state.isDarkMode ? 'light-content' : 'dark-content'}
//         />
//         {this.props.children}
//       </SafeAreaView>
//     );
//   }
// }

/*======FUNCTION COMPONENT======*/

const Container = props => {
  //
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {props.children}
    </SafeAreaView>
  );
};

export default Container;
