import React, { useState } from 'react';
import { View } from 'react-native';
import SelectBoxPicture from '../../component/widget/select/SelectBoxPicture';

const CameraTest = () => {
  const [NIDFrontImage, setNIDFrontImage] = useState({});
  return (
    <View>
      <SelectBoxPicture
        label="Depositor's NID-Front"
        onPictureSelect={(imageObj) => {
          setNIDFrontImage({ data: imageObj.base64 });
        }}
      />
    </View>
  );
}
export default CameraTest;
