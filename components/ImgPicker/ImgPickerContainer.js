import React, { Component } from 'react';
import ImagePicker from 'react-native-image-picker';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Spinner } from 'native-base';
import { sendImage } from '../../redux/galleryReducer';
import { ImgPicker } from './ImgPicker';
import { FooterTabs } from '../FooterTabs/FooterTabs';

export class ImgPickerContainer extends Component {
  chooseImage = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.data) {
        this.props.sendImage(`data:image/jpeg;base64,${response.data}`);
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
