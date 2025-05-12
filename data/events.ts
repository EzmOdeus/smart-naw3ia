export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  type: 'academic' | 'cultural' | 'workshop' | 'conference' | 'exam' | 'holiday';
}

export const events: Event[] = [
  {
    id: 'event001',
    title: 'بدء تسجيل الفصل الدراسي الأول',
    description: 'فترة تسجيل الطلاب للفصل الدراسي الأول للعام الجامعي 2023-2024.',
    date: '2023-09-05',
    startTime: '09:00',
    endTime: '16:00',
    location: 'إدارة شؤون الطلاب',
    type: 'academic',
  },
  {
    id: 'event002',
    title: 'استقبال الطلاب الجدد',
    description: 'فعالية ترحيبية للطلاب الجدد تتضمن جولة تعريفية ومحاضرات توجيهية وأنشطة ترفيهية.',
    date: '2023-09-10',
    startTime: '10:00',
    endTime: '15:00',
    location: 'المدرج الرئيسي',
    type: 'academic',
  },
  {
    id: 'event003',
    title: 'بداية الدراسة للفصل الأول',
    description: 'انطلاق الدراسة للفصل الدراسي الأول بجميع الأقسام.',
    date: '2023-09-15',
    startTime: '08:00',
    endTime: '17:00',
    location: 'جميع مباني الكلية',
    type: 'academic',
  },
  {
    id: 'event004',
    title: 'مؤتمر الفنون السنوي',
    description: 'مؤتمر سنوي يستضيف متحدثين من مصر وخارجها لمناقشة مستجدات التربية الفنية.',
    date: '2023-10-20',
    startTime: '09:00',
    endTime: '18:00',
    location: 'قاعة المؤتمرات',
    type: 'conference',
  },
  {
    id: 'event005',
    title: 'امتحانات منتصف الفصل',
    description: 'فترة امتحانات منتصف الفصل الدراسي لجميع الأقسام.',
    date: '2023-11-01',
    startTime: '09:00',
    endTime: '17:00',
    location: 'قاعات الامتحانات',
    type: 'exam',
  },
  {
    id: 'event006',
    title: 'الحفل الموسيقي السنوي',
    description: 'عرض موسيقي لطلاب قسم التربية الموسيقية.',
    date: '2023-11-15',
    startTime: '18:00',
    endTime: '20:30',
    location: 'قاعة الموسيقى',
    type: 'cultural',
  },
  {
    id: 'event007',
    title: 'إجازة منتصف العام',
    description: 'إجازة رسمية لجميع الطلاب وأعضاء هيئة التدريس.',
    date: '2023-12-25',
    startTime: '00:00',
    endTime: '23:59',
    location: 'جميع مباني الكلية',
    type: 'holiday',
  },
  {
    id: 'event008',
    title: 'ورشة الابتكار في تكنولوجيا التعليم',
    description: 'ورشة عمل تطبيقية حول أحدث أدوات تكنولوجيا التعليم.',
    date: '2024-01-10',
    startTime: '10:00',
    endTime: '15:00',
    location: 'معمل التكنولوجيا',
    type: 'workshop',
  },
  {
    id: 'event009',
    title: 'امتحانات نهاية الفصل',
    description: 'امتحانات نهاية الفصل الدراسي الأول.',
    date: '2024-01-15',
    startTime: '09:00',
    endTime: '17:00',
    location: 'قاعات الامتحانات',
    type: 'exam',
  },
  {
    id: 'event010',
    title: 'بدء تسجيل الفصل الدراسي الثاني',
    description: 'فترة تسجيل الطلاب للفصل الدراسي الثاني للعام الجامعي 2023-2024.',
    date: '2024-02-01',
    startTime: '09:00',
    endTime: '16:00',
    location: 'إدارة شؤون الطلاب',
    type: 'academic',
  },
];