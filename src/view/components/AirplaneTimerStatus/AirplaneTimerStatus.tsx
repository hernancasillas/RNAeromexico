import React from 'react';
import styled from 'styled-components/native';
import {AirplaneLine} from './AirplaneLine';
import {View} from 'react-native';
import {DateService} from '../../../view-model/classes/DateService';
import {fontBold, fontRegular} from '../../../model/constants/fonts';

type Props = {
  arrivalDate: Date;
  arrivalPlace: string;
  departureDate: Date;
  departurePlace: string;
  flightTime: number;
  hideDuration?: boolean;
  status: string;
};

export const AirplaneTimerStatus = ({
  arrivalDate,
  arrivalPlace,
  departureDate,
  departurePlace,
  flightTime,
  hideDuration,
}: Props) => {
  const departureTime = new DateService(departureDate).displayTime();
  const arrivalTime = new DateService(arrivalDate).displayTime();

  const duration = DateService.timeRemaining(flightTime);

  return (
    <View>
      <Header>
        <HourHand>{departureTime}</HourHand>
        <AirplaneLine />
        <HourHand>{arrivalTime}</HourHand>
      </Header>

      <Body>
        <Place>{departurePlace}</Place>
        <DurationContainer>
          {!hideDuration && <Duration>{duration}</Duration>}
        </DurationContainer>
        <Place>{arrivalPlace}</Place>
      </Body>
    </View>
  );
};

const Header = styled.View`
  flex-direction: row;
`;

const Body = styled.View`
  flex-direction: row;
`;

const HourHand = styled.Text`
  font-size: 20px;
  color: #000000;
  line-height: 22px;
  font-family: ${fontBold};
`;

const Place = styled.Text`
  font-size: 14px;
  color: #000000;
  font-family: ${fontRegular};
`;

const DurationContainer = styled.View`
  flex: 1;
  /* align-items: center; */
`;

const Duration = styled.Text`
  font-size: 10px;
  color: rgba(0, 0, 0, 0.4);
  font-family: Garnett-Bold;
  flex: 1;
  text-align: center;
  margin-top: 4px;
`;
