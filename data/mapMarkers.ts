export interface MapMarker {
  id: string;
  title: string;
  description: string;
  category: 'building' | 'facility' | 'parking';
  coordinate: {
    latitude: number;
    longitude: number;
  };
}

export const mapMarkers: MapMarker[] = [
  {
    id: 'building1',
    title: 'المبنى الرئيسي',
    description: 'المبنى الإداري الرئيسي ويضم مكتب العميد، شؤون الطلاب، وقاعات المحاضرات الرئيسية.',
    category: 'building',
    coordinate: {
      latitude: 31.208845,
      longitude: 29.909223,
    },
  },
  {
    id: 'building2',
    title: 'مبنى قسم التربية الفنية',
    description: 'يضم قسم التربية الفنية، الاستوديوهات، قاعات العرض، والفصول المتخصصة.',
    category: 'building',
    coordinate: {
      latitude: 31.209122,
      longitude: 29.908897,
    },
  },
  {
    id: 'building3',
    title: 'مبنى قسم التربية الموسيقية',
    description: 'يضم قسم التربية الموسيقية، غرف التدريب، وقاعات العروض الموسيقية.',
    category: 'building',
    coordinate: {
      latitude: 31.208612,
      longitude: 29.908992,
    },
  },
  {
    id: 'building4',
    title: 'مبنى الاقتصاد المنزلي',
    description: 'يضم معامل الاقتصاد المنزلي، المطابخ، معامل النسيج، والفصول الدراسية.',
    category: 'building',
    coordinate: {
      latitude: 31.208432,
      longitude: 29.909392,
    },
  },
  {
    id: 'building5',
    title: 'مركز تكنولوجيا التعليم',
    description: 'يضم معامل التكنولوجيا، الفصول الذكية، ومرافق البحث الرقمي.',
    category: 'building',
    coordinate: {
      latitude: 31.209003,
      longitude: 29.909587,
    },
  },
  {
    id: 'facility1',
    title: 'المكتبة المركزية',
    description: 'المكتبة الرئيسية للكلية وتضم مصادر أكاديمية، قاعات مطالعة، وأرشيف رقمي.',
    category: 'facility',
    coordinate: {
      latitude: 31.208732,
      longitude: 29.909112,
    },
  },
  {
    id: 'facility2',
    title: 'مركز الطلاب',
    description: 'مرافق وخدمات طلابية تشمل كافتيريا وقاعات أنشطة.',
    category: 'facility',
    coordinate: {
      latitude: 31.208922,
      longitude: 29.909345,
    },
  },
  {
    id: 'facility3',
    title: 'قاعة المؤتمرات',
    description: 'المكان الرئيسي لعقد المؤتمرات والندوات والفعاليات الكبرى.',
    category: 'facility',
    coordinate: {
      latitude: 31.208501,
      longitude: 29.909201,
    },
  },
  {
    id: 'parking1',
    title: 'موقف السيارات الرئيسي',
    description: 'موقف السيارات الرئيسي لأعضاء هيئة التدريس والزوار.',
    category: 'parking',
    coordinate: {
      latitude: 31.209245,
      longitude: 29.909523,
    },
  },
  {
    id: 'parking2',
    title: 'موقف الطلاب',
    description: 'موقف مخصص لسيارات الطلاب.',
    category: 'parking',
    coordinate: {
      latitude: 31.208346,
      longitude: 29.908745,
    },
  },
];