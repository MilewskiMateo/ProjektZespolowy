import AsyncStorage from '@react-native-community/async-storage';

async function getData() {
  try {
    const jsonValue = await AsyncStorage.getItem('@fluffi_data');
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.log(e);
  }
}

async function addData(newValue) {
  const data = await getData();
  data.unshift(newValue);
  await storeData(data);
}

async function storeData(value) {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@fluffi_data', jsonValue);
  } catch (e) {
    console.log(e);
  }
}

async function changeFavourite(id) {
  const data = await getData();
  objIndex = data.findIndex(obj => obj.id === id);
  data[objIndex].favourite = !data[objIndex].favourite;
  await storeData(data);
}

async function deleteData(id) {
  const data = await getData();
  const tmp = data.filter(d => d.id !== id);
  await storeData(tmp);
}

const asHelper = {
  getData,
  addData,
  changeFavourite,
  deleteData,
  storeData,
};

export default asHelper;
