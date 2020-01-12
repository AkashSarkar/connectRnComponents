import React, { useState } from 'react';
import { View } from 'react-native';
import SelectBoxPicture from '../../component/widget/select/SelectBoxPicture';

const CameraTest = () => {
  const [NIDFrontImage, setNIDFrontImage] = useState({});
  return (
    <View style={{
      flex: 1,
      paddingVertical: 10,
      justifyContent: 'space-around'
    }}
    >
      <SelectBoxPicture
        label="Depositor's NID-Front"
        onPictureSelect={(imageObj) => {
          setNIDFrontImage({ data: imageObj.base64 });
        }}
      />
      <SelectBoxPicture
        v2
        label="Depositor's NID-Front Updated"
        onPictureSelect={(imageObj) => {
          setNIDFrontImage({ data: imageObj.base64 });
        }}
      />
    </View>
  );
};
export default CameraTest;
