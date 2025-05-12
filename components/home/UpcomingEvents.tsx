import React, { useMemo } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { Layout } from '../../constants/Layout';
import { Text } from '../ui/Text';
import { Card } from '../ui/Card';
import { useTranslation } from '../../hooks/useTranslation';
import { Event } from '../../data/events';
import { Calendar, Clock } from 'lucide-react-native';

interface UpcomingEventsProps {
  events: Event[];
}

export function UpcomingEvents({ events }: UpcomingEventsProps) {
  const { t } = useTranslation();
  
  const upcomingEvents = useMemo(() => {
    const today = new Date();
    return events
      .filter(event => new Date(event.date) >= today)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .slice(0, 5);
  }, [events]);

  const handleSeeAll = () => {
    router.push('/calendar');
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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });
  };

  const renderEventItem = ({ item }: { item: Event }) => {
    const typeColor = getEventTypeColor(item.type);
    
    return (
      <Card style={styles.eventCard}>
        <View style={[styles.eventIndicator, { backgroundColor: typeColor[500] }]} />
        <View style={styles.eventContent}>
          <Text variant="subtitle" color="gray.800" numberOfLines={2} style={styles.eventTitle}>
            {item.title}
          </Text>
          
          <View style={styles.eventDetails}>
            <View style={styles.eventDetailItem}>
              <Calendar size={16} color={Colors.gray[500]} />
              <Text variant="caption" color="gray.600" style={styles.eventDetailText}>
                {formatDate(item.date)}
              </Text>
            </View>
            
            <View style={styles.eventDetailItem}>
              <Clock size={16} color={Colors.gray[500]} />
              <Text variant="caption" color="gray.600" style={styles.eventDetailText}>
                {item.startTime} - {item.endTime}
              </Text>
            </View>
          </View>
          
          <Text variant="caption" color="gray.500" style={styles.eventLocation} numberOfLines={1}>
            {item.location}
          </Text>
        </View>
      </Card>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text variant="h3" color="primary.500">
          {t('home.upcomingEvents')}
        </Text>
        <TouchableOpacity onPress={handleSeeAll}>
          <Text variant="subtitle" color="secondary.500">
            {t('common.seeAll')}
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={upcomingEvents}
        renderItem={renderEventItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: Layout.spacing.l,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Layout.spacing.m,
    paddingHorizontal: Layout.spacing.m,
  },
  listContent: {
    paddingHorizontal: Layout.spacing.m,
    paddingBottom: Layout.spacing.s,
  },
  eventCard: {
    marginBottom: Layout.spacing.m,
    flexDirection: 'row',
    padding: Layout.spacing.m,
  },
  eventIndicator: {
    width: 4,
    borderRadius: 2,
    marginRight: Layout.spacing.m,
  },
  eventContent: {
    flex: 1,
  },
  eventTitle: {
    marginBottom: Layout.spacing.s,
  },
  eventDetails: {
    flexDirection: 'row',
    marginBottom: Layout.spacing.s,
  },
  eventDetailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: Layout.spacing.l,
  },
  eventDetailText: {
    marginLeft: Layout.spacing.xs,
  },
  eventLocation: {
    marginTop: Layout.spacing.xs,
  },
});