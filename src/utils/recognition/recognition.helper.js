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
  await tf.ready();
  const model = await mobilenet.load();
  if (model == null || model == undefined) {
    return 'Model is empty or undefined';
  }
  const imageDataArrayBuffer = decode(imgBase64);
  const imageData = new Uint8Array(imageDataArrayBuffer);
  const imageTensor = tfReact.decodeJpeg(imageData);
  const prediction = await model.classify(imageTensor);
  return prediction;
}

const recognitionHelper = {
  loadModel,
  getPredition,
};

export default recognitionHelper;
