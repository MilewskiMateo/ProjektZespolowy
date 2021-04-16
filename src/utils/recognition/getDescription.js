async function getDescription(breedName) {
  const res = await fetch(
    'https://graphql-api-dog-breeds.herokuapp.com/graphql',
    {
      method: 'POST',
      headers: {'Content-Type': 'application/json', Accept: 'application/json'},
      body: JSON.stringify({
        query: `
  query {
    retrieveByQuery(query: "${breedName}") {
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
  }
    `,
      }),
    },
  );
  const result_1 = await res.json();
  if (result_1.data == null) {
    console.log('nie znalazlem zadnego ciekawego opisu');
  } else {
    let tmp = result_1.data.retrieveByQuery.filter(
      e => e.breedName == breedName,
    );
    if (tmp.length > 0) {
      return tmp[0];
    } else {
      return null;
    }
  }
}

export default getDescription;
