import {StyleSheet, View, Text, Image} from 'react-native';
import image23 from '../../assets/images/image23.png';
import theme from '../../theme';

export function ____() {
  return (
    <View style={styles.root}>
      <Text style={styles.hi000_____}>
        Hi, 000 수정이🔮
      </Text>
      <View style={styles.rectangle24}/>
      <Text style={styles._______}>
        오늘의 추천 활동
      </Text>
      <View style={styles.rectangle30}/>
      <Text style={styles._______2}>
        포트폴리오 
        관리
      </Text>
      <View style={styles.rectangle31}/>
      <View style={styles.rectangle32}/>
      <Text style={styles.______}>
        교내활동
        조회
      </Text>
      <Text style={styles.______2}>
        대외활동
        조회
      </Text>
      <View style={styles.rectangle1}/>
      <View style={styles.group61}>
        <Text style={styles.____}>
          대외활동
        </Text>
        <Text style={styles.d7}>
          D-7
        </Text>
        <Text style={styles.______________}>
          여행 관광 그리고.. 코딩단 단원 모집
        </Text>
      </View>
      <Image source={{uri: image23}} style={{width: 52, height: 52}} contentFit="cover"/>
      <View style={styles.rectangle33}/>
      <Text style={styles.chatBot}>
        chat
        bot
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: 360,
    height: 640,
  },
  hi000_____: {
    color: '#FFF',
    fontFamily: 'NanumGothic',
    fontSize: 30,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
  },
  rectangle24: {
    width: 360,
    height: 550,
    flexShrink: 0,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    backgroundColor: '#FFF',
    boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
  },
  _______: {
    width: 146,
    height: 33,
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: '#000',
    fontFamily: 'NanumGothic',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
  },
  rectangle30: {
    width: 146,
    height: 214,
    flexShrink: 0,
    backgroundColor: '#CCA1FF',
    borderRadius: 10,
  },
  _______2: {
    width: 272,
    height: 12,
    flexShrink: 0,
    color: '#FFF',
    fontFamily: 'NanumGothic',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
  },
  rectangle31: {
    width: 160,
    height: 97,
    flexShrink: 0,
    backgroundColor: '#DAD2DE',
    borderRadius: 10,
  },
  rectangle32: {
    width: 160,
    height: 97,
    flexShrink: 0,
    borderWidth: 1,
    borderColor: '#6A6FB3',
    borderStyle: 'solid',
    borderRadius: 10,
  },
  ______: {
    width: 272,
    height: 37,
    flexShrink: 0,
    color: '#000',
    fontFamily: 'NanumGothic',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
  },
  ______2: {
    width: 272,
    height: 37,
    flexShrink: 0,
    color: '#000',
    fontFamily: 'NanumGothic',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
  },
  rectangle1: {
    width: 319,
    height: 78,
    flexShrink: 0,
    backgroundColor: '#F9EEFA',
    borderRadius: 10,
  },
  ____: {
    width: 75,
    height: 12,
    flexShrink: 0,
    color: '#5B5B5B',
    fontFamily: 'NanumGothic',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
  },
  d7: {
    width: 75,
    height: 12,
    flexShrink: 0,
    color: '#5B5B5B',
    fontFamily: 'NanumGothic',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
  },
  ______________: {
    width: 272,
    height: 12,
    flexShrink: 0,
    color: '#000',
    fontFamily: 'NanumGothic',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
  },
  group61: {
    width: 320,
    height: 37,
    flexShrink: 0,
  },
  image23: {
    width: 52,
    height: 52,
    flexShrink: 0,
  },
  rectangle33: {
    width: 133,
    height: 59,
    flexShrink: 0,
    backgroundColor: '#CCA1FF',
    borderRadius: 20,
  },
  chatBot: {
    width: 272,
    height: 37,
    flexShrink: 0,
    color: '#FFF',
    fontFamily: 'NanumGothic',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
  },
});
