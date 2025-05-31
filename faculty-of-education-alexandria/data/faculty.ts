import { FacultyMember, departments } from './departments';

export type FullFacultyMember = FacultyMember & {
  department: string;
  departmentId: string;
  phone: string;
  office: string;
  officeHours: string;
  courses: string[];
  publications: { title: string; year: string; journal: string }[];
};

// أعضاء هيئة التدريس المخصصين سابقاً (يدوياً)
const manualFaculty: FullFacultyMember[] = [
  // ... (الأعضاء الموجودون يدوياً كما هم)
];

// أعضاء هيئة التدريس من جميع الأقسام
const departmentFaculty: FullFacultyMember[] = departments.flatMap(dept =>
  dept.faculty.map(member => ({
    ...member,
    department: dept.name,
    departmentId: dept.id,
    phone: '',
    office: '',
    officeHours: '',
    courses: [],
    publications: [],
  }))
);

// دمج بدون تكرار (الأولوية للبيانات اليدوية)
export const facultyMembers: FullFacultyMember[] = [
  ...manualFaculty,
  ...departmentFaculty.filter(member =>
    !manualFaculty.some(m => m.id === member.id)
  ),
];