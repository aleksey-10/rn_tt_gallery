import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Text,
} from 'native-base';
import PropTypes from 'prop-types';

export const FooterTabs = ({ navigate }) => (
  <Container style={styles.container}>
    <Content />
    <Footer>
      <FooterTab>
        <Button onPress={() => navigate('Gallery')}>
          <Text>Gallery</Text>
        </Button>
        <Button onPress={() => navigate('Upload')}>
          <Text>Upload</Text>
        </Button>
      </FooterTab>
    </Footer>
  </Container>
);

const styles = StyleSheet.create({
  container: {
    height: 50,
    flex: 0,
  },
});

FooterTabs.defaultProps = {
  navigate: () => '',
};

FooterTabs.propTypes = {
  navigate: PropTypes.func,
};
