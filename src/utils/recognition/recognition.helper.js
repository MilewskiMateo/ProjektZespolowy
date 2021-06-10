import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';
import * as tfReact from '@tensorflow/tfjs-react-native';
import {decode} from 'base64-arraybuffer';

async function loadModel() {
  await tf.ready();
  const model = await mobilenet.load();
  return model;
}

async function getPredition(imgBase64) {
  tf.setBackend('cpu');
  await tf.ready();
  console.log('hop');
  const model = await mobilenet.load();
  console.log('zupa');

  // const modelJson = require('../../assets/model.json');
  // const modelWeights = require(`../../assets/group1-shard1of1.bin`);

  // const model = await tf.loadLayersModel(
  //   tfReact.bundleResourceIO(modelJson, modelWeights),
  // );

  if (model == null || model == undefined) {
    return 'Model is empty or undefined';
  }

  console.log('mam model');

  // const imageDataArrayBuffer = tf.util.encodeString(imgBase64, 'base64').buffer;
  // const imageData = new Uint8Array(imageDataArrayBuffer);
  // const imageTensor = tfReact.decodeJpeg(imageData);

  const imageDataArrayBuffer = decode(imgBase64);
  const imageData = new Uint8Array(imageDataArrayBuffer);
  const imageTensor = tfReact.decodeJpeg(imageData);

  // const prediction = model.predict(imageTensor.reshape([1, 1024, 1024, 3]));
  const prediction = model.classify(imageTensor);
  console.log(prediction);
  return prediction;
}

const recognitionHelper = {
  loadModel,
  getPredition,
};

export default recognitionHelper;
