import { create } from "zustand";

export type Course = {
  id: number;
  code: string;
  nameTH: string;
  nameEN: string;
  credit: number;
  teacher: string;
  grade: string;
};

type CourseStore = {
  courses: Course[];
  droppedCourses: Course[];
  addCourse: (course: Omit<Course, "id">) => void;
  dropCourse: (id: number) => void;
  calculateGPA: () => number;
};

const gradeToPoint: Record<string, number | null> = {
  A: 4,
  "B+": 3.5,
  B: 3,
  "C+": 2.5,
  C: 2,
  "D+": 1.5,
  D: 1,
  F: 0,
  W: null,
};

export const useCourseStore = create<CourseStore>((set, get) => ({
  courses: [
    {
      id: 1,
      code: "10301211",
      nameTH: "คณิตศาสตร์สำหรับวิทยาการคอมพิวเตอร์",
      nameEN: "Mathematics for Computer Science",
      credit: 3,
      teacher: "อาจารย์ ดร.พยุงศักดิ์ เกษมสำราญ",
      grade: "A",
    },
    {
      id: 2,
      code: "10301222",
      nameTH: "โครงสร้างข้อมูลและอัลกอริทึม",
      nameEN: "Data Structure and Algorithm",
      credit: 3,
      teacher: "ผู้ช่วยศาสตราจารย์ ดร.ปวีณ เขื่อนแก้ว",
      grade: "A",
    },
    {
      id: 3,
      code: "10301223",
      nameTH: "ฐานข้อมูลโครงสร้างเชิงสัมพันธ์",
      nameEN: "Structure Relational Database",
      credit: 3,
      teacher: "อาจารย์อรรถวิท ชังคมานนท์",
      grade: "A",
    },
    {
      id: 4,
      code: "10301225",
      nameTH: "วิศวกรรมซอฟต์แวร์",
      nameEN: "Software Engineering",
      credit: 3,
      teacher: "ผู้ช่วยศาสตราจารย์ ดร.สมนึก สินธุปวน,อาจารย์อลงกต กองมณี",
      grade: "A",
    },
    {
      id: 5,
      code: "10301231",
      nameTH: "เว็บเทคโนโลยี",
      nameEN: "Web Technology",
      credit: 3,
      teacher: "อาจารย์อรรถวิท ชังคมานนท์",
      grade: "A",
    },
    {
      id: 6,
      code: "10700313",
      nameTH: "ภาษาอังกฤษเชิงวิทยาศาสตร์และนวัตกรรม",
      nameEN: "English for Science and Innovation",
      credit: 3,
      teacher: "อาจารย์กนกวรรณ สัมพันธ์",
      grade: "A",
    },
  ],
  droppedCourses: [],
  addCourse: (course) =>
    set((state) => ({
      courses: [...state.courses, { ...course, id: Date.now() }],
    })),
  dropCourse: (id) =>
    set((state) => {
      const course = state.courses.find((c) => c.id === id);
      if (!course) return state;
      return {
        courses: state.courses.filter((c) => c.id !== id),
        droppedCourses: [...state.droppedCourses, course],
      };
    }),
  calculateGPA: () => {
    const { courses } = get();
    const totalCredits = courses.reduce((sum, c) => {
      const point = gradeToPoint[c.grade];
      return point !== null ? sum + c.credit : sum;
    }, 0);

    const totalPoints = courses.reduce((sum, c) => {
      const point = gradeToPoint[c.grade];
      return point !== null ? sum + point * c.credit : sum;
    }, 0);

    return totalCredits === 0 ? 0 : totalPoints / totalCredits;
  },
}));
