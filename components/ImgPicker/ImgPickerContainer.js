import React, { Component } from 'react';
import ImagePicker from 'react-native-image-picker';
import { connect } from 'react-redux';
import PropTypes, { objectOf } from 'prop-types';
import { getUri } from '../../redux/galleryReducer';
import { ImgPicker } from './ImgPicker';

export class ImgPickerContainer extends Component {
  chooseImage = () => {
    const options = {
      title: 'Select Image',
      customButtons: [
        {
          name: 'customOptionKey',
          title: 'Choose Photo from Custom Option'
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.uri) {
        this.props.getUri(response.uri);
      }
    });
  };

  render() {
    return (
      <ImgPicker
        uri={this.props.uri}
        handleOnPress={this.chooseImage}
        navigate={this.props.navigation.navigate}
      />
    );
  }
}

ImgPickerContainer.propTypes = {
  uri: PropTypes.string.isRequired,
  getUri: PropTypes.func.isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = state => ({
  uri: state.gallery.uri,
});

export default connect(mapStateToProps, { getUri })(ImgPickerContainer);
