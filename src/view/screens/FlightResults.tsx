import React, {useMemo} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ActivityIndicator, FlatList} from 'react-native';
import styled from 'styled-components/native';

import {Header, ResultsInfo} from '../components/FlightResults';
import {FlightStatusCard} from '../components/FlightResults';
import {useSearch} from '../../view-model/hooks/useSearch';
import {useFavorites} from 'src/view-model/hooks/useFavorites';

export const FlightResults = () => {
  const {top} = useSafeAreaInsets();
  const {flightSearch} = useSearch();
  const {isLoading, flightResults, departure, arrival} = flightSearch;
  const departureName = departure?.name || '';
  const arrivalName = arrival?.name || '';

  const {favorites} = useFavorites();
  const favoriteFlights = favorites;

  const isFlightFavorite = (flightId: any) => {
    return favoriteFlights.includes(flightId);
  };

  const sortedResults = useMemo(() => {
    return [...flightResults].sort((a, b) => {
      const isAFavorite = isFlightFavorite(a.segment.segmentCode);
      const isBFavorite = isFlightFavorite(b.segment.segmentCode);
      if (isAFavorite === isBFavorite) return 0;
      if (isAFavorite) return -1;
      return 1;
    });
  }, [flightResults, favoriteFlights]);

  return (
    <Container paddingTop={top}>
      <Header />
      <ResultsInfo
        details={`${departureName} to ${arrivalName}`}
        totalResults={flightResults.length}
        isLoading={isLoading}
      />

      {!isLoading ? (
        <ResultList
          data={sortedResults}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item.segment.segmentCode + index}
          renderItem={({item}) => (
            <FlightStatusCard
              item={item}
              isFavorite={isFlightFavorite(item.segment.segmentCode)}
            />
          )}
          ListFooterComponent={() => <Footer />}
        />
      ) : (
        <ActivityIndicator size="large" color="#000000" />
      )}
    </Container>
  );
};

const Container = styled.View<{paddingTop: number}>`
  flex: 1;
  padding-top: ${({paddingTop}) => paddingTop}px;
  padding-right: 5%;
  padding-left: 5%;
`;

const ResultList = styled.FlatList`
  flex: 1;
` as typeof FlatList;

const Footer = styled.View`
  height: 100px;
`;
