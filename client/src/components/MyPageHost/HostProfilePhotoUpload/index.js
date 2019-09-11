import React from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { Field } from "redux-form";
import { FiTrash } from "react-icons/fi";
import TitleChild from "../../TitleChild";
import * as titleConstants from "../../../constants/ui/myPage";
import styles from './styles';
import renderPhotoUpload from '../../../commons/FormHelper/PhotoUpload';

const arrPhoto = [
  { id: 1, url: 'https://instagram.fsgn2-4.fna.fbcdn.net/vp/a5de31fd6866870e59067105d07a824f/5E05B170/t51.2885-15/sh0.08/e35/p640x640/67594996_702862093460289_3434895305915866330_n.jpg?_nc_ht=instagram.fsgn2-4.fna.fbcdn.net&_nc_cat=109' },
  { id: 2, url: 'https://i.pinimg.com/564x/83/1c/8d/831c8d33d5f2358402e31d90dea29d28.jpg' },
  { id: 3, url: 'https://i.pinimg.com/564x/80/00/8f/80008f23d34868cac725891699886e75.jpg' },
  { id: 4, url: 'https://i.pinimg.com/564x/f2/59/01/f25901e8fe29da947265c2f6013a3623.jpg' },
  { id: 5, url: 'https://i.pinimg.com/564x/1b/09/94/1b09948d3e7e7e22bd67db55578d8ad7.jpg' },
  { id: 6, url: 'https://i.pinimg.com/564x/7c/4d/97/7c4d97e9b2ab68effd40e54d1462d4a7.jpg' },
  { id: 12, url: 'https://instagram.fsgn2-4.fna.fbcdn.net/vp/a5de31fd6866870e59067105d07a824f/5E05B170/t51.2885-15/sh0.08/e35/p640x640/67594996_702862093460289_3434895305915866330_n.jpg?_nc_ht=instagram.fsgn2-4.fna.fbcdn.net&_nc_cat=109' },
  { id: 23, url: 'https://i.pinimg.com/564x/83/1c/8d/831c8d33d5f2358402e31d90dea29d28.jpg' },
  { id: 34, url: 'https://i.pinimg.com/564x/80/00/8f/80008f23d34868cac725891699886e75.jpg' },
  { id: 45, url: 'https://i.pinimg.com/564x/f2/59/01/f25901e8fe29da947265c2f6013a3623.jpg' },
  { id: 56, url: 'https://i.pinimg.com/564x/1b/09/94/1b09948d3e7e7e22bd67db55578d8ad7.jpg' },
  { id: 67, url: 'https://i.pinimg.com/564x/7c/4d/97/7c4d97e9b2ab68effd40e54d1462d4a7.jpg' },
  { id: 123, url: 'https://instagram.fsgn2-4.fna.fbcdn.net/vp/a5de31fd6866870e59067105d07a824f/5E05B170/t51.2885-15/sh0.08/e35/p640x640/67594996_702862093460289_3434895305915866330_n.jpg?_nc_ht=instagram.fsgn2-4.fna.fbcdn.net&_nc_cat=109' },
  { id: 234, url: 'https://i.pinimg.com/564x/83/1c/8d/831c8d33d5f2358402e31d90dea29d28.jpg' },
  { id: 345, url: 'https://i.pinimg.com/564x/80/00/8f/80008f23d34868cac725891699886e75.jpg' },
  { id: 4576, url: 'https://i.pinimg.com/564x/f2/59/01/f25901e8fe29da947265c2f6013a3623.jpg' },
  { id: 568, url: 'https://i.pinimg.com/564x/1b/09/94/1b09948d3e7e7e22bd67db55578d8ad7.jpg' },
  { id: 677, url: 'https://i.pinimg.com/564x/7c/4d/97/7c4d97e9b2ab68effd40e54d1462d4a7.jpg' },
  { id: 1232, url: 'https://instagram.fsgn2-4.fna.fbcdn.net/vp/a5de31fd6866870e59067105d07a824f/5E05B170/t51.2885-15/sh0.08/e35/p640x640/67594996_702862093460289_3434895305915866330_n.jpg?_nc_ht=instagram.fsgn2-4.fna.fbcdn.net&_nc_cat=109' },
  { id: 2342, url: 'https://i.pinimg.com/564x/83/1c/8d/831c8d33d5f2358402e31d90dea29d28.jpg' },
  { id: 3452, url: 'https://i.pinimg.com/564x/80/00/8f/80008f23d34868cac725891699886e75.jpg' },
  { id: 45736, url: 'https://i.pinimg.com/564x/f2/59/01/f25901e8fe29da947265c2f6013a3623.jpg' },
  { id: 5684, url: 'https://i.pinimg.com/564x/1b/09/94/1b09948d3e7e7e22bd67db55578d8ad7.jpg' },
];

function HostProfilePhotoUpload(props) {
  const { classes, onUploadPhoto, photoList } = props;

  const onDeletePhoto = () => {
    console.log('hello delete');
  };

  const renderPhotoGallery = arrPhoto => {
    let result;
    if (arrPhoto && arrPhoto.length > 0) {
      result = arrPhoto.map(photo => {
        return (
          <div key={photo.id} className={classes.photoItem}>
            <img src={photo.url} alt={photo.id} />
            <div className={classes.photoOptions}>
              <button
                title="Remove this photo"
                type="button"
                onClick={onDeletePhoto}
              >
                <FiTrash />
              </button>
            </div>
          </div>
        );
      });
    }
    return result;
  };

  return (
    <div className={classes.photoUpload}>
      <TitleChild titleChild={titleConstants.PHOTO_GALLERY} />
      <div className={classes.photoGalleryZone}>
        <div className={classes.photoGallery}>
          { renderPhotoGallery(arrPhoto) }
        </div>
      </div>
      <div>
        <TitleChild titleChild={titleConstants.UPLOAD_PHOTO} />
        <Field
          name="photoGallery"
          component={renderPhotoUpload}
          onUploadPhoto={onUploadPhoto}
          photoList={photoList}
        />
      </div>
    </div>
  );
}

HostProfilePhotoUpload.propTypes = {
  classes: PropTypes.object,
  onUploadPhoto: PropTypes.func,
  photoList: PropTypes.array
};

export default withStyles(styles)(HostProfilePhotoUpload);
