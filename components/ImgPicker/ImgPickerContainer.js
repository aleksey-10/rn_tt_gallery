import React, { Component } from 'react';
import ImagePicker from 'react-native-image-picker';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sendImage } from '../../redux/galleryReducer';
import { ImgPicker } from './ImgPicker';
import { FooterTabs } from '../FooterTabs/FooterTabs';
import { Spinner } from 'native-base';

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
        this.props.sendImage(response.uri);
      }
    });
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <>
        {
          this.props.isImageLoading
            ? <Spinner color="red" style={{ flex: 1 }} />
            : (
              <ImgPicker
                uri={this.props.uri}
                handleOnPress={this.chooseImage}
                navigate={navigate}
              />
            )
        }
        <FooterTabs navigate={navigate} />
      </>
    );
  }
}

ImgPickerContainer.propTypes = {
  uri: PropTypes.string.isRequired,
  sendImage: PropTypes.func.isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  isImageLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  uri: state.gallery.uri,
  isImageLoading: state.gallery.isImageLoading,
});

export default connect(mapStateToProps, { sendImage })(ImgPickerContainer);
