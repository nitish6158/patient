import {Dimensions, PixelRatio} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

let screenWidth: number = Dimensions.get('window').width;

let screenHeight: number = Dimensions.get('window').height;

const guidelineBaseWidth = 393;
const guidelineBaseHeight = 852;

const Wp = (widthPercent: string | number): number => {
  const elemWidth: number =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);

  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

const Hp = (heightPercent: string | number): number => {
  const elemHeight: number =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent);

  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

const listenOrientationChange = (that: React.Component): void => {
  Dimensions.addEventListener(
    'change',
    (newDimensions: {window: {width: number; height: number}}) => {
      screenWidth = newDimensions.window.width;
      screenHeight = newDimensions.window.height;

      that.setState({
        orientation: screenWidth < screenHeight ? 'portrait' : 'landscape',
      });
    },
  );
};

// const removeOrientationListener = (): void => {
//   Dimensions.removeEventListener('change', () => {});
// };

const horizontalScale = (size: number) =>
  (screenWidth / guidelineBaseWidth) * size;

const verticalScale = (size: number) =>
  (screenHeight / guidelineBaseHeight) * size;

const radiusScale = (size: number, factor: number = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

const horizontalMarginScale = (size: number, factor: number = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

const verticalMarginScale = (size: number, factor: number = 0.5) =>
  size + (verticalScale(size) - size) * factor;

const fontScale = (percent: number) => {
  return RFValue(percent, guidelineBaseHeight);
};

export {
  Wp,
  Hp,
  listenOrientationChange,
  // removeOrientationListener,
  screenHeight,
  screenWidth,
  horizontalScale,
  verticalScale,
  radiusScale,
  horizontalMarginScale,
  verticalMarginScale,
  fontScale,
};
