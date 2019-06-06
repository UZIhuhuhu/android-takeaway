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
        name: '酸辣土豆丝',
        money: '7',
        id: 1,
        img: suanLaTuDouSi
      },
      {
        name: '香茄子',
        money: '7',
        id: 2,
        img: xianQieZi
      },
      {
        name: '宫保鸡丁',
        money: '9',
        id: 3,
        img: jiDing
      },
      {
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
        name: '拍黄瓜',
        money: '4',
        id: 1,
        img: huangGua
      },
      {
        name: '凉拌金针菇',
        money: '4',
        id: 2,
        img: Gu
      },
      {
        name: '凉拌海带丝',
        money: '4',
        id: 3,
        img: haiDai
      }
    ]
  },
  {
    type: '炒菜',
    id: 4,
    foods: [
      {
        name: '鱼香肉丝',
        money: '9',
        id: 1,
        img: rouSi
      },
      {
        name: '宫保鸡丁',
        money: '9',
        id: 2,
        img: jiDing
      },
      {
        name: '鱼香茄子',
        money: '13',
        id: 3,
        img: xianQieZi
      },
      {
        name: '酸辣土豆丝',
        money: '7',
        id: 4,
        img: suanLaTuDouSi
      }
    ]
  },
  {
    type: '烧菜',
    id: 5,
    foods: [
      {
        name: '麻婆豆腐',
        money: '6',
        id: 1,
        img: douFu
      },
      {
        name: '小鸡炖蘑菇',
        money: '13',
        id: 2,
        img: moGu
      },
      {
        name: '酸菜鱼',
        money: '14',
        id: 3,
        img: suanCaiYu
      },
      {
        name: '可乐鸡翅',
        money: '9',
        id: 4,
        img: jiChi
      },
      {
        name: '红烧狮子头',
        money: '6',
        id: 5,
        img: shiZiTou
      }
    ]
  },
  {
    type: '汤类',
    id: 6,
    foods: [
      {
        name: '冬瓜排骨汤',
        money: '6',
        id: 1,
        img: dongGua
      },
      {
        name: '番茄鸡蛋汤',
        money: '4',
        id: 2,
        img: fanQie
      },
      {
        name: '紫菜蛋花汤',
        money: '4',
        id: 3,
        img: ziCai
      }
    ]
  },
  {
    type: '主食',
    id: 7,
    foods: [
      {
        name: '米饭',
        money: '1.5',
        id: 10,
        img: miFan
      }
    ]
  },
  {
    type: '饮料',
    id: 8,
    foods: [
      {
        name: '可乐',
        money: '3',
        id: 1,
        img: keLe
      },
      {
        name: '雪碧',
        money: '3',
        id: 2,
        img: xueBi
      },
      {
        name: '怡宝',
        money: '2',
        id: 3,
        img: shui
      }
    ]
  }
];

export default data;
