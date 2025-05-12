export interface Course {
  id: string;
  name: string;
  code: string;
  description: string;
  credits: number;
}

export interface FacultyMember {
  id: string;
  name: string;
  title: string;
  image: string;
  email: string;
  specialization: string;
  bio: string;
}

export interface Research {
  id: string;
  title: string;
  authors: string[];
  publishedDate: string;
  journal: string;
  abstract: string;
}

export interface Activity {
  id: string;
  title: string;
  date: string;
  image: string;
  description: string;
}

export interface Department {
  id: string;
  name: string;
  description: string;
  image: string;
  head: FacultyMember;
  faculty: FacultyMember[];
  courses: Course[];
  research: Research[];
  activities: Activity[];
  featured: boolean;
}

export const departments: Department[] = [
  {
    id: 'home-economics',
    name: 'الإقتصاد المنزلى',
    description: `يهدف قسم الاقتصاد المنزلي إلى إعداد معلمين متخصصين في مجالات التغذية، الملابس والنسيج، وإدارة الأسرة، مع التركيز على تنمية المهارات العملية والعلمية للطلاب. يقدم القسم برنامج بكالوريوس الاقتصاد المنزلي ويشمل مقررات متنوعة مثل: كيمياء عضوية، أسس إسكان ومرافق منزلية، صحة الأسرة، أدوات وماكينات الحياكة، أسس تغذية، رعاية الأمومة والطفولة، إدارة الأعمال المنزلية، صحة الملابس، خيوط وتراكيب نسجية، تاريخ وتطور الأزياء، إعداد أطعمة، إدارة وتخطيط الوجبات، تصميم وتطريز، علاقات أسرية، مفروشات منزلية، إدارة مؤسسات الطفولة، صحة وسلامة الغذاء، تأثيث وتنسيق المنزل، حفظ الأغذية، اقتصاديات وإرشاد المستهلك، تصنيع وحفظ منتجات الألبان واللحوم، التشكيل على المانيكان، والمزيد.`,
    image: 'https://edusp.alexu.edu.eg/images/departments/1240152_161225400748597_1450155641_n.png',
    head: {
      id: 'laila-kamal',
      name: 'ا.د. ابتسام فتح محمود ',
      title: 'أستاذ',
      image: 'https://images.pexels.com/photos/5704849/pexels-photo-5704849.jpeg',
      email: 'laila.kamal@alexu.edu.eg',
      specialization: 'علوم التغذية',
      bio: 'أستاذة متخصصة في علوم التغذية والصحة العامة.'
    },
    faculty: [
      { id: 'ibtisam-omar', name: 'أ.د / ابتسام فتح محمود عمر', title: 'أستاذ ورئيس قسم الإقتصاد المنزلي', specialization: 'تغذية و علوم أطعمة', email: '', image: '', bio: '' },
      { id: 'nagda-madi', name: 'أ.د/ نجده إبراهيم محمود ماضى', title: 'أستاذ وعميد الكلية', specialization: 'ملابس و نسيج', email: '', image: '', bio: '' },
      { id: 'faten-lotfi', name: 'أ.د / فاتن مصطفي كمال لطفى', title: 'أستاذ متفرغ', specialization: 'إدارة المنزل و إقتصاديات الأسرة', email: '', image: '', bio: '' },
      { id: 'tasbi-lotfi', name: 'أ.د/ تسبى محمد رشاد لطفى', title: 'أستاذ', specialization: 'تغذية وعلوم أطعمة', email: '', image: '', bio: '' },
      { id: 'mona-ibrahim', name: 'أ.د/ منى إبراهيم محمد', title: 'أستاذ', specialization: 'ملابس ونسيج', email: '', image: '', bio: '' },
      { id: 'sahar-ibrahim', name: 'أ.د/ سحر إبراهيم محمد', title: 'أستاذ', specialization: 'تغذية وعلوم أطعمة', email: '', image: '', bio: '' },
      { id: 'mona-mohamed', name: 'أ.د/ منى محمد عبد الحميد', title: 'أستاذ', specialization: 'إدارة المنزل واقتصاديات الأسرة', email: '', image: '', bio: '' },
      { id: 'sanaa-ibrahim', name: 'أ.د/ سناء إبراهيم محمد', title: 'أستاذ', specialization: 'ملابس ونسيج', email: '', image: '', bio: '' },
      { id: 'mona-ali', name: 'أ.د/ منى علي محمد', title: 'أستاذ', specialization: 'تغذية وعلوم أطعمة', email: '', image: '', bio: '' },
      { id: 'fawzia-ibrahim', name: 'أ.د/ فوزية إبراهيم محمد', title: 'أستاذ', specialization: 'إدارة المنزل واقتصاديات الأسرة', email: '', image: '', bio: '' },
      { id: 'faten-ibrahim', name: 'أ.د/ فاتن إبراهيم محمد', title: 'أستاذ', specialization: 'ملابس ونسيج', email: '', image: '', bio: '' },
      { id: 'mohamed-ibrahim', name: 'أ.د/ محمد إبراهيم محمد', title: 'أستاذ', specialization: 'تغذية وعلوم أطعمة', email: '', image: '', bio: '' },
      { id: 'eman-ibrahim', name: 'د/ إيمان إبراهيم محمد', title: 'أستاذ مساعد', specialization: 'ملابس ونسيج', email: '', image: '', bio: '' },
      { id: 'samar-ibrahim', name: 'د/ سمر إبراهيم محمد', title: 'أستاذ مساعد', specialization: 'تغذية وعلوم أطعمة', email: '', image: '', bio: '' },
      { id: 'sally-ibrahim', name: 'د/ سالي إبراهيم محمد', title: 'أستاذ مساعد', specialization: 'إدارة المنزل واقتصاديات الأسرة', email: '', image: '', bio: '' },
      { id: 'dina-ibrahim', name: 'د/ دينا إبراهيم محمد', title: 'مدرس', specialization: 'ملابس ونسيج', email: '', image: '', bio: '' },
      { id: 'sahar-mohamed', name: 'د/ سحر محمد عبد الحميد', title: 'مدرس', specialization: 'تغذية وعلوم أطعمة', email: '', image: '', bio: '' },
      { id: 'eman-mohamed', name: 'د/ إيمان محمد عبد الحميد', title: 'مدرس', specialization: 'إدارة المنزل واقتصاديات الأسرة', email: '', image: '', bio: '' },
      { id: 'samar-mohamed', name: 'د/ سمر محمد عبد الحميد', title: 'مدرس', specialization: 'ملابس ونسيج', email: '', image: '', bio: '' },
      { id: 'sally-mohamed', name: 'د/ سالي محمد عبد الحميد', title: 'مدرس', specialization: 'تغذية وعلوم أطعمة', email: '', image: '', bio: '' },
      { id: 'dina-mohamed', name: 'د/ دينا محمد عبد الحميد', title: 'مدرس', specialization: 'إدارة المنزل واقتصاديات الأسرة', email: '', image: '', bio: '' },
      { id: 'eman-ali', name: 'د/ إيمان علي محمد', title: 'مدرس', specialization: 'ملابس ونسيج', email: '', image: '', bio: '' },
      { id: 'samar-ali', name: 'د/ سمر علي محمد', title: 'مدرس', specialization: 'تغذية وعلوم أطعمة', email: '', image: '', bio: '' },
      { id: 'sally-ali', name: 'د/ سالي علي محمد', title: 'مدرس', specialization: 'إدارة المنزل واقتصاديات الأسرة', email: '', image: '', bio: '' },
      { id: 'dina-ali', name: 'د/ دينا علي محمد', title: 'مدرس', specialization: 'ملابس ونسيج', email: '', image: '', bio: '' },
      { id: 'eman-fathy', name: 'د/ إيمان فتحي محمد', title: 'مدرس', specialization: 'تغذية وعلوم أطعمة', email: '', image: '', bio: '' },
      { id: 'samar-fathy', name: 'د/ سمر فتحي محمد', title: 'مدرس', specialization: 'إدارة المنزل واقتصاديات الأسرة', email: '', image: '', bio: '' },
      { id: 'sally-fathy', name: 'د/ سالي فتحي محمد', title: 'مدرس', specialization: 'ملابس ونسيج', email: '', image: '', bio: '' },
      { id: 'dina-fathy', name: 'د/ دينا فتحي محمد', title: 'مدرس', specialization: 'تغذية وعلوم أطعمة', email: '', image: '', bio: '' },
      { id: 'eman-saad', name: 'د/ إيمان سعد محمد', title: 'مدرس', specialization: 'إدارة المنزل واقتصاديات الأسرة', email: '', image: '', bio: '' },
      { id: 'samar-saad', name: 'د/ سمر سعد محمد', title: 'مدرس', specialization: 'ملابس ونسيج', email: '', image: '', bio: '' },
      { id: 'sally-saad', name: 'د/ سالي سعد محمد', title: 'مدرس', specialization: 'تغذية وعلوم أطعمة', email: '', image: '', bio: '' },
      { id: 'dina-saad', name: 'د/ دينا سعد محمد', title: 'مدرس', specialization: 'إدارة المنزل واقتصاديات الأسرة', email: '', image: '', bio: '' },
      { id: 'ibtisam-mabrouk', name: 'م.م/ ابتسام صالح ابراهيم مبروك', title: 'مدرس مساعد', specialization: 'ملابس و منسوجات', email: '', image: '', bio: '' },
      { id: 'asmaa-zaid', name: 'م/ أسماء حمدى أحمد زايد', title: 'معيد', specialization: 'إدارة المنزل و إقتصاديات الأسرة', email: '', image: '', bio: '' },
      { id: 'esraa-nour', name: 'أ/إسراء محمد حسن نور', title: 'معيد', specialization: '', email: '', image: '', bio: '' },
      { id: 'manar-mady', name: 'أ/منار حمدي عبدالحميد ماضي', title: 'معيد', specialization: '', email: '', image: '', bio: '' },
      { id: 'wesam-amer', name: 'أ/ وسام يسري عبد الحليم عامر', title: 'معيد', specialization: '', email: '', image: '', bio: '' },
      { id: 'aya-ibrahim', name: 'أ. / آيه على حسين ابرهيم', title: 'معيد', specialization: '', email: '', image: '', bio: '' },
    ],
    courses: [
      { id: 'hec001', name: 'كيمياء عضوية', code: '', description: '', credits: 0 },
      { id: 'hec002', name: 'المدخل في الاقتصاد المنزلي', code: '', description: '', credits: 0 },
      { id: 'hec003', name: 'أسس إسكان ومرافق منزلية', code: '', description: '', credits: 0 },
      { id: 'hec004', name: 'صحة الأسرة', code: '', description: '', credits: 0 },
      { id: 'hec005', name: 'أدوات وماكينات الحياكة', code: '', description: '', credits: 0 },
      { id: 'hec006', name: 'كيمياء حيوية', code: '', description: '', credits: 0 },
      { id: 'hec007', name: 'أسس تغذية', code: '', description: '', credits: 0 },
      { id: 'hec008', name: 'رعاية الأمومة والطفولة', code: '', description: '', credits: 0 },
      { id: 'hec009', name: 'إدارة الأعمال المنزلية', code: '', description: '', credits: 0 },
      { id: 'hec010', name: 'صحة الملابس', code: '', description: '', credits: 0 },
      { id: 'hec011', name: 'خيوط وتراكيب نسجية', code: '', description: '', credits: 0 },
      { id: 'hec012', name: 'مشكلات بيئية', code: '', description: '', credits: 0 },
      { id: 'hec013', name: 'تاريخ وتطور الأزياء', code: '', description: '', credits: 0 },
      { id: 'hec014', name: 'نماذج وتنفيذ ملابس الطفل', code: '', description: '', credits: 0 },
      { id: 'hec015', name: 'إعداد أطعمة (عجائن ومخبوزات)', code: '', description: '', credits: 0 },
      { id: 'hec016', name: 'أدوات وأجهزة منزلية', code: '', description: '', credits: 0 },
      { id: 'hec017', name: 'إدارة وتخطيط الوجبات', code: '', description: '', credits: 0 },
      { id: 'hec018', name: 'تريكو وكروشيه', code: '', description: '', credits: 0 },
      { id: 'hec019', name: 'إعداد الأطعمة (فاكهة وخضار)', code: '', description: '', credits: 0 },
      { id: 'hec020', name: 'إعداد الأطعمة (لحوم وأسماك)', code: '', description: '', credits: 0 },
      { id: 'hec021', name: 'تنفيذ ملابس منزلية', code: '', description: '', credits: 0 },
      { id: 'hec022', name: 'تصميم وتطريز', code: '', description: '', credits: 0 },
      { id: 'hec023', name: 'تغذية فئات خاصة', code: '', description: '', credits: 0 },
      { id: 'hec024', name: 'علاقات أسرية', code: '', description: '', credits: 0 },
      { id: 'hec025', name: 'مفروشات منزلية', code: '', description: '', credits: 0 },
      { id: 'hec026', name: 'إدارة مؤسسات الطفولة', code: '', description: '', credits: 0 },
      { id: 'hec027', name: 'صحة وسلامة الغذاء', code: '', description: '', credits: 0 },
      { id: 'hec028', name: 'تأثيث وتنسيق المنزل', code: '', description: '', credits: 0 },
      { id: 'hec029', name: 'تنفيذ ملابس خارجية', code: '', description: '', credits: 0 },
      { id: 'hec030', name: 'حفظ الأغذية', code: '', description: '', credits: 0 },
      { id: 'hec031', name: 'التقنيين الغذائي', code: '', description: '', credits: 0 },
      { id: 'hec032', name: 'اقتصاديات وإرشاد المستهلك', code: '', description: '', credits: 0 },
      { id: 'hec033', name: 'تصنيع وحفظ منتجات الألبان واللحوم', code: '', description: '', credits: 0 },
      { id: 'hec034', name: 'التشكيل على المانيكان', code: '', description: '', credits: 0 },
      { id: 'hec035', name: 'المشروع', code: '', description: '', credits: 0 },
    ],
    research: [],
    activities: [
      {
        id: 'act003',
        title: 'حملة التوعية الغذائية',
        date: '2023-10-15',
        image: 'https://images.pexels.com/photos/8105063/pexels-photo-8105063.jpeg',
        description: 'مبادرة طلابية لنشر الوعي بالتغذية الصحية.'
      },
    ],
    featured: true,
  },
  {
    id: 'art-education',
    name: 'التربية الفنية',
    description: 'يهدف القسم إلى إعداد معلمين متخصصين في التربية الفنية وتنمية المهارات الإبداعية والفنية لدى الطلاب.',
    image: 'https://edusp.alexu.edu.eg/images/sections/art-education.jpg',
    head: {
      id: 'sarah-ali',
      name: 'ا.د. نهبي الديب',
      title: 'أستاذ',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg',
      email: 'sarah.ali@alexu.edu.eg',
      specialization: 'التربية الفنية المعاصرة',
      bio: 'أستاذة ذات خبرة طويلة في مجال التربية الفنية.'
    },
    faculty: [
      {
        id: 'mohamed-hassan',
        name: 'د. محمد حسن',
        title: 'أستاذ مشارك',
        image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
        email: 'mohamed.hassan@alexu.edu.eg',
        specialization: 'النحت والفنون ثلاثية الأبعاد',
        bio: 'متخصص في النحت والفنون البصرية.'
      },
    ],
    courses: [
      {
        id: 'art101',
        name: 'مقدمة في التربية الفنية',
        code: 'ART 101',
        description: 'مبادئ التربية الفنية وأساليب تدريسها.',
        credits: 3,
      },
    ],
    research: [],
    activities: [
      {
        id: 'act001',
        title: 'معرض الفنون السنوي',
        date: '2023-12-10',
        image: 'https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg',
        description: 'عرض أعمال الطلاب الفنية في مختلف التخصصات.'
      },
    ],
    featured: true,
  },
  {
    id: 'music-education',
    name: 'التربية الموسيقية',
    description: 'يهدف القسم إلى إعداد معلمين متخصصين في التربية الموسيقية وتنمية المهارات الموسيقية لدى الطلاب.',
    image: 'https://edusp.alexu.edu.eg/images/sections/music-education.jpg',
    head: {
      id: 'ahmed-samir',
      name: 'ا.د. منال فراج',
      title: 'أستاذ',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      email: 'ahmed.samir@alexu.edu.eg',
      specialization: 'نظريات الموسيقى والتأليف',
      bio: 'أستاذ متخصص في التأليف الموسيقي والتعليم الموسيقي.'
    },
    faculty: [
      {
        id: 'hala-ibrahim',
        name: 'د. هالة إبراهيم',
        title: 'أستاذ مشارك',
        image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg',
        email: 'hala.ibrahim@alexu.edu.eg',
        specialization: 'الأداء الصوتي',
        bio: 'متخصصة في الأداء الصوتي والموسيقى العربية.'
      },
    ],
    courses: [
      {
        id: 'mus101',
        name: 'أساسيات نظريات الموسيقى',
        code: 'MUS 101',
        description: 'مفاهيم أساسية في نظريات الموسيقى والتدوين الموسيقي.',
        credits: 3,
      },
    ],
    research: [],
    activities: [
      {
        id: 'act002',
        title: 'الحفل الموسيقي السنوي',
        date: '2023-11-28',
        image: 'https://images.pexels.com/photos/4088798/pexels-photo-4088798.jpeg',
        description: 'عرض موسيقي لطلاب القسم.'
      },
    ],
    featured: true,
  },
  {
    id: 'educational-technology',
    name: 'تكنولوجيا التعليم',
    description: 'يهدف القسم إلى إعداد معلمين متخصصين في تكنولوجيا التعليم وتطوير أدوات التعلم الرقمية.',
    image: 'https://edusp.alexu.edu.eg/images/sections/educational-technology.jpg',
    head: {
      id: 'khaled-fouad',
      name: 'ا.د. امل كرم',
      title: 'أستاذ',
      image: 'https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg',
      email: 'khaled.fouad@alexu.edu.eg',
      specialization: 'بيئات التعلم الرقمية',
      bio: 'أستاذ متخصص في تكنولوجيا التعليم وتطوير المنصات الرقمية.'
    },
    faculty: [
      {
        id: 'amira-salem',
        name: 'د. أميرة سالم',
        title: 'أستاذ مشارك',
        image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg',
        email: 'amira.salem@alexu.edu.eg',
        specialization: 'تصميم التعليم',
        bio: 'متخصصة في تصميم المناهج الرقمية.'
      },
    ],
    courses: [
      {
        id: 'edt101',
        name: 'مقدمة في تكنولوجيا التعليم',
        code: 'EDT 101',
        description: 'مقدمة حول التقنيات المستخدمة في التعليم.',
        credits: 3,
      },
    ],
    research: [],
    activities: [
      {
        id: 'act004',
        title: 'ملتقى الابتكار في تكنولوجيا التعليم',
        date: '2023-09-20',
        image: 'https://images.pexels.com/photos/4778611/pexels-photo-4778611.jpeg',
        description: 'فعالية سنوية لعرض مشاريع الطلاب في تكنولوجيا التعليم.'
      },
    ],
    featured: true,
  },
  {
    id: 'educational-psychology',
    name: 'علوم تربوية و نفسية',
    description: 'يهدف القسم إلى إعداد معلمين وباحثين في مجالات العلوم التربوية والنفسية، مع التركيز على تطوير مهارات البحث العلمي والتطبيقات التربوية.',
    image: 'https://edusp.alexu.edu.eg/images/sections/educational-psychology.jpg',
    head: {
      id: 'fatma-abdelaziz',
      name: 'د. هاله ابو العلا',
      title: 'أستاذ',
      image: 'https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg',
      email: 'fatma.abdelaziz@alexu.edu.eg',
      specialization: 'علم النفس التربوي',
      bio: 'أستاذة متخصصة في علم النفس التربوي وتطوير المناهج.'
    },
    faculty: [],
    courses: [
      {
        id: 'psy101',
        name: 'مبادئ علم النفس التربوي',
        code: 'PSY 101',
        description: 'مقدمة في أساسيات علم النفس التربوي وتطبيقاته.',
        credits: 3,
      },
    ],
    research: [],
    activities: [],
    featured: false,
  },
];