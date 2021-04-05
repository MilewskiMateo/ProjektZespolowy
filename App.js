import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, TextInput, Button, Image} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';
import * as tfReact from '@tensorflow/tfjs-react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {PermissionsAndroid} from 'react-native';
import {decode} from 'base64-arraybuffer';

const App = () => {
  const [url, setUrl] = useState();
  const [model, setModel] = useState(null);
  const [imgBase64, setImgBase64] = useState();
  const [displayText, setDisplayText] = useState('loading');
  const options = {
    mediaType: 'photo',
    includeBase64: true,
  };

  useEffect(() => {
    loadModel();
  }, []);

  async function loadModel() {
    await tf.ready();
    const model = await mobilenet.load();
    setModel(model);
    console.log(model);
  }

  async function getPredition() {
    console.log('Loading Mobile');
    if (model == null) {
      await tf.ready();
      setModel(await mobilenet.load());
    }
    console.log('Array Buffer');

    const imageDataArrayBuffer = decode(imgBase64);
    const imageData = new Uint8Array(imageDataArrayBuffer);
    console.log('Image Tensor');
    const imageTensor = tfReact.decodeJpeg(imageData);
    console.log('Classification');
    const prediction = await model.classify(imageTensor);
    console.log('Stringify');
    setDisplayText(JSON.stringify(prediction));
  }

  async function handleCamera() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message: 'Cool Photo App needs access to your camera ',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Camera granted');
      } else if (PermissionsAndroid.RESULTS.DENIED) {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
    launchCamera(options, response => {
      setUrl(response.uri);
      setImgBase64(response.base64);
    });
  }
  function handleImageLibrary() {
    launchImageLibrary(options, response => {
      setUrl(response.uri);
      setImgBase64(response.base64);
    });
  }

  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={{uri: url}} />
      <Button title="classify Image" onPress={() => getPredition(url)} />
      <Button title="launchcamera" onPress={() => handleCamera()} />
      <Button title="launchLibrary" onPress={() => handleImageLibrary()} />
      <Text>{displayText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: 200,
    height: 200,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
});

export default App;
