export interface MapMarker {
  id: string;
  title: string;
  description: string;
  category: 'building' | 'facility' ;
  coordinate: {
    latitude: number;
    longitude: number;
  };
}

export const mapMarkers: MapMarker[] = [
  {
    id: 'building1',
    title: 'المبنى الرئيسي',
    description:
      'المبنى الإداري الرئيسي ويضم مكتب العميد، شؤون الطلاب، وقاعات المحاضرات الرئيسية.',
    category: 'building',
    coordinate: {
      latitude: 31.222369934660955,
      longitude: 29.947120790990667,
    },
  },
  {
    id: 'building2',
    title: 'مبنى قسم التربية الفنية',
    description:
      'يضم قسم التربية الفنية، الاستوديوهات، قاعات العرض، والفصول المتخصصة.',
    category: 'building',
    coordinate: {
      latitude: 31.222369934660955,
      longitude: 29.947120790990667,
    },
  },
  {
    id: 'building3',
    title: 'مبنى قسم التربية الموسيقية',
    description:
      'يضم قسم التربية الموسيقية، غرف التدريب، وقاعات العروض الموسيقية.',
    category: 'building',
    coordinate: {
      latitude: 31.216002245895258,
      longitude: 29.9753309710477,
    },
  },
  {
    id: 'building4',
    title: 'مبنى الاقتصاد المنزلي',
    description:
      'يضم معامل الاقتصاد المنزلي، المطابخ، معامل النسيج، والفصول الدراسية.',
    category: 'building',
    coordinate: {
      latitude: 31.216002245895258,
      longitude: 29.9753309710477,
    },
  },
  {
    id: 'building5',
    title: 'مبني تكنولوجيا التعليم',
    description: 'يضم معامل التكنولوجيا.',
    category: 'building',
    coordinate: {
      latitude: 31.21583249880553,
      longitude: 29.975888870506175,
    },
  },

  {
    id: 'facility2',
    title: 'شئون الطلاب',
    description: 'مرافق وخدمات طلابية .',
    category: 'facility',
    coordinate: {
      latitude: 31.222369934660955,
      longitude: 29.947120790990667,
    },
  },
  {
    id: 'facility3',
    title: 'المسرح',
    description: 'المكان الرئيسي لعقد المؤتمرات والندوات والفعاليات الكبرى.',
    category: 'facility',
    coordinate: {
      latitude: 31.222369934660955,
      longitude: 29.947120790990667,
    },
  },
];