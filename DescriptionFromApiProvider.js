import React, {useEffect, useState} from 'react';
import {StyleSheet, Image, Text} from 'react-native';
import {gql, useQuery} from '@apollo/client';

const DescriptionFromApiProvider = props => {
  const CHAPTERS_QUERY = gql`
    query {
      retrieveByQuery(query: "${props.breedName}") {
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
  `;
  const {data, loading} = useQuery(CHAPTERS_QUERY);
  const [filtredData, setFiltredData] = useState();

  useEffect(() => {
    if (!loading) {
      let tmp = data.retrieveByQuery.filter(
        e => e.breedName == props.breedName,
      );
      if (tmp.length > 0) {
        setFiltredData(tmp[0]);
      } else {
        setFiltredData(false);
      }
    }
  }, [data]);

  return (
    <>
      {filtredData ? (
        <>
          <Image style={styles.imageStyle} source={{uri: filtredData.image}} />
          <Text>{filtredData.description}</Text>
          <Text>{filtredData.dogInfo.height}</Text>
          <Text>{filtredData.dogInfo.weight}</Text>
          <Text>{filtredData.dogInfo.life}</Text>
        </>
      ) : null}
    </>
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
    width: 100,
    height: 100,
  },
});
export default DescriptionFromApiProvider;
