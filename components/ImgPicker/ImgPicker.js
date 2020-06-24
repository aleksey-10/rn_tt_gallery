import React from 'react';
import { Button, Text, View, H2, H3, Spinner } from 'native-base';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export const ImgPicker = ({ handleOnPress, uri, navigate }) => (
  <>
    <View style={styles.container}>
      <View style={styles.uploadInfo}>
        {
          !uri
            ? (
              (
                <H2 style={styles.text}>Please upload a picture.</H2>
              )
            )
            : (
              <View>
                <H3 style={styles.text}>
                  Your picture was successfully uploaded.
                </H3>
                <Button
                  block
                  transparent
                  style={styles.button}
                  onPress={() => navigate('Gallery')}
                >
                  <Text style={styles.uploaded}>Check gallery</Text>
                </Button>
              </View>
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
  uploadInfo: {
    margin: 20,
    height: 200,
    alignSelf: 'center',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploaded: {
    paddingTop: 30,
    color: 'green',
    textAlign: 'center',
  },
});

ImgPicker.propTypes = {
  uri: PropTypes.string.isRequired,
  handleOnPress: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
};