import {StyleSheet, View, Text, Image} from 'react-native';
import image28 from '../../assets/images/image28.png';
import image26 from '../../assets/images/image26.png';
import theme from '../../theme';

export function ____() {
  return (
    <View style={styles.root}>
      <View style={styles.rectangle24}/>
      <View style={styles.group62}>
        <Text style={styles.____}>
          대외활동
        </Text>
        <Text style={styles.____2}>
          마감일자
        </Text>
        <Text style={styles.____3}>
          활동 소개
        </Text>
        <Text style={styles.______________}>
          여행 관광 그리고.. 코딩단 단원 모집
        </Text>
        <Text style={styles.$2021070720230723}>
          2021.07.07~2023.07.23
        </Text>
        <Text style={styles.___________}>
          신난다 재미난다 코딩코딩~~
        </Text>
        <Text style={styles.d7}>
          D-7
        </Text>
      </View>
      <View style={styles.rectangle28}/>
      <Image source={{uri: image28}} style={{width: 30, height: 30}} contentFit="cover"/>
      <Image source={{uri: image26}} style={{width: 362, height: 314}} contentFit="cover"/>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: 360,
    height: 640,
  },
  rectangle24: {
    width: 360,
    height: 624,
    flexShrink: 0,
    backgroundColor: '#FFF',
    boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
  },
  ____: {
    width: 75,
    height: 10.261,
    flexShrink: 0,
    color: '#5B5B5B',
    fontFamily: 'NanumGothic',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
  },
  ____2: {
    width: 75,
    height: 10.261,
    flexShrink: 0,
    color: '#5B5B5B',
    fontFamily: 'NanumGothic',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
  },
  ____3: {
    width: 75,
    height: 10.261,
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
    height: 10.261,
    flexShrink: 0,
    color: '#000',
    fontFamily: 'NanumGothic',
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
  },
  $2021070720230723: {
    width: 272,
    height: 10.261,
    flexShrink: 0,
    color: '#000',
    fontFamily: 'NanumGothic',
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
  },
  ___________: {
    width: 272,
    height: 10.261,
    flexShrink: 0,
    color: '#000',
    fontFamily: 'NanumGothic',
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
  },
  d7: {
    width: 36,
    height: 10.261,
    flexShrink: 0,
    color: '#0094A9',
    fontFamily: 'NanumGothic',
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
  },
  group62: {
    width: 330,
    height: 472,
    flexShrink: 0,
  },
  rectangle28: {
    width: 54,
    height: 22,
    flexShrink: 0,
    backgroundColor: 'rgba(0, 160, 162, 0.16)',
    borderRadius: 10,
  },
  image28: {
    width: 30,
    height: 30,
    flexShrink: 0,
  },
  image26: {
    width: 362,
    height: 314,
    flexShrink: 0,
  },
});
