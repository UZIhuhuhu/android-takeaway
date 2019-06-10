import suanLaTuDouSi from './assets/foods/酸辣土豆丝.jpg';
import xianQieZi from './assets/foods/鱼香茄子.jpg';
import suanCaiYu from './assets/foods/酸菜鱼.jpg';
import jiDing from './assets/foods/宫保鸡丁.jpg';
import huangGua from './assets/foods/拍黄瓜.jpg';
import Gu from './assets/foods/凉拌金针菇.jpg';
import haiDai from './assets/foods/凉拌海带丝.jpg';
import rouSi from './assets/foods/鱼香肉丝.jpg';
import douFu from './assets/foods/麻婆豆腐.jpg';
import moGu from './assets/foods/小鸡炖蘑菇.jpg';
import jiChi from './assets/foods/可乐鸡翅.jpg';
import shiZiTou from './assets/foods/红烧狮子头.jpg';
import dongGua from './assets/foods/冬瓜排骨汤.jpg';
import fanQie from './assets/foods/番茄鸡蛋汤.jpg';
import ziCai from './assets/foods/紫菜蛋花汤.jpg';
import miFan from './assets/foods/米饭.jpg';
import shui from './assets/foods/水.jpg';
import keLe from './assets/foods/可乐.jpg';
import xueBi from './assets/foods/雪碧.jpg';

const data = [
  {
    type: '热销',
    id: 2,
    foods: [
      {
        count: 0,
        name: '酸辣土豆丝',
        money: '7',
        id: 1,
        img: suanLaTuDouSi,
        source: '土豆'
      },
      {
        count: 0,
        name: '香茄子',
        money: '7',
        id: 2,
        img: xianQieZi,
        source: '茄子'
      },
      {
        count: 0,
        name: '宫保鸡丁',
        money: '9',
        id: 3,
        img: jiDing,
        source: '花生，鸡肉，胡萝卜'
      },
      {
        count: 0,
        name: '酸菜鱼',
        money: '14',
        id: 4,
        img: suanCaiYu
      }
    ]
  },
  {
    type: '凉菜',
    id: 3,
    foods: [
      {
        count: 0,
        name: '拍黄瓜',
        money: '4',
        id: 11,
        img: huangGua,
        source: '黄瓜'
      },
      {
        count: 0,
        name: '凉拌金针菇',
        money: '4',
        id: 12,
        img: Gu,
        souce: '金针菇'
      },
      {
        count: 0,
        name: '凉拌海带丝',
        money: '4',
        id: 13,
        img: haiDai,
        source: '海带'
      }
    ]
  },
  {
    type: '炒菜',
    id: 4,
    foods: [
      {
        count: 0,
        name: '鱼香肉丝',
        money: '9',
        id: 21,
        img: rouSi,
        source: '里脊，木耳，冬笋'
      },
      {
        count: 0,
        name: '宫保鸡丁',
        money: '9',
        id: 22,
        img: jiDing,
        source: '花生，鸡肉，胡萝卜'
      },
      {
        count: 0,
        name: '鱼香茄子',
        money: '13',
        id: 23,
        img: xianQieZi,
        source: '茄子'
      },
      {
        count: 0,
        name: '酸辣土豆丝',
        money: '7',
        id: 24,
        img: suanLaTuDouSi,
        source: '土豆'
      }
    ]
  },
  {
    type: '烧菜',
    id: 5,
    foods: [
      {
        count: 0,
        name: '麻婆豆腐',
        money: '6',
        id: 31,
        img: douFu,
        source: '豆腐'
      },
      {
        count: 0,
        name: '小鸡炖蘑菇',
        money: '13',
        id: 32,
        img: moGu,
        source: '鸡肉，蘑菇'
      },
      {
        count: 0,
        name: '酸菜鱼',
        money: '14',
        id: 33,
        img: suanCaiYu,
        source: '鱼肉，酸菜'
      },
      {
        count: 0,
        name: '可乐鸡翅',
        money: '9',
        id: 34,
        img: jiChi,
        source: '可乐，鸡翅'
      },
      {
        count: 0,
        name: '红烧狮子头',
        money: '6',
        id: 35,
        img: shiZiTou,
        source: '肉丸'
      }
    ]
  },
  {
    type: '汤类',
    id: 6,
    foods: [
      {
        count: 0,
        name: '冬瓜排骨汤',
        money: '6',
        id: 41,
        img: dongGua,
        source: '冬瓜，排骨'
      },
      {
        count: 0,
        name: '番茄鸡蛋汤',
        money: '4',
        id: 42,
        img: fanQie,
        soruce: '番茄，鸡蛋'
      },
      {
        count: 0,
        name: '紫菜蛋花汤',
        money: '4',
        id: 43,
        img: ziCai,
        source: '紫菜，鸡蛋'
      }
    ]
  },
  {
    type: '主食',
    id: 7,
    foods: [
      {
        count: 0,
        name: '米饭',
        money: '1.5',
        id: 50,
        img: miFan
      }
    ]
  },
  {
    type: '饮料',
    id: 8,
    foods: [
      {
        count: 0,
        name: '可乐',
        money: '3',
        id: 61,
        img: keLe
      },
      {
        count: 0,
        name: '雪碧',
        money: '3',
        id: 62,
        img: xueBi
      },
      {
        count: 0,
        name: '怡宝',
        money: '2',
        id: 63,
        img: shui
      }
    ]
  }
];

export default data;
