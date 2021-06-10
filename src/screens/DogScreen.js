import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Platform,
  Dimensions,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Colors, Typography} from '../styles';

import BackButton from '../components/BackButton/BackButton';
import asHelper from '../utils/as.helper';
import DropShadow from 'react-native-drop-shadow';
import VerticalListItem from '../components/VerticalList/subcomponents/VerticalListItem';
import Favourite from '../components/Favourite/Favourite';
import DeleteButton from '../components/DeleteButton/DeleteButton';

const RenderItem = ({item, n}) => {
  return (
    <View style={{paddingHorizontal: 20}}>
      <VerticalListItem
        label={item.className}
        percent={Math.round(item.probability * 100)}
        imageUri={item.image}
        disabled={true}
        onPress={() => n.push('DogScreen', {item: item})}
      />
    </View>
  );
};

export default ({navigation, route}) => {
  const insets = useSafeAreaInsets();
  const s = styles(insets);
  const {item} = route.params;

  const [data, setData] = React.useState([]);
  const [isFav, setFav] = React.useState(item.favourite);

  React.useEffect(() => {
    setData(item.other);
  }, []);

  const handleFav = async () => {
    await asHelper.changeFavourite(item.id);
    setFav(!isFav);
  };

  const Header = () => {
    return (
      <>
        {Platform.OS === 'ios' ? (
          <Image defaultSource={{uri: item.imageUri}} style={s.image} />
        ) : (
          <Image source={{uri: item.imageUri}} style={s.image} />
        )}

        <View style={s.heading}>
          <View style={s.percentContainer}>
            <DropShadow style={s.shadow}>
              <View style={s.percent}>
                <Text style={Typography.HEADERS.H3}>{item.percent}%</Text>
              </View>
            </DropShadow>
          </View>

          <Text style={[Typography.HEADERS.H2, s.header]}>{item.label}</Text>
          <Text style={Typography.BODY.MEDIUM}>
            {item.info
              ? item.info.description
              : "Unfortunately we don't have good description."}
          </Text>
          <View style={s.menu}>
            <Favourite isFavourite={isFav} onPress={handleFav} />
            <View style={s.menuItem}>
              <DeleteButton
                onPress={async () => {
                  await asHelper.deleteData(item.id);
                  navigation.navigate('HomeScreen');
                }}
              />
            </View>
          </View>

          {data.length > 0 && (
            <Text style={[Typography.HEADERS.H3, s.other]}>
              Other posibilities
            </Text>
          )}
        </View>
      </>
    );
  };

  return (
    <>
      <View style={s.backBtn}>
        <BackButton />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({item}) => <RenderItem item={item} n={navigation} />}
        keyExtractor={item => item.id}
        ListHeaderComponent={() => <Header />}
        ItemSeparatorComponent={() => <View style={s.separator} />}
        ListFooterComponent={() => <View style={s.footer} />}
      />
    </>
  );
};

const styles = insets =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    scroll: {
      flex: 1,
    },
    backBtn: {
      position: 'absolute',
      top: insets.top,
      left: 20,
      zIndex: 1000,
    },
    image: {
      height: Dimensions.get('screen').height * 0.65,
      width: '100%',
      resizeMode: 'cover',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
    },
    fav: {
      paddingBottom: 56,
      paddingRight: 20,
    },
    percentContainer: {
      position: 'absolute',
      top: -50,
      right: 40,
    },
    percent: {
      backgroundColor: Colors.WHITE_COLOR,
      width: 80,
      height: 80,
      borderRadius: 80,
      justifyContent: 'center',
      alignItems: 'center',
    },
    shadow: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.09,
      shadowRadius: 47,
    },
    header: {
      marginBottom: 10,
      textTransform: 'capitalize',
    },
    other: {
      marginTop: 36,
      marginBottom: 20,
    },
    heading: {
      marginTop: -36,
      paddingTop: 30,
      paddingHorizontal: 20,
      borderRadius: 36,
      backgroundColor: Colors.WHITE_COLOR,
    },
    menu: {
      flexDirection: 'row',
      marginTop: 10,
    },
    menuItem: {
      marginLeft: 10,
    },
    separator: {
      height: 20,
    },
    footer: {
      height: 40,
    },
  });
