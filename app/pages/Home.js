import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  Alert,
  ScrollView,
  FlatList,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import Avatar from '../assets/avatar.png';
import foodsData from '../data';

export default function Home({ navigation }) {
  const [isSelect, handleSelect] = useState([]);
  const [foodType, handleType] = useState('热销');

  const Width = Dimensions.get('screen').width;

  const renderRecommand = ({ item }) => (
    <View
      elevation={5}
      style={{
        width: 110,
        marginRight: 10,
        shadowColor: '#000000',
        shadowOffset: {
          width: 110,
          height: 140
        },
        shadowOpacity: 1.0
      }}
    >
      <View style={{ marginBottom: 10 }}>
        <Image
          source={Avatar}
          style={{
            width: 110,
            height: 105,
            borderRadius: 4,
            overflow: 'hidden'
          }}
        />
      </View>
      <Text
        style={{
          fontFamily: 'PingFangSC-Semibold',
          fontSize: 14,
          marginBottom: 3,
          color: '#222222'
        }}
      >
        {item.name}
      </Text>
      <Text
        style={{
          color: '#b6b6b6',
          fontSize: 11,
          fontFamily: 'PingFangSC-Semibold',
          marginBottom: 18
        }}
      >
        月售25 好评率100%
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 3
        }}
      >
        <Text
          style={{
            color: '#f5660b',
            fontSize: 14,
            fontFamily: 'PingFangSC-Medium'
          }}
        >
          ¥{item.money}起
        </Text>
        <TouchableOpacity
          onPress={() => {
            handleSelect([...isSelect, item]);
          }}
        >
          <Text
            style={{
              width: 23,
              height: 23,
              backgroundColor: '#008bff',
              color: '#ffffff',
              borderRadius: 16.5,
              overflow: 'hidden',
              textAlign: 'center',
              lineHeight: 23
            }}
          >
            ＋
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderSideBar = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        handleType(item.type);
      }}
    >
      <View
        style={{
          width: 95,
          height: 48,
          backgroundColor: foodType === item.type ? '#ffffff' : '#f0eeee',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text
          style={{
            color: foodType === item.type ? '#000000' : '#878787'
          }}
        >
          {item.type}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const renderDish = ({ item }) => (
    <View
      style={{
        width: 275,
        height: 91,
        flexDirection: 'row',
        marginBottom: 15
      }}
    >
      <Image
        source={Avatar}
        style={{
          width: 93,
          height: 93,
          marginRight: 8,
          borderRadius: 4,
          overflow: 'hidden'
        }}
      />
      <View style={{ width: 173 }}>
        <Text
          style={{
            fontFamily: 'PingFangSC-Semibold',
            fontSize: 14,
            marginBottom: 3,
            color: '#222222'
          }}
        >
          {item.name}
        </Text>
        <Text
          style={{
            color: '#b6b6b6',
            fontSize: 11,
            fontFamily: 'PingFangSC-Semibold',
            marginBottom: 3
          }}
        >
          主要原料：鱼肉
        </Text>
        <Text
          style={{
            color: '#b6b6b6',
            fontSize: 11,
            fontFamily: 'PingFangSC-Semibold',
            marginBottom: 18
          }}
        >
          月售25 好评率100%
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text
            style={{
              color: '#f5660b',
              fontSize: 14,
              fontFamily: 'PingFangSC-Medium'
            }}
          >
            ¥{item.money}起
          </Text>
          <TouchableOpacity
            onPress={() => {
              handleSelect([...isSelect, item]);
            }}
          >
            <Text
              style={{
                width: 23,
                height: 23,
                backgroundColor: '#008bff',
                color: '#ffffff',
                borderRadius: 16.5,
                overflow: 'hidden',
                textAlign: 'center',
                lineHeight: 23
              }}
            >
              ＋
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  // const renderModel = () => (
  //   <View style={{ marginTop: 22 }}>
  //     <View>
  //       <Text>Hello World!</Text>
  //       <TouchableOpacity
  //         onPress={() => {
  //           setModalVisible(!modalVisible);
  //         }}
  //       >
  //         <Text>Hide Modal</Text>
  //       </TouchableOpacity>
  //     </View>
  //   </View>
  // );

  const moneySummary = () =>
    isSelect.map(item => item.money).reduce((x, y) => Number(x) + Number(y));

  const canIPayMoney = () => !!(isSelect.length > 0 && moneySummary() >= 20);

  return (
    <View style={{ flex: 1 }}>
      {/* {renderModel()} */}
      <ScrollView>
        <View>
          <View style={{ marginBottom: 30 }}>
            <View
              style={{
                backgroundColor: '#008bff',
                height: 58,
                flexDirection: 'row',
                justifyContent: 'center'
              }}
            >
              <Image
                source={Avatar}
                style={{
                  width: 72,
                  height: 72,
                  position: 'absolute',
                  zIndex: 2,
                  borderRadius: 4,
                  overflow: 'hidden'
                }}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: 33
            }}
          >
            <Text
              style={{
                color: '#222222',
                fontSize: 20,
                fontFamily: 'PingFangSC-Semibold',
                marginBottom: 3
              }}
            >
              青柠檬便当
            </Text>
            <View
              style={{
                flexDirection: 'row',
                width: 250,
                justifyContent: 'space-around'
              }}
            >
              <Text
                style={{
                  color: '#7c7c7c',
                  fontSize: 11,
                  fontFamily: 'PingFangSC-Semibold'
                }}
              >
                评价4.8
              </Text>
              <Text
                style={{
                  color: '#7c7c7c',
                  fontSize: 11,
                  fontFamily: 'PingFangSC-Semibold'
                }}
              >
                月售2535
              </Text>
              <Text
                style={{
                  color: '#7c7c7c',
                  fontSize: 11,
                  fontFamily: 'PingFangSC-Semibold'
                }}
              >
                商家配送约38分钟
              </Text>
            </View>
          </View>
        </View>
        <View>
          <View>
            <Text
              style={{
                color: '#222222',
                fontSize: 18,
                fontFamily: 'PingFangSC-Semibold',
                marginBottom: 5,
                marginLeft: 10
              }}
            >
              商家推荐
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              height: 200,
              marginBottom: 15
            }}
          >
            <FlatList
              data={foodsData.filter(item => item.type === '热销')[0].foods}
              keyExtractor={(item, index) =>
                index === 0 ? '0' : String(item.id)
              }
              horizontal
              style={{ flexDirection: 'row', paddingHorizontal: 10 }}
              renderItem={renderRecommand}
            />
          </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
          <View style={{ width: 95, marginRight: 10, overflow: 'hidden' }}>
            <FlatList
              style={{ width: 95 }}
              data={foodsData}
              keyExtractor={(item, index) =>
                index === 0 ? '0' : String(item.id)
              }
              renderItem={renderSideBar}
            />
          </View>
          <View>
            <FlatList
              keyExtractor={(item, index) =>
                index === 0 ? '0' : String(item.id)
              }
              data={foodsData.filter(item => item.type === foodType)[0].foods}
              renderItem={renderDish}
            />
          </View>
        </View>
      </ScrollView>
      <View style={{ height: 46, width: '100%', flexDirection: 'row' }}>
        <View style={{ width: 255, backgroundColor: '#7c7c7c' }}>
          <Text
            style={{
              fontSize: 17,
              color: isSelect.length === 0 ? '#b6b6b6' : '#ffffff',
              lineHeight: 46,
              marginLeft: 16
            }}
          >
            {isSelect.length === 0
              ? '未选购商品'
              : isSelect.length === 1
              ? `¥${isSelect[0].money}`
              : `¥${moneySummary()}`}
          </Text>
        </View>
        <View
          style={{
            width: Width - 255,
            backgroundColor: canIPayMoney() ? '#008bff' : '#b6b6b6',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <TouchableOpacity
            onPress={() => {
              if (canIPayMoney()) {
                navigation.navigate('Result', {
                  selectFoods: isSelect,
                  summary: moneySummary()
                });
              } else {
                Alert.alert('满20起送哦');
              }
            }}
          >
            <Text
              style={{
                color: '#f0eeee',
                fontSize: 16,
                fontFamily: 'PingFangSC-Semibold'
              }}
            >
              {canIPayMoney() ? '去结算' : '¥20起送'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
