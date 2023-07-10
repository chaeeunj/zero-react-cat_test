import { IResult } from './types';

import Russianblue from '../../assets/cat/russianblue.jpg';
import Siamese from '../../assets/cat/siamese.jpg';
import Persian from '../../assets/cat/persian.jpg';
import Bengal from '../../assets/cat/bengal.jpg';
import Turkishangora from '../../assets/cat/turkishangora.jpg';
import Abyssinian from '../../assets/cat/abyssinian.jpg';
import Norwegianforest from '../../assets/cat/norwegianforest.jpg';
import Ameshort from '../../assets/cat/ameshort.jpg';
import Korshort from '../../assets/cat/korshort.jpg';
import Exotic from '../../assets/cat/exotic.jpg';
import Scottishfold from '../../assets/cat/scottishfold.jpg';
import Munchkin from '../../assets/cat/munchkin.jpg';
import Ragdoll from '../../assets/cat/ragdoll.jpg';
import British from '../../assets/cat/british.jpg';
import Mainecoon from '../../assets/cat/mainecoon.jpg';
import Sphinx from '../../assets/cat/sphinx.jpg';

export const ResultData: IResult[] = [
  {
    id: 1,
    name: '러시안 블루',
    best: 'ESTJ',
    desc: '겁이 많아요. 워낙 온순한 성격에 조용한 고양이라 소심하게 느껴집니다! 낯을 심하게 가리는 편이에요.',
    image: `${Russianblue}`,
  },
  {
    id: 2,
    name: '샴',
    best: 'ESFP',
    desc: '대체적으로 온순하고 느긋한 성격이에요. 외로움을 잘 타며 질투심이 강해요. 수다스러운 성격입니다.',
    image: `${Siamese}`,
  },
  {
    id: 3,
    name: '페르시안',
    best: 'ENTJ',
    desc: '조용하고 성격도 순한 편이어서 개냥이가 되는 경우가 많습니다. 장모종이라 털이 굉장히 부드러워요.',
    image: `${Persian}`,
  },
  {
    id: 4,
    name: '뱅갈',
    best: 'INTP',
    desc: '활동력이 어마어마한 고양이에요. 그렇기 때문에 살이 잘 안찌는 고양이 중 하나입니다.',
    image: `${Bengal}`,
  },
  {
    id: 5,
    name: '터키쉬 앙고라',
    best: 'INTJ',
    desc: '우아한 장모종 고양이. 그러다보니 까질하고 성질이 조금 급해요. 잔머리가 많고 복수심도 많은 고양이!',
    image: `${Turkishangora}`,
  },
  {
    id: 6,
    name: '아비시니안',
    best: 'ISTJ',
    desc: '민첩하고 호기심 많고 똑똑한 고양이입니다. 굉장이 수다쟁이여서 집사가 부르면 대답도 잘 합니다.',
    image: `${Abyssinian}`,
  },
  {
    id: 7,
    name: '노르웨이 숲',
    best: 'ESTP',
    desc: '조용하고 사람을 매우 좋아하는 고양이 중 하나! 숲에서 살던 고양이라 본능적으로 사냥 놀이를 좋아합니다.',
    image: `${Norwegianforest}`,
  },
  {
    id: 8,
    name: '아메리칸 숏헤어',
    best: 'INFP',
    desc: '주인에 대한 호기심이 높고 애교가 굉장히 많아요. 다만 독점욕도 강합니다.',
    image: `${Ameshort}`,
  },
  {
    id: 9,
    name: '코리안 숏헤어',
    best: 'ISFP',
    desc: '많은 고양이의 혈통이 섞여있는 고양이에요! 대부분 활발하고 쾌활한 성격을 가지고 있습니다.',
    image: `${Korshort}`,
  },
  {
    id: 10,
    name: '엑죠틱',
    best: 'ISFJ',
    desc: '낯을 가리지 않고, 주인 옆에서 느긋하게 일상을 즐기는 고양이입니다.',
    image: `${Exotic}`,
  },
  {
    id: 11,
    name: '스코티쉬 폴드',
    best: 'ENFP',
    desc: '접힌 귀가 굉장히 귀여운 고양이! 착하고 느긋하며 울음소리가 작은 고양이입니다.',
    image: `${Scottishfold}`,
  },
  {
    id: 12,
    name: '먼치킨',
    best: 'INFJ',
    desc: '짧은 다리와 귀여운 외모를 가진 고양이에요! 호기심이 매우 많습니다.',
    image: `${Munchkin}`,
  },
  {
    id: 13,
    name: '렉돌',
    best: 'ESFJ',
    desc: '긴 털과 아주 예쁜 외모로 사랑받는 고양이! 봉제인형이라는 이름처럼 집사가 안으면 인형처럼 안겨있습니다.',
    image: `${Ragdoll}`,
  },
  {
    id: 14,
    name: '브리티쉬 숏헤어',
    best: 'ENTP',
    desc: '이름과 같이 영국 신사와 같은 고양이! 배려심이 깊고 매우 조용하고 인내심이 강한 고양이에요.',
    image: `${British}`,
  },
  {
    id: 15,
    name: '스핑크스',
    best: 'ISTP',
    desc: '유일하게 털이 없는 고양이입니다! 외모와는 다르게 고양이 중에서 가장 성격이 좋다고 합니다.',
    image: `${Sphinx}`,
  },
  {
    id: 16,
    name: '메인쿤',
    best: 'ENFJ',
    desc: '거인 신사라는 별명을 가진 고양이에요! 조용하고 온화한 성격을 가지고 있으며 매우 똑똑합니다.',
    image: `${Mainecoon}`,
  },
];
