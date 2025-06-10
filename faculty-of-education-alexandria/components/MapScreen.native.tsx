import React, { useState, useRef } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { View, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/Colors';
import { Layout } from '@/constants/Layout';
import { Header } from '@/components/ui/Header';
import { SearchBar } from '@/components/ui/SearchBar';
import { Text } from '@/components/ui/Text';
import { Card } from '@/components/ui/Card';
import { useTranslation } from '@/hooks/useTranslation';
import { mapMarkers, MapMarker } from '@/data/mapMarkers';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.005;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default function MapScreen() {
  const { t } = useTranslation();
  const mapRef = useRef<any>(null);
  const [selectedMarker, setSelectedMarker] = useState<MapMarker | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  
  const initialRegion = {
    latitude: 31.208845,
    longitude: 29.909223,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  };

  const filteredMarkers = mapMarkers.filter(marker => {
    const matchesSearch = searchQuery === '' || 
      marker.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      marker.description.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesFilter = activeFilter === null || marker.category === activeFilter;
    
    return matchesSearch && matchesFilter;
  });

  const handleMarkerPress = (marker: MapMarker) => {
    setSelectedMarker(marker);
    
    if (mapRef.current) {
      (mapRef.current as any).animateToRegion({
        latitude: marker.coordinate.latitude,
        longitude: marker.coordinate.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      });
    }
  };

  const handleFilterPress = (filter: string | null) => {
    setActiveFilter(activeFilter === filter ? null : filter);
  };

  const getMarkerColor = (category: string) => {
    switch (category) {
      case 'building': return Colors.primary[500];
      case 'facility': return Colors.secondary[500];
      default: return Colors.gray[500];
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['right', 'left', 'bottom']}>
      <Header title={t('map.title')} showBackButton />

      <View style={styles.searchContainer}>
        <SearchBar
          placeholder={t('map.search')}
          onSearch={setSearchQuery}
          defaultValue={searchQuery}
        />
      </View>
<ScrollView  showsVerticalScrollIndicator={false}>
      <View style={styles.filtersContainer}>
        <TouchableOpacity
          style={[
            styles.filterButton,
            activeFilter === null && styles.activeFilter,
          ]}
          onPress={() => handleFilterPress(null)}
        >
          <FontAwesome
            name="map-marker"
            size={18}
            color={activeFilter === null ? Colors.white : Colors.primary[500]}
          />
          <Text
            variant="caption"
            color={activeFilter === null ? 'white' : 'primary.500'}
            style={styles.filterText}
          >
            All
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.filterButton,
            activeFilter === 'building' && styles.activeFilter,
          ]}
          onPress={() => handleFilterPress('building')}
        >
          <FontAwesome
            name="building-o"
            size={18}
            color={
              activeFilter === 'building' ? Colors.white : Colors.primary[500]
            }
          />
          <Text
            variant="caption"
            color={activeFilter === 'building' ? 'white' : 'primary.500'}
            style={styles.filterText}
          >
            {t('map.buildings')}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.filterButton,
            activeFilter === 'facility' && styles.activeFilter,
          ]}
          onPress={() => handleFilterPress('facility')}
        >
          <Feather
            name="package"
            size={18}
            color={
              activeFilter === 'facility' ? Colors.white : Colors.primary[500]
            }
          />
          <Text
            variant="caption"
            color={activeFilter === 'facility' ? 'white' : 'primary.500'}
            style={styles.filterText}
          >
            {t('map.facilities')}
          </Text>
        </TouchableOpacity>

       
      </View>

      <View style={styles.mapContainer}>
        <MapView
          ref={mapRef}
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={initialRegion}
          showsUserLocation
          showsCompass
          showsScale
          showsBuildings
        >
          {filteredMarkers.map((marker: MapMarker) => (
            <Marker
              key={marker.id}
              coordinate={marker.coordinate}
              title={marker.title}
              description={marker.description}
              pinColor={getMarkerColor(marker.category)}
              onPress={() => handleMarkerPress(marker)}
            />
          ))}
        </MapView>
      </View>

      {selectedMarker && (
        <Card style={styles.markerInfoCard}>
          <View style={styles.markerInfoHeader}>
            <Text variant="subtitle" color="primary.500">
              {selectedMarker.title}
            </Text>
            <View
              style={[
                styles.categoryBadge,
                { backgroundColor: getMarkerColor(selectedMarker.category) },
              ]}
            >
              <Text variant="caption" color="white">
                {selectedMarker.category}
              </Text>
            </View>
          </View>
          <Text
            variant="body"
            color="gray.700"
            style={styles.markerDescription}
          >
            {selectedMarker.description}
          </Text>
        </Card>
      )}

      <View style={styles.locationsList}>
        <Text
          variant="subtitle"
          color="primary.500"
          style={styles.locationsHeader}
        >
          {filteredMarkers.length} {t('map.buildings')} & {t('map.facilities')}
        </Text>

        {filteredMarkers.map((marker) => (
          <TouchableOpacity
            key={marker.id}
            style={styles.locationItem}
            onPress={() => handleMarkerPress(marker)}
          >
            <View
              style={[
                styles.locationIndicator,
                { backgroundColor: getMarkerColor(marker.category) },
              ]}
            />
            <View style={styles.locationInfo}>
              <Text variant="subtitle" color="gray.800">
                {marker.title}
              </Text>
              <Text variant="caption" color="gray.600" numberOfLines={1}>
                {marker.description}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  searchContainer: {
    padding: Layout.spacing.m,
    paddingBottom: Layout.spacing.s,
  },
  filtersContainer: {
    flexDirection: 'row',
    paddingHorizontal: Layout.spacing.m,
    paddingBottom: Layout.spacing.m,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Layout.spacing.xs,
    paddingHorizontal: Layout.spacing.m,
    borderRadius: Layout.borderRadius.s,
    marginRight: Layout.spacing.s,
    borderWidth: 1,
    borderColor: Colors.primary[500],
  },
  activeFilter: {
    backgroundColor: Colors.primary[500],
  },
  filterText: {
    marginLeft: Layout.spacing.xs,
  },
  mapContainer: {
    height: 300,
    width: '100%',
    backgroundColor: Colors.gray[100],
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  markerInfoCard: {
    margin: Layout.spacing.m,
    marginBottom: 0,
  },
  markerInfoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Layout.spacing.s,
  },
  categoryBadge: {
    paddingVertical: 2,
    paddingHorizontal: Layout.spacing.s,
    borderRadius: Layout.borderRadius.s,
  },
  markerDescription: {
    lineHeight: 22,
  },
  locationsList: {
    flex: 1,
    padding: Layout.spacing.m,
  },
  locationsHeader: {
    marginBottom: Layout.spacing.m,
  },
  locationItem: {
    flexDirection: 'row',
    marginBottom: Layout.spacing.m,
    alignItems: 'center',
  },
  locationIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: Layout.spacing.m,
  },
  locationInfo: {
    flex: 1,
  },
}); 