import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Gallery } from './Gallery';

class GalleryContainer extends React.PureComponent {
  render() {
    return (
      <Gallery
        navigate={this.props.navigation.navigate}
        images={this.props.images}
      />
    );
  }
}

GalleryContainer.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = state => ({
  images: state.gallery.images,
});

export default connect(mapStateToProps)(GalleryContainer);
