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
  // const model = await tf.loadGraphModel('http://daczko.pl/fluffi/model.json');

  // const modelUrl =
  //   'https://storage.googleapis.com/tfjs-models/savedmodel/mobilenet_v2_1.0_224/model.json';
  // const model = await tf.loadGraphModel(modelUrl);
  if (model == null || model == undefined) {
    return 'Model is empty or undefined';
  }
  const imageDataArrayBuffer = decode(imgBase64);
  const imageData = new Uint8Array(imageDataArrayBuffer);
  const imageTensor = tfReact.decodeJpeg(imageData);

  // imageTensor = imageTensor.reshape([1, 224, 224, 3]);

  const prediction = model.classify(imageTensor);
  // const prediction = model.predict(imageTensor);

  return prediction;
}

const recognitionHelper = {
  loadModel,
  getPredition,
};

export default recognitionHelper;
