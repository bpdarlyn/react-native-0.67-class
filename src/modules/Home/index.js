// React libraries
import React from 'react';

// React Native Libraries
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {ScrollView, Text, useColorScheme, View} from 'react-native';

// Custom Modules
import styles from './styles';
import Container from '../../components/Container';

//region Helper Component
const Section = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};
//endregion

const Home = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Container>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Header />
        <View
          style={
            {
              // backgroundColor: 'green',
            }
          }>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come Darlyn
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </Container>
  );
};

export default Home;
