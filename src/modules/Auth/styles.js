import {StyleSheet, Platform} from 'react-native';

/*PLATFORM SPECIFY CODE*/
// Platform.OS === 'ios' ? 200 : 100

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    // ...Platform.select({
    //   ios: {
    //     backgroundColor: 'red',
    //   },
    //   android: {
    //     backgroundColor: 'green',
    //   },
    // }),
  },
});

export default styles;
