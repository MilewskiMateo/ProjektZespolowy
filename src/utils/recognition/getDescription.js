const breedMap = {
  Chihuahua: 'chihuahua',
  Pomeranian: 'pomeranian',
  'bull mastiff': 'bullmastiff',
  'chow, chow chow': 'chow chow',
  'Border collie': 'border collie',
  'Norfolk terrier': 'norfolk terrier',
  'English foxhound': 'english foxhound',
  'wire-haired fox terrier': 'fox terrier',
  'Boston bull, Boston terrier': 'boston terrier',
  'Cardigan, Cardigan Welsh corgi': 'cardigan welsh corgi',
  'Pembroke, Pembroke Welsh corgi': 'pembroke welsh corgi',
};

async function getDescription(breedName) {
  const queryBreedName = breedName in breedMap ? breedMap[breedName] : breedName
  const res = await fetch(
    'https://graphql-api-dog-breeds.herokuapp.com/graphql',
    {
      method: 'POST',
      headers: {'Content-Type': 'application/json', Accept: 'application/json'},
      body: JSON.stringify({
        query: `
        query {
          retrieveByQuery(query: "${queryBreedName}") {
            id
            description
            breedName
            image
            dogInfo {
              height
              weight
              life
            }
          }
        }`
      }),
    },
  );
  const result_1 = await res.json();
  if (result_1.data == null) {
    console.log('nie znalazlem zadnego ciekawego opisu');
  } else {
    let tmp = result_1.data.retrieveByQuery.filter(
      e => e.breedName == queryBreedName,
    );
    if (tmp.length > 0) {
      return tmp[0];
    } else {
      return null;
    }
  }
}



export default getDescription;
