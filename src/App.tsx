import CourseForm from "./components/CourseForm";
import CourseList from "./components/CourseList";
import CourseDrop from "./components/CourseDrop";
import { useCourseStore } from "./store/CourseStore";
import "./App.css";

export default function App() {
  const gpa = useCourseStore((s) => s.calculateGPA());

  return (
    <div className="max-w-5xl mx-auto mt-10 p-8 bg-gray-50 shadow-2xl rounded-3xl">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-gray-900 tracking-tight drop-shadow-md">
        ระบบถอนรายวิชา
      </h1>

      {/* ฟอร์มเพิ่มรายวิชา */}
      <div className="mb-10 p-6 bg-white rounded-2xl shadow hover:shadow-lg transition-shadow duration-300 border border-gray-200">
        <CourseForm />
      </div>

      {/* รายวิชาที่ลงทะเบียน */}
      <div className="mb-10 p-6 bg-white rounded-2xl shadow hover:shadow-lg transition-shadow duration-300 border border-gray-200">
        <CourseList />

        {/* GPA รวม ไปไว้ด้านล่างรายวิชาที่ลงทะเบียน */}
        <div className="mt-6 p-4 bg-gray-100 rounded-xl shadow-inner text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-1">GPA รวม</h2>
          <p className="text-3xl font-extrabold text-gray-800">
            {gpa.toFixed(2)}
          </p>
        </div>
      </div>

      {/* รายวิชาที่ถอน */}
      <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition-shadow duration-300 border border-gray-200">
        <CourseDrop />
      </div>
    </div>
  );
}
