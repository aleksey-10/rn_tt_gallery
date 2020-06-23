import React from 'react';
import { Button, Text, View } from 'native-base';
import { StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';
import { FooterTabs } from '../FooterTabs/FooterTabs';

export const ImgPicker = ({ handleOnPress, uri, navigate }) => (
  <>
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        {
          uri
            ? (
              <Image source={{ uri }} style={styles.image} />
            )
            : (
              <Text style={styles.text}>Your image</Text>
            )
        }
      </View>
      <Button
        block
        info
        large
        style={styles.button}
        onPress={handleOnPress}
      >
        <Text style={styles.text}>Upload image</Text>
      </Button>
    </View>
    <FooterTabs navigate={ navigate } />
  </>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
  },
  button: {
    marginHorizontal: 50,
  },
  text: {
    textAlign: 'center',
  },
  imageWrapper: {
    width: 200,
    height: 200,
    borderWidth: 1,
    borderColor: '#000',
    alignSelf: 'center',
    marginBottom: 20,
    justifyContent: 'center',
  },
  image: {
    alignSelf: 'stretch',
    flex: 1,
  },
});

ImgPicker.propTypes = {
  uri: PropTypes.string.isRequired,
  handleOnPress: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
};
