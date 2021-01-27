/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TensorFlow.js template
 * https://github.com/Polarisation/react-native-template-tfjs
 *
 * @format
 * @flow
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  Image,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';
import * as dupa from '@tensorflow/tfjs-react-native';
import * as jpeg from 'jpeg-js';

const App = () => {
  // State to indicate if TensorFlow.js finished loading
  const [isTfReady, setTfReady] = useState(false);
  const [url, setUrl] = useState(
    'https://kc-media-cdn-live.azureedge.net/cache/e/9/d/b/3/7/e9db37b1ae4c648023392626e7106aa18ec6dc0f.jpg',
  );
  const [displayText, setDisplayText] = useState('loading');

  // useEffect(() => {
  //   async function waitForTensorFlowJs() {
  //     await tf.ready();
  //     setTfReady(true);
  //   }
  //   waitForTensorFlowJs();
  // }, []);

  async function getPredition(url) {
    setDisplayText('Loading Tensorflow');
    await tf.ready();
    console.log(tf.getBackend());
    // tf.enableDebugMode();
    console.log(tf.ENV.features);
    setDisplayText('Loading Mobile Net');
    const model = await mobilenet.load();
    setDisplayText('Fetch Image');
    const response = await dupa.fetch(url, {}, {isBinary: true});
    setDisplayText('Getting Image Buffer');
    const imageDataArrayBuffer = await response.arrayBuffer();
    const imageData = new Uint8Array(imageDataArrayBuffer);
    setDisplayText('Getting Image Tensor');
    // const imageTensor = imageToTensor(imageData);
    const imageTensor = dupa.decodeJpeg(imageData);
    setDisplayText('Getting Classification Result');
    const prediction = await model.classify(imageTensor);
    setDisplayText(JSON.stringify(prediction));
    // const image = require('./assets/pies.jpg');
    // const imageAssetPath = Image.resolveAssetSource(image);
    // const response = await fetch(imageAssetPath.uri, {}, {isBinary: true});
    // const imageData = await response.arrayBuffer();
    // setDisplayText('Getting Classification Result');

    // // const imageTensor = dupa.decodeJpeg(imageData);
    // const imageTensor = imageToTensor(imageData);
    // setDisplayText('Getting Classification Result');
    // const prediction = await model.classify(imageTensor);
    // setDisplayText(JSON.stringify(prediction));
  }

  function imageToTensor(rawData) {
    const {width, height, data} = jpeg.decode(rawData, true);
    const buffer = new Uint8Array(width * height * 3);
    let offset = 0;
    for (let i = 0; i < buffer.lenght; i += 3) {
      buffer[i] = data[offset];
      buffer[i + 1] = data[offset + 1];
      buffer[i + 2] = data[offset + 2];
      offset += 4;
    }
    return tf.tensor3d(buffer, [height, width, 3]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionDescription}>
          TensorFlow.js v{tf.version.tfjs} is {isTfReady ? 'ready' : 'loading'}{' '}
          {isTfReady && `and using backend: ${tf.getBackend()}`}.
        </Text>
      </View>
      <Text>Only works with JPEG</Text>
      <TextInput
        style={{height: 40, width: '90%', borderColor: 'gray', borderWidth: 1}}
        onChangeText={text => setUrl(text)}
        value={url}
      />
      <Image style={styles.imageStyle} source={{uri: url}} />
      <Button title="classify Image" onPress={() => getPredition(url)} />
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
