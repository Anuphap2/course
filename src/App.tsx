import CourseForm from "./components/CourseForm";
import CourseList from "./components/CourseList";
import CourseDrop from "./components/CourseDrop";
import { useCourseStore } from "./store/CourseStore";
import "./App.css";
export default function App() {
  const gpa = useCourseStore((s) => s.calculateGPA());

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
      {/* หัวเรื่อง */}
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-600">
        ระบบถอนรายวิชา
      </h1>

      {/* ฟอร์มเพิ่มรายวิชา */}
      <div className="mb-8">
        <CourseForm />
      </div>

      {/* รายวิชาที่ลงทะเบียน */}
      <div className="mb-8">
        <CourseList />
      </div>

      {/* รายวิชาที่ถอน */}
      <div className="mb-8">
        <CourseDrop />
      </div>

      {/* GPA รวม */}
      <div className="mt-6 p-6 border rounded-xl bg-gradient-to-r from-blue-50 to-blue-100 shadow-sm text-center">
        <h2 className="text-xl font-semibold text-gray-800">
          GPA รวม:{" "}
          <span className="text-blue-600 font-bold text-2xl">
            {gpa.toFixed(2)}
          </span>
        </h2>
      </div>
    </div>
  );
}
