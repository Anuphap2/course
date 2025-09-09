import CourseForm from "./components/CourseForm";
import CourseList from "./components/CourseList";
import CourseDrop from "./components/CourseDrop";
import { useCourseStore } from "./store/CourseStore";
import "./App.css";

export default function App() {
  const gpa = useCourseStore((s) => s.calculateGPA());

  return (
    <div className="max-w-7xl mx-auto mt-10 p-8 bg-gray-50 shadow-2xl rounded-3xl">
      <h1 className="text-4xl font-extrabold mb-12 text-center text-gray-900 tracking-tight drop-shadow-md">
        ระบบถอนรายวิชา
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* คอลัมน์ซ้าย: ฟอร์ม + รายวิชาที่ลงทะเบียน */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* ฟอร์มเพิ่มรายวิชา */}
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              เพิ่มรายวิชา
            </h2>
            <CourseForm />
          </div>

          {/* รายวิชาที่ลงทะเบียน */}
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200 overflow-auto max-h-[500px]">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              รายวิชาที่ลงทะเบียน
            </h2>
            <CourseList />
          </div>
        </div>

        {/* คอลัมน์ขวา: GPA + รายวิชาที่ถอน */}
        <div className="flex flex-col gap-6">
          {/* GPA */}
          <div className="p-6 bg-gradient-to-r from-green-100 to-green-200 rounded-2xl shadow-md border border-green-200 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">GPA รวม</h2>
            <p className="text-4xl font-extrabold text-gray-800">
              {gpa.toFixed(2)}
            </p>
          </div>

          {/* รายวิชาที่ถอน */}
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              รายวิชาที่ถอน
            </h2>
            <CourseDrop />
          </div>
        </div>
      </div>
    </div>
  );
}
