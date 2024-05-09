import {Animated} from 'react-native';
import styled from 'styled-components/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {useFadeIn} from '../hooks/useFadeIn';
import {
  DetailsTable,
  FlightInfo,
  TimerStatus,
  BackButton,
} from '../components/FlightDetails';

export const FlightDetails = () => {
  const {fadeIn, opacity} = useFadeIn();
  const {bottom} = useSafeAreaInsets();

  return (
    <Container>
      <Image
        source={{
          uri: 'https://s3-alpha-sig.figma.com/img/6999/5ac1/5c32d800b7f87760fab16801c4a62e6d?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e7E0450ivCQoKomXJj3JP9v4rufn1E6eNhDZdoGHYWAkb5Kgy2~oHqfkaEd-NrjS1cMmMgNigovUd5RJ5JnuZnb5h6XejMTawEaBmoK7SRh7pdlc0E5-DEppoGzL1Ndwz0AKGv0kUxdHNokzBlsfzTmVSnqJgaruUe17KGX0moyY4krbUsHeJRK7tqDoFWxvbXkpdwD0fGBrLMWeKWG-mS9cEvt~UzgE0swieAAf8wcsXB5xDuifmb6THuj6N7D6LUzlLqOYr9Dxg7huosR0kbPGYq5fqZqXHbux9Ig8DEHbPRvkNSFXLOlpreMoWRWjF58vGZJ7CZtRNLDydGcN2w__',
        }}
        onLoadEnd={() => fadeIn()}
        style={{opacity}}
      />

      <DetailsContainer pb={bottom}>
        <Line />
        <FlightInfo />
        <TimerStatus />
        <DetailsTable />
      </DetailsContainer>

      <BackButton />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const Image = styled(Animated.Image)`
  height: 600px;
  width: 600px;
  top: -104px;
  left: -22px;
  position: absolute;
`;

const DetailsContainer = styled.View<{pb: number}>`
  background-color: #ffffff;
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
  position: absolute;
  bottom: 0px;
  width: 100%;
  padding-bottom: ${({pb}) => pb + 58}px;
`;

const Line = styled.View`
  height: 5px;
  width: 36px;
  background-color: #cccccc;
  border-radius: 2.5px;
  align-self: center;
  top: 10px;
  position: absolute;
`;
