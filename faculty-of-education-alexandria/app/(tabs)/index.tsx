import { FeaturedDepartments } from '@/components/home/FeaturedDepartments';
import { Hero } from '@/components/home/Hero';
import { LatestNews } from '@/components/home/LatestNews';
import { QuickLinks } from '@/components/home/QuickLinks';
import { Header } from '@/components/ui/Header';
import { SearchBar } from '@/components/ui/SearchBar';
import { Text } from '@/components/ui/Text';
import { Colors } from '@/constants/Colors';
import { Layout } from '@/constants/Layout';
import { Department, departments } from '@/data/departments';
import { facultyMembers, FullFacultyMember } from '@/data/faculty';
import { news, NewsItem } from '@/data/news';
import { useTranslation } from '@/hooks/useTranslation';
import { Cairo_400Regular } from '@expo-google-fonts/cairo';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { FlatList, Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ChatbotModal from '../../components/ChatbotModal';

const GEMINI_API_KEY = 'AIzaSyCWaKLjvd_8ZWt3dgnGXggnxk-WkqTQMso';
if (!GEMINI_API_KEY) {
  console.warn(
    'App.tsx: Gemini API Key is missing from @env. Chatbot functionality might be limited or disabled.'
  );
}

export default  function HomeScreen({ onLanguageChange }: { onLanguageChange?: () => void }) {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const { t } = useTranslation();
  const router = useRouter();
  const [, setSearchText] = useState('');
  const [suggestions, setSuggestions] = useState<{
    departments: Department[];
    news: NewsItem[];
    faculty: FullFacultyMember[];
  }>({ departments: [], news: [], faculty: [] });
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const suggestionsList = [
    ...suggestions.departments.map((dep) => ({
      type: 'department',
      value: dep,
    })),
    ...suggestions.news.map((item) => ({ type: 'news', value: item })),
    ...suggestions.faculty.map((member) => ({
      type: 'faculty',
      value: member,
    })),
  ];

  const handleSearch = (text: string) => {
    setSearchText(text);
    if (!text) {
      setSuggestions({ departments: [], news: [], faculty: [] });
      return;
    }
    // Filter departments
    const filteredDepartments = departments.filter(
      (dep) =>
        dep.name.toLowerCase().includes(text.toLowerCase()) ||
        dep.description.toLowerCase().includes(text.toLowerCase())
    );
    // Filter news
    const filteredNews = news.filter(
      (item) =>
        item.title.toLowerCase().includes(text.toLowerCase()) ||
        item.summary.toLowerCase().includes(text.toLowerCase())
    );
    // Filter faculty
    const filteredFaculty = facultyMembers.filter(
      (member) =>
        member.name.toLowerCase().includes(text.toLowerCase()) ||
        member.specialization.toLowerCase().includes(text.toLowerCase()) ||
        member.department.toLowerCase().includes(text.toLowerCase())
    );
    setSuggestions({
      departments: filteredDepartments,
      news: filteredNews,
      faculty: filteredFaculty,
    });
  };

  const handleFacultyPress = (member: FullFacultyMember) => {
    setSearchText(member.name);
    setSuggestions({ departments: [], news: [], faculty: [] });
    router.push(`/faculty/${member.id}`);
  };

  // Keyboard navigation for web
  const handleKeyDown = (e: any) => {
    if (suggestionsList.length === 0) return;
    if (e.key === 'ArrowDown') {
      setHighlightedIndex((i) => Math.min(i + 1, suggestionsList.length - 1));
      e.preventDefault();
    } else if (e.key === 'ArrowUp') {
      setHighlightedIndex((i) => Math.max(i - 1, 0));
      e.preventDefault();
    } else if (e.key === 'Enter' && highlightedIndex >= 0) {
      const item = suggestionsList[highlightedIndex];

      if (item.type === 'faculty') {
        handleFacultyPress(item.value as FullFacultyMember);
      }
      e.preventDefault();
    }
  };

  // Reset highlight when suggestions change
  useEffect(() => {
    setHighlightedIndex(suggestionsList.length > 0 ? 0 : -1);
  }, [
    suggestions.departments,
    suggestions.news,
    suggestions.faculty,
    suggestionsList.length,
  ]);

  return (
    <View style={styles.container}>
      <SafeAreaView edges={['right', 'left']} style={styles.header}>
        <Header/>
      </SafeAreaView>
      <FlatList
        data={[1]}
        renderItem={() => (
          <>
            <Hero />
            <View style={styles.searchContainer}>
              <SearchBar
                placeholder={t('common.search')}
                style={styles.searchBar}
                onSearch={handleSearch}
                onKeyDown={Platform.OS === 'web' ? handleKeyDown : undefined}
              />
              {suggestions.departments.length > 0 ||
              suggestions.news.length > 0 ||
              suggestions.faculty.length > 0 ? (
                <View style={styles.suggestionsContainer}>
                  {/* {suggestions.departments.length > 0 && (
                    <Text variant="subtitle" style={styles.suggestionHeader}>{t('departments.title')}</Text>
                  )} */}
                  {/* {suggestions.departments.map((dep, i) => (
                    <Text
                      key={dep.id}
                      variant="body"
                      style={[
                        styles.suggestionItem,
                        highlightedIndex === suggestionsList.findIndex(s => s.type === 'department' && s.value.id === dep.id) && styles.suggestionItemHighlighted
                      ]}
                      onPress={() => handleDepartmentPress(dep)}
                    >
                      {dep.name}
                    </Text>
                  ))}
                  {suggestions.news.length > 0 && (
                    <Text variant="subtitle" style={styles.suggestionHeader}>{t('news.title')}</Text>
                  )}
                  {suggestions.news.map((item, i) => (
                    <Text
                      key={item.id}
                      variant="body"
                      style={[
                        styles.suggestionItem,
                        highlightedIndex === suggestionsList.findIndex(s => s.type === 'news' && s.value.id === item.id) && styles.suggestionItemHighlighted
                      ]}
                      onPress={() => handleNewsPress(item)}
                    >
                      {item.title}
                    </Text>
                  ))} */}
                  {suggestions.faculty.length > 0 && (
                    <Text variant="subtitle" style={styles.suggestionHeader}>
                      {t('faculty.title')}
                    </Text>
                  )}
                  {suggestions.faculty.map((member, i) => (
                    <Text
                      key={member.id}
                      variant="body"
                      style={[
                        styles.suggestionItem,
                        highlightedIndex ===
                          suggestionsList.findIndex(
                            (s) =>
                              s.type === 'faculty' && s.value.id === member.id
                          ) && styles.suggestionItemHighlighted,
                      ]}
                      onPress={() => handleFacultyPress(member)}
                    >
                      {member.name}
                    </Text>
                  ))}
                </View>
              ) : null}
            </View>
            <FeaturedDepartments departments={departments} />
            <LatestNews news={news} />
            <QuickLinks />
            <View style={styles.footer} />
          </>
        )}
        keyExtractor={() => 'main'}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      />
      {/* زر عائم ومدور لفتح شات المساعدة */}
      {!GEMINI_API_KEY && (
        <Text style={styles.warningText}>
          تحذير: لم يتم تكوين مفتاح Gemini API. الشات بوت قد لا يعمل بشكل صحيح.
          يرجى مراجعة ملف .env وإعدادات المشروع.
        </Text>
      )}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => setModalVisible(true)}
        activeOpacity={0.8}
        disabled={!GEMINI_API_KEY}
      >
        <Text style={styles.fabText}>💬</Text>
      </TouchableOpacity>
      <ChatbotModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: 32,
    right: 24,
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: Colors.primary[500] || '#6366F1',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
    zIndex: 100,
    borderWidth: 2,
    borderColor: Colors.white,
  },
  fabText: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    fontFamily: `${Cairo_400Regular}`,
  },
  header: {
    backgroundColor: Colors.white,
    ...Platform.select({
      ios: {
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 4,
      },
      web: {
        boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.1)',
      },
    }),
  },

  scrollContent: {
    paddingBottom: Layout.spacing.xxl,
  },
  searchContainer: {
    marginTop: -Layout.spacing.l,
    marginHorizontal: Layout.spacing.m,
    marginBottom: Layout.spacing.m,
    zIndex: 1,
  },
  searchBar: {
    ...Platform.select({
      ios: {
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 4,
      },
      web: {
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      },
    }),
    backgroundColor: Colors.white,
  },
  footer: {
    height: Layout.spacing.l,
  },
  suggestionsContainer: {
    backgroundColor: Colors.white,
    borderRadius: Layout.borderRadius.m,
    marginTop: 4,
    shadowColor: Colors.black,
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    zIndex: 10,
  },
  suggestionItem: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray[100],
    ...Platform.select({ web: { cursor: 'pointer' } }),
  },
  suggestionHeader: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: Colors.gray[50],
    color: Colors.primary[500],
    fontWeight: 'bold',
  },
  suggestionItemHighlighted: {
    backgroundColor: Colors.primary[50],
    color: Colors.primary[700],
  },
  warningText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 15,
    fontSize: 14,
    paddingHorizontal: 10,
  },
});