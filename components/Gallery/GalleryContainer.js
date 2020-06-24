import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Spinner } from 'native-base';
import { StyleSheet } from 'react-native';
import { Gallery } from './Gallery';
import { fetchImages } from '../../redux/galleryReducer';
import { FooterTabs } from '../FooterTabs/FooterTabs';

class GalleryContainer extends Component {
  componentDidMount() {
    this.props.fetchImages();
  }

  render() {
    return (
      <>
        {
          this.props.isLoading
            ? <Spinner style={styles.container} color="red" />
            : (
              <Gallery
                navigate={this.props.navigation.navigate}
                images={this.props.images}
              />
            )
        }
        <FooterTabs navigate={this.props.navigation.navigate} />
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

GalleryContainer.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  fetchImages: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  images: state.gallery.images,
  isLoading: state.gallery.isLoading,
});

export default connect(mapStateToProps, { fetchImages })(GalleryContainer);
