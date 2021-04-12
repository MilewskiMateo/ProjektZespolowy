import React, {useEffect} from 'react';
import {Text, FlatList, Pressable, Button} from 'react-native';
import {gql, useQuery} from '@apollo/client';
import {load} from '@tensorflow-models/mobilenet';

const CHAPTERS_QUERY = gql`
  query {
    retrieveByQuery(query: "neapolitan mastiff") {
      id
      breedName
      description
      image
      dogInfo {
        height
        weight
        life
        breedGroup
      }
    }
  }
`;

const GraphQLTest = () => {
  const {data, loading} = useQuery(CHAPTERS_QUERY);

  return (
    <>
      <Button
        title="graph"
        onPress={() =>
          loading
            ? console.log({loadingr})
            : console.log(data.retrieveByQuery[0].image)
        }
      />
    </>
  );
};

export default GraphQLTest;
