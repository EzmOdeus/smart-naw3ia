export interface AboutInfo {
  dean: {
    name: string;
    message: string;
    image: string;
  };
  history: {
    title: string;
    content: string;
    image: string;
  };
  mission: {
    title: string;
    content: string;
  };
  vision: {
    title: string;
    content: string;
  };
  goals: {
    title: string;
    items: string[];
  };
  values: {
    title: string;
    items: { title: string; description: string }[];
  };
  leadership: {
    title: string;
    members: {
      name: string;
      title: string;
      image: string;
    }[];
  };
  organizationalStructure: {
    title: string;
    content: string;
    image: string;
  };
  strategicPlan: {
    title: string;
    content: string;
    image: string;
  };
  contact: {
    title: string;
    address: string;
    phone: string;
    fax: string;
    email: string;
    website: string;
    socialMedia: {
      platform: string;
      url: string;
      icon: string;
    }[];
  };
}

export const aboutInfo: AboutInfo = {
  dean: {
    name: 'أ.د/ نهى محمود عبد الرحمن',
    message: 'تسعى كلية التربية النوعية إلى الريادة في إعداد المعلم النوعي المتميز علميًا ومهاريًا وقيميًا، والمساهمة في تطوير المجتمع من خلال برامج أكاديمية وبحثية متطورة. نرحب بجميع الطلاب ونتمنى لهم التوفيق والنجاح.',
    image: 'https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg',
  },
  history: {
    title: 'نبذة تاريخية',
    content: `تأسست كلية التربية النوعية – جامعة الإسكندرية عام 1988 كجزء من خطة تطوير التعليم في مصر. تهدف الكلية إلى إعداد معلمين متخصصين في مجالات الاقتصاد المنزلي، التربية الفنية، التربية الموسيقية، وتكنولوجيا التعليم.\n\nجاء إنشاء الكلية لسد الحاجة إلى معلمين مؤهلين تربويًا في هذه التخصصات، حيث كانت المدارس تفتقر إلى معلمين متخصصين في الفنون والموسيقى والاقتصاد المنزلي.\n\nتطبق الكلية نظام الفصلين الدراسيين منذ عام 1995/1996 طبقًا للقرار الوزاري رقم 1556، وتسعى لتحقيق الجودة والتميز في التعليم والبحث العلمي وخدمة المجتمع.`,
    image: 'https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg',
  },
  mission: {
    title: 'الرسالة',
    content: 'إعداد معلم نوعي متميز علميًا ومهاريًا وقيميًا، قادر على المنافسة في سوق العمل المحلي والإقليمي، والمساهمة في تطوير المجتمع من خلال برامج أكاديمية وبحثية وخدمية متطورة.'
  },
  vision: {
    title: 'الرؤية',
    content: 'الريادة والتميز في مجالات التربية النوعية محليًا وإقليميًا من خلال تقديم برامج تعليمية وبحثية وخدمية عالية الجودة.'
  },
  goals: {
    title: 'الأهداف',
    items: [
      'تخريج معلم نوعي مؤهل تربويًا وفنيًا.',
      'تطوير البرامج الأكاديمية لمواكبة متطلبات سوق العمل.',
      'تشجيع البحث العلمي في مجالات التربية النوعية.',
      'خدمة المجتمع وتنمية البيئة.',
      'تعزيز القيم الأخلاقية والانتماء الوطني لدى الطلاب.'
    ]
  },
  values: {
    title: 'القيم',
    items: [
      { title: 'الجودة والتميز', description: 'الالتزام بأعلى معايير الجودة في التعليم والبحث العلمي وخدمة المجتمع.' },
      { title: 'الإبداع والابتكار', description: 'تشجيع التفكير الإبداعي والابتكار في جميع مجالات العمل الأكاديمي.' },
      { title: 'الانتماء والمسؤولية', description: 'تعزيز روح الانتماء للكلية والوطن وتحمل المسؤولية المجتمعية.' },
      { title: 'العمل الجماعي', description: 'تعزيز التعاون والعمل بروح الفريق بين جميع منسوبي الكلية.' },
      { title: 'الشفافية والنزاهة', description: 'الالتزام بقيم الشفافية والنزاهة في جميع التعاملات.' },
    ],
  },
  leadership: {
    title: 'قيادات الكلية',
    members: [
      {
        name: 'أ.د/ نهى محمود عبد الرحمن',
        title: 'عميد الكلية',
        image: 'https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg',
      },
      {
        name: 'أ.د/ محمد عبد الفتاح',
        title: 'وكيل الكلية لشئون التعليم والطلاب',
        image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg',
      },
      {
        name: 'أ.د/ فاطمة عبد العزيز',
        title: 'وكيل الكلية للدراسات العليا والبحوث',
        image: 'https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg',
      },
      {
        name: 'أ.د/ أحمد عبد الله',
        title: 'وكيل الكلية لشئون خدمة المجتمع وتنمية البيئة',
        image: 'https://images.pexels.com/photos/5225308/pexels-photo-5225308.jpeg',
      },
    ],
  },
  organizationalStructure: {
    title: 'الهيكل التنظيمي',
    content: 'يوضح الشكل التالي الهيكل التنظيمي للكلية وتوزيع المسؤوليات الإدارية والأكاديمية بين العميد والوكلاء ورؤساء الأقسام والوحدات المختلفة.',
    image: 'https://i.imgur.com/6Qw1QwA.jpg',
  },
  strategicPlan: {
    title: 'الخطة الاستراتيجية',
    content: 'تسعى الكلية من خلال خطتها الاستراتيجية إلى تطوير البرامج الأكاديمية، وتعزيز البحث العلمي، وخدمة المجتمع، وتحقيق التميز المؤسسي على المستويين المحلي والإقليمي.',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
  },
  contact: {
    title: 'تواصل معنا',
    address: '14 شارع محمد أمين شهيب - مصطفى كامل، الإسكندرية، مصر',
    phone: '03 5454313',
    fax: '03 5442776',
    email: 'spedu@alexu.edu.eg',
    website: 'https://edusp.alexu.edu.eg',
    socialMedia: [
      {
        platform: 'فيسبوك',
        url: 'https://www.facebook.com/AlexUSpecificEdu',
        icon: 'facebook',
      },
      {
        platform: 'تويتر',
        url: 'https://twitter.com/AlexUSpecificEdu',
        icon: 'twitter',
      },
      {
        platform: 'يوتيوب',
        url: 'https://www.youtube.com/channel/AlexUSpecificEdu',
        icon: 'youtube',
      },
    ],
  },
};