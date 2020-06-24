import React from 'react';
import { View, H1, Text } from 'native-base';
import { StyleSheet, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';

const getDate = date => date.match(/\d+-\d+-\d+/g)[0];

export const Gallery = ({ images }) => (
  <>
    {
      images.length
        ? (
          <FlatList
            style={styles.container}
            data={images}
            renderItem={({ item }) => (
              <View style={styles.imageWrapper}>
                <Image
                  source={{ uri: (item.uri || item.avatar) }}
                  style={styles.image}
                />
                <View style={styles.date}>
                  <Text>Like</Text>
                  <Text>{getDate(item.createdAt)}</Text>
                </View>
              </View>
            )}
            keyExtractor={({ id }) => `${id}`}
          />
        )
        : (
          <View style={styles.noImages}>
            <H1>No images yet</H1>
          </View>
        )
    }
  </>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageWrapper: {
    width: 320,
    height: 320,
    alignSelf: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    marginBottom: 40,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
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
  date: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
});

Gallery.defaultProps = {
  navigate: () => '',
};

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  navigate: PropTypes.func,
};
