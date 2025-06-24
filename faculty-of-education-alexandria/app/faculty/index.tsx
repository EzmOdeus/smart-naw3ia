import { Card } from '@/components/ui/Card';
import { Header } from '@/components/ui/Header';
import { SearchBar } from '@/components/ui/SearchBar';
import { Text } from '@/components/ui/Text';
import { Colors } from '@/constants/Colors';
import { Layout } from '@/constants/Layout';
import { facultyMembers } from '@/data/faculty';
import { useTranslation } from '@/hooks/useTranslation';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { FlatList,  StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const groupedFaculty = facultyMembers.reduce((groups, member) => {
  const title = member.title;
  if (!groups[title]) {
    groups[title] = [];
  }
  groups[title].push(member);
  return groups;
}, {} as Record<string, typeof facultyMembers>);

export default function FacultyScreen() {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredFaculty = facultyMembers.filter(
    (member) => 
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.specialization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.department.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleMemberPress = (id: string) => {
    router.push(`/faculty/${id}`);
  };

  const renderFacultyItem = ({
    item,
  }: {
    item: (typeof facultyMembers)[0];
  }) => (
    <Card style={styles.facultyCard} onPress={() => handleMemberPress(item.id)}>
      <View style={styles.facultyContent}>
        <View style={styles.facultyInfo}>
          <Text variant="subtitle" color="primary.500">
            {item.name}
          </Text>
          <Text variant="caption" color="gray.600">
            {item.title}
          </Text>
          <Text variant="caption" color="gray.600">
            {item.department}
          </Text>
          <Text
            variant="caption"
            color="secondary.600"
            style={styles.specialization}
          >
            {item.specialization}
          </Text>
        </View>
      </View>
    </Card>
  );

  const renderTitle = (title: string) => {
    let translationKey = '';
    switch (title) {
      case 'Professor':
        translationKey = 'faculty.professors';
        break;
      case 'Associate Professor':
        translationKey = 'faculty.associateProfessors';
        break;
      case 'Assistant Professor':
        translationKey = 'faculty.assistantProfessors';
        break;
      default:
        return title;
    }
    return t(translationKey);
  };

  const renderFacultyByTitle = () => {
    return Object.entries(groupedFaculty).map(([title, members]) => (
      <View key={title} style={styles.titleGroup}>
        <Text variant="h4" color="primary.500" style={styles.titleHeader}>
          {renderTitle(title)}
        </Text>
        {members.map((member) => (
          <Card
            key={member.id}
            style={styles.facultyCard}
            onPress={() => handleMemberPress(member.id)}
          >
            <View style={styles.facultyContent}>
             
              <View style={styles.facultyInfo}>
                <Text variant="subtitle" color="primary.500">{member.name}</Text>
                <Text variant="caption" color="gray.600">{member.department}</Text>
                <Text variant="caption" color="secondary.600" style={styles.specialization}>
                  {member.specialization}
                </Text>
              </View>
            </View>
          </Card>
        ))}
      </View>
    ));
  };

  return (
    <SafeAreaView style={styles.container} edges={['right', 'left', 'bottom']}>
      <Header
        title={t('faculty.title')}
        showBackButton
      />
      
      <View style={styles.searchContainer}>
        <SearchBar
          placeholder={t('common.search')}
          onSearch={setSearchQuery}
          defaultValue={searchQuery}
        />
      </View>
      
      <Text variant="subtitle" color="gray.600" style={styles.description}>
        {t('faculty.description')}
      </Text>
      
      {searchQuery ? (
        <FlatList
          data={filteredFaculty}
          renderItem={renderFacultyItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <FlatList
          data={[{ key: 'content' }]}
          renderItem={() => <View>{renderFacultyByTitle()}</View>}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      )}
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
    paddingBottom: 0,
  },
  description: {
    paddingHorizontal: Layout.spacing.m,
    paddingTop: Layout.spacing.m,
    paddingBottom: Layout.spacing.s,
  },
  listContent: {
    padding: Layout.spacing.m,
  },
  titleGroup: {
    marginBottom: Layout.spacing.l,
  },
  titleHeader: {
    marginBottom: Layout.spacing.m,
  },
  facultyCard: {
    marginBottom: Layout.spacing.m,
  },
  facultyContent: {
    flexDirection: 'row',
  },
  facultyImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  facultyInfo: {
    flex: 1,
    marginLeft: Layout.spacing.m,
    justifyContent: 'center',
  },
  specialization: {
    marginTop: Layout.spacing.xs,
  },
});