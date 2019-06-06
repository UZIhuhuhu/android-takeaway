import React, { useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';

export default function Result({ navigation }) {
  const Width = Dimensions.get('screen').width;
  const Height = Dimensions.get('screen').height;
  useEffect(() => {
    navigation.getParam('selectFoods');
  });
  const renderResult = ({ item }) => (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        color: '#222222',
        fontFamily: 'PingFangSC-Medium',
        fontSize: 13
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ marginRight: 10 }}>
          <Image style={{ width: 38, height: 38 }} source={item.img} />
        </View>
        <View>
          <Text>{item.name}</Text>
        </View>
      </View>
      <View style={{ marginRight: 16 }}>
        <Text>¥{item.money}</Text>
      </View>
    </View>
  );
  return (
    <View
      style={{
        backgroundColor: '#edebeb',
        height: Height,
        position: 'relative',
        flex: 1
      }}
    >
      <View
        style={{
          height: 227,
          backgroundColor: '#2c9dfb',
          marginBottom: 10
        }}
      >
        <Text
          style={{
            fontFamily: 'PingFangSC-Semibold',
            fontSize: 18,
            color: '#ffffff',
            marginLeft: 15,
            fontWeight: '700'
          }}
        >
          南京邮电大学大学生活动中心
        </Text>
        <Text
          style={{
            fontFamily: 'PingFangSC-Semibold',
            fontSize: 13,
            color: '#ffffff',
            marginLeft: 15
          }}
        >
          黄兴源 18851234567
        </Text>
      </View>
      <View
        style={{
          position: 'absolute',
          top: 50,
          width: Width - 16,
          backgroundColor: '#ffffff',
          marginHorizontal: 8
        }}
      >
        <View
          style={{
            marginHorizontal: 8,
            margintop: 8,
            marginBottom: 10
          }}
        >
          <View
            style={{
              height: 36,
              borderBottomColor: '#f0eeee',
              borderBottomWidth: 1,
              flexDirection: 'row',
              alignItems: 'center'
            }}
          >
            <Text
              style={{
                color: '#222222',
                fontFamily: 'PingFangSC-Semibold',
                fontSize: 14
              }}
            >
              青柠檬便当
            </Text>
          </View>
        </View>
        <View
          style={{
            marginHorizontal: 8,
            borderBottomColor: '#f0eeee',
            borderBottomWidth: 1
          }}
        >
          <FlatList
            data={navigation.getParam('selectFoods')}
            renderItem={renderResult}
            keyExtractor={(item, index) =>
              index === 0 ? '0' : String(item.id)
            }
          />
        </View>
        <View
          style={{
            color: '#222222',
            fontFamily: 'PingFangSC-Semibold',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            width: '100%',
            marginVertical: 20,
            fontWeight: 400
          }}
        >
          <View
            style={{
              marginRight: 16,
              flexDirection: 'row',
              alignItems: 'center'
            }}
          >
            <Text style={{ fontSize: 14, marginRight: 8 }}>小计</Text>
            <Text style={{ fontSize: 20 }}>
              ¥{navigation.getParam('summary')}
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          height: 46,
          width: '100%',
          flexDirection: 'row',
          position: 'absolute',
          bottom: 0,
          zIndex: 20
        }}
      >
        <View style={{ width: 255, backgroundColor: '#7c7c7c' }}>
          <Text
            style={{
              fontSize: 17,
              color: '#ffffff',
              lineHeight: 46,
              marginLeft: 16
            }}
          >
            ¥{navigation.getParam('summary')}
          </Text>
        </View>

        <View
          style={{
            width: Width - 255,
            backgroundColor: '#6bc081',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <TouchableOpacity>
            <Text
              style={{
                color: '#f0eeee',
                fontSize: 16,
                fontFamily: 'PingFangSC-Semibold'
              }}
            >
              确认支付
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
