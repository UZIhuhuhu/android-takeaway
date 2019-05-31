import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  FlatList,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import Avatar from '../assets/avatar.png';
import foodsData from '../data';

export default function Home({ navigation }) {
  const [isSelect, handleSelect] = useState('未选购商品');
  const [foodType, handleType] = useState('优惠');

  const Width = Dimensions.get('screen').width;
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
        marginBottom: 10
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
              handleSelect(item.money);
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
  return (
    <View style={{ flex: 1 }}>
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
              color: '#ffffff',
              lineHeight: 46,
              marginLeft: 16
            }}
          >
            {isSelect === '未选购商品' ? '未选购商品' : `¥${isSelect}`}
          </Text>
        </View>
        <View
          style={{
            width: Width - 255,
            backgroundColor: '#008bff',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Result', { username: 1 });
            }}
          >
            <Text
              style={{
                color: '#f0eeee',
                fontSize: 16,
                fontFamily: 'PingFangSC-Semibold'
              }}
            >
              去结算
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
