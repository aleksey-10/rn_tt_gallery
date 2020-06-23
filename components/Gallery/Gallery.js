import React from 'react';
import { View, H1 } from 'native-base';
import { StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { FooterTabs } from '../FooterTabs/FooterTabs';

export const Gallery = ({ navigate, images }) => (
  <>
    {
      images.length
        ? (
          <ScrollView style={styles.container}>
            {
              images.map(image => (
                <View style={styles.imageWrapper}>
                  <Image source={{ uri: image.uri }} style={styles.image} />
                </View>
              ))
            }
          </ScrollView>
        )
        : (
          <View style={styles.noImages}>
            <H1>No images yet</H1>
          </View>
        )
    }
    <FooterTabs navigate={navigate} />
  </>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  imageWrapper: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 20,
    justifyContent: 'center',
  },
  image: {
    alignSelf: 'stretch',
    flex: 1,
  },
  noImages: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
