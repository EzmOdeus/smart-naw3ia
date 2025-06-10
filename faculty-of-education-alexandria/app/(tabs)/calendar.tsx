import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/Colors';
import { Layout } from '@/constants/Layout';
import { Header } from '@/components/ui/Header';
import { Text } from '@/components/ui/Text';
import { Card } from '@/components/ui/Card';
import { useTranslation } from '@/hooks/useTranslation';
import { events, Event } from '@/data/events';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function CalendarScreen() {
  const { t } = useTranslation();
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [activeType, setActiveType] = useState<string | null>(null);
  
  // Group events by date
  const eventsByDate = events.reduce((acc, event) => {
    if (!acc[event.date]) {
      acc[event.date] = [];
    }
    acc[event.date].push(event);
    return acc;
  }, {} as Record<string, Event[]>);
  
  // Get unique dates
  const dates = Object.keys(eventsByDate).sort();
  
  // Get unique event types
  const eventTypes = Array.from(new Set(events.map(event => event.type)));
  
  const filteredEvents = events.filter(event => {
    const matchesDate = selectedDate === null || event.date === selectedDate;
    const matchesType = activeType === null || event.type === activeType;
    return matchesDate && matchesType;
  });
  
  const handleDatePress = (date: string) => {
    setSelectedDate(selectedDate === date ? null : date);
  };
  
  const handleTypePress = (type: string) => {
    setActiveType(activeType === type ? null : type);
  };
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };
  
  const formatDay = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { day: '2-digit' });
  };
  
  const formatMonth = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short' });
  };
  
  const getEventTypeColor = (type: Event['type']) => {
    switch(type) {
      case 'academic': return Colors.primary;
      case 'cultural': return Colors.secondary;
      case 'workshop': return Colors.accent;
      case 'conference': return Colors.success;
      case 'exam': return Colors.error;
      case 'holiday': return Colors.warning;
      default: return Colors.gray;
    }
  };
  
  const renderDateItem = ({ item }: { item: string }) => {
    const isSelected = selectedDate === item;
    const dateObj = new Date(item);
    const isToday = new Date().toDateString() === dateObj.toDateString();
    
    return (
      <TouchableOpacity
        style={[
          styles.dateItem,
          isSelected && styles.selectedDate,
          isToday && styles.todayDate,
        ]}
        onPress={() => handleDatePress(item)}
      >
        <Text
          variant="caption"
          color={isSelected || isToday ? 'white' : 'gray.600'}
          align="center"
        >
          {formatMonth(item)}
        </Text>
        <Text
          variant="h4"
          color={isSelected || isToday ? 'white' : 'primary.500'}
          align="center"
        >
          {formatDay(item)}
        </Text>
      </TouchableOpacity>
    );
  };
  
  const renderEventItem = ({ item }: { item: Event }) => {
    const typeColor = getEventTypeColor(item.type);
    
    return (
      <Card style={styles.eventCard}>
        <View style={[styles.eventTag, { backgroundColor: typeColor[500] }]}>
          <Text variant="caption" color="white">
            {item.type}
          </Text>
        </View>

        <Text variant="subtitle" color="gray.800" style={styles.eventTitle}>
          {item.title}
        </Text>

        <Text variant="body" color="gray.600" style={styles.eventDescription}>
          {item.description}
        </Text>

        <View style={styles.eventDetails}>
          <View style={styles.eventDetailItem}>
            <AntDesign name="calendar" size={16} color={Colors.gray[500]} />
            <Text
              variant="caption"
              color="gray.500"
              style={styles.eventDetailText}
            >
              {formatDate(item.date)}
            </Text>
          </View>

          <View style={styles.eventDetailItem}>
            <AntDesign name="clockcircleo" size={16} color={Colors.gray[500]} />
            <Text
              variant="caption"
              color="gray.500"
              style={styles.eventDetailText}
            >
              {item.startTime} - {item.endTime}
            </Text>
          </View>

          <View style={styles.eventDetailItem}>
            <Entypo name="location-pin" size={16} color={Colors.gray[500]} />
            <Text
              variant="caption"
              color="gray.500"
              style={styles.eventDetailText}
            >
              {item.location}
            </Text>
          </View>
        </View>
      </Card>
    );
  };
  
  return (
    <SafeAreaView style={styles.container} edges={['right', 'left', 'bottom']}>
      <Header
        title={t('calendar.title')}
        showBackButton
      />
      
      <View style={styles.datesContainer}>
        <FlatList
          data={dates}
          renderItem={renderDateItem}
          keyExtractor={(item) => item}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.datesList}
        />
      </View>
      
      <View style={styles.typesContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.typesList}
        >
          <TouchableOpacity
            style={[
              styles.typeItem,
              activeType === null && styles.activeType,
            ]}
            onPress={() => handleTypePress('all')}
          >
            <Text
              variant="caption"
              color={activeType === null ? 'white' : 'primary.500'}
            >
              All
            </Text>
          </TouchableOpacity>
          
          {eventTypes.map((type) => (
            <TouchableOpacity
              key={type}
              style={[
                styles.typeItem,
                activeType === type && styles.activeType,
                { borderColor: getEventTypeColor(type as Event['type'])[500] }
              ]}
              onPress={() => handleTypePress(type)}
            >
              <Text
                variant="caption"
                color={activeType === type ? 'white' : getEventTypeColor(type as Event['type'])[500]}
              >
                {type}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      
      <FlatList
        data={filteredEvents}
        renderItem={renderEventItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.eventsList}
        showsVerticalScrollIndicator={false}
      />
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  datesContainer: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray[200],
  },
  datesList: {
    paddingVertical: Layout.spacing.m,
    paddingHorizontal: Layout.spacing.m,
  },
  dateItem: {
    width: 60,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Layout.spacing.m,
    borderRadius: Layout.borderRadius.m,
    backgroundColor: Colors.gray[100],
  },
  selectedDate: {
    backgroundColor: Colors.primary[500],
  },
  todayDate: {
    backgroundColor: Colors.secondary[500],
  },
  typesContainer: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray[200],
  },
  typesList: {
    flexDirection: 'row',
    paddingVertical: Layout.spacing.m,
    paddingHorizontal: Layout.spacing.m,
  },
  typeItem: {
    paddingVertical: Layout.spacing.xs,
    paddingHorizontal: Layout.spacing.m,
    marginRight: Layout.spacing.s,
    borderRadius: Layout.borderRadius.s,
    borderWidth: 1,
    borderColor: Colors.primary[500],
  },
  activeType: {
    backgroundColor: Colors.primary[500],
  },
  eventsList: {
    padding: Layout.spacing.m,
  },
  eventCard: {
    marginBottom: Layout.spacing.m,
  },
  eventTag: {
    alignSelf: 'flex-start',
    paddingVertical: 2,
    paddingHorizontal: Layout.spacing.s,
    borderRadius: Layout.borderRadius.s,
    marginBottom: Layout.spacing.s,
  },
  eventTitle: {
    marginBottom: Layout.spacing.s,
  },
  eventDescription: {
    marginBottom: Layout.spacing.m,
    lineHeight: 22,
  },
  eventDetails: {
    borderTopWidth: 1,
    borderTopColor: Colors.gray[200],
    paddingTop: Layout.spacing.m,
  },
  eventDetailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Layout.spacing.s,
  },
  eventDetailText: {
    marginLeft: Layout.spacing.s,
  },
});