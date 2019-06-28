import React from 'react';
import {
  View,
  Image,
  Text,
  Alert,
  ScrollView,
  FlatList,
  StatusBar,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import Dialog, {
  DialogContent,
  SlideAnimation
} from 'react-native-popup-dialog';
import Avatar from '../assets/avatar.png';
import foodsData from '../data';

const spicyData = [
  {
    name: '微辣',
    id: 1
  },
  {
    name: '中辣',
    id: 2
  },
  { name: '超辣', id: 3 }
];

const Width = Dimensions.get('screen').width;

export default class Home extends React.Component {
  state = {
    isSelect: [],
    foodType: '热销',
    count: {},
    dialogStatus: false,
    spicyTag: 0
  };

  handleSelect = a => {
    this.setState({ isSelect: a });
  };

  handleType = a => {
    this.setState({ foodType: a });
  };

  setCount = a => {
    this.setState({ count: a });
  };

  setDialog = a => {
    this.setState({ dialogStatus: a });
  };

  renderCommon = item => (
    <View>
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
        {item.count !== 0 ? (
          <TouchableOpacity
            onPress={() => {
              item.count--;
              this.handleSelect([
                ...this.state.isSelect
                  .filter(foodsItem => foodsItem.name === item.name)
                  .slice(1),
                ...this.state.isSelect.filter(
                  foodsItem => foodsItem.name !== item.name
                )
              ]);
            }}
          >
            <Text
              style={{
                width: 23,
                height: 23,
                backgroundColor: '#2c9dfb',
                color: '#ffffff',
                borderRadius: 16.5,
                overflow: 'hidden',
                textAlign: 'center',
                lineHeight: 23
              }}
            >
              －
            </Text>
          </TouchableOpacity>
        ) : null}

        {item.count !== 0 ? <Text>{item.count}</Text> : null}
        <TouchableOpacity
          onPress={() => {
            this.setDialog(true);
            item.count++;
            this.handleSelect([...this.state.isSelect, item]);
            const result = {};
            [...this.state.isSelect, item].forEach(x => {
              result[x.name] = (result[x.name] || 0) + 1;
            });
            this.setCount(result);
          }}
        >
          <Text
            style={{
              width: 23,
              height: 23,
              backgroundColor: '#2c9dfb',
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

  renderRecommand = ({ item }) => (
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
          source={item.img}
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
      {this.renderCommon(item)}
    </View>
  );

  renderSideBar = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        this.handleType(item.type);
      }}
    >
      <View
        style={{
          width: 95,
          height: 48,
          backgroundColor:
            this.state.foodType === item.type ? '#ffffff' : '#f0eeee',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text
          style={{
            color: this.state.foodType === item.type ? '#000000' : '#878787'
          }}
        >
          {item.type}
        </Text>
      </View>
    </TouchableOpacity>
  );

  renderDish = ({ item }) => (
    <View
      style={{
        width: Width - 140,
        height: 91,
        flexDirection: 'row',
        marginBottom: 15
      }}
    >
      <Image
        source={item.img}
        style={{
          width: 93,
          height: 93,
          marginRight: 8,
          borderRadius: 4,
          overflow: 'hidden'
        }}
      />
      <View style={{ width: Width - 220 }}>
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
          主要原料： {item.source ? item.source : '蔬菜'}
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
        {this.renderCommon(item)}
      </View>
    </View>
  );

  // renderTag = ({ item }) => <Tag {...item} />;
  setSpicy = a => {
    this.setState({ spicyTag: a });
  };

  renderTag = item => (
    <TouchableOpacity
      onPress={() => {
        this.setSpicy(item.index);
      }}
    >
      <Text
        style={{
          marginRight: 15,
          backgroundColor:
            item.index === this.state.spicyTag ? '#e5effd' : '#f0eeee',
          width: 80,
          textAlign: 'center',
          color: item.index === this.state.spicyTag ? '#359bf0' : '#878787',
          height: 25,
          lineHeight: 25,
          fontFamily: 'PingFangSC-Semibold',
          fontSize: 12
        }}
      >
        {item.item.name}
      </Text>
    </TouchableOpacity>
  );

  renderDialog = item => (
    <Dialog
      dialogAnimation={
        new SlideAnimation({
          slideFrom: 'bottom'
        })
      }
      visible={this.state.dialogStatus}
      onTouchOutside={() => {
        this.setDialog(!this.state.dialogStatus);
      }}
    >
      <DialogContent>
        <View
          style={{
            width: 275,
            height: 91,
            flexDirection: 'row',
            marginBottom: 15,
            marginTop: 15
          }}
        >
          <Image
            source={item.img}
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
              主要原料： {item.source ? item.source : '蔬菜'}
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
          </View>
        </View>
        <View style={{ marginBottom: 35 }}>
          <Text style={{ marginBottom: 10 }}>辣度</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            <FlatList
              data={spicyData}
              extraData={this.state}
              horizontal
              renderItem={this.renderTag}
              keyExtractor={(nextItem, index) =>
                index === 0 ? '0' : String(nextItem.id)
              }
            />
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              this.setDialog(false);
            }}
          >
            <Text
              style={{
                width: '100%',
                backgroundColor: '#2c9dfb',
                color: '#ffffff',
                textAlign: 'center',
                height: 35,
                lineHeight: 35
              }}
            >
              选好了
            </Text>
          </TouchableOpacity>
        </View>
      </DialogContent>
    </Dialog>
  );

  moneySummary = () =>
    this.state.isSelect
      .map(item => item.money)
      .reduce((x, y) => Number(x) + Number(y));

  canIPayMoney = () =>
    !!(this.state.isSelect.length > 0 && this.moneySummary() >= 20);

  render() {
    const { navigation } = this.props;
    const { isSelect, foodType, count } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" backgroundColor="#2c9dfb" />
        {this.renderDialog(isSelect[0] || foodsData[0].foods[0])}
        <ScrollView>
          <View>
            <View style={{ marginBottom: 30 }}>
              <View
                style={{
                  backgroundColor: '#2c9dfb',
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
                marginBottom: 15,
                paddingRight: 10
              }}
            >
              <FlatList
                data={foodsData.filter(item => item.type === '推荐')[0].foods}
                extraData={this.state}
                keyExtractor={(item, index) =>
                  index === 0 ? '0' : String(item.id)
                }
                horizontal
                style={{ flexDirection: 'row', paddingHorizontal: 10 }}
                renderItem={this.renderRecommand}
              />
            </View>
          </View>

          <View
            style={{
              width: Width,
              flexDirection: 'row',
              justifyContent: 'flex-start'
            }}
          >
            <View style={{ width: 95, marginRight: 10, overflow: 'hidden' }}>
              <FlatList
                style={{ width: 95 }}
                data={foodsData}
                extraData={this.state}
                keyExtractor={(item, index) =>
                  index === 0 ? '0' : String(item.id)
                }
                renderItem={this.renderSideBar}
              />
            </View>
            <View style={{ width: Width - 110 }}>
              <FlatList
                data={foodsData.filter(item => item.type === foodType)[0].foods}
                extraData={this.state}
                keyExtractor={(item, index) =>
                  index === 0 ? '0' : String(item.id)
                }
                renderItem={this.renderDish}
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
                : `¥${this.moneySummary()}`}
            </Text>
          </View>
          <View
            style={{
              width: Width - 255,
              backgroundColor: this.canIPayMoney() ? '#2c9dfb' : '#b6b6b6',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <TouchableOpacity
              onPress={() => {
                if (this.canIPayMoney()) {
                  navigation.navigate('Result', {
                    selectFoods: isSelect,
                    summary: this.moneySummary(),
                    count
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
                {this.canIPayMoney() ? '去结算' : '¥20起送'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
