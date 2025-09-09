import { useState } from "react";
import { useCourseStore } from "../store/CourseStore";

export default function CourseForm() {
  const addCourse = useCourseStore((s) => s.addCourse);

  const [form, setForm] = useState({
    code: "",
    nameTH: "",
    nameEN: "",
    credit: 3,
    teacher: "",
    grade: "A",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.code || !form.nameTH) return;
    addCourse({ ...form, credit: Number(form.credit) });
    setForm({
      code: "",
      nameTH: "",
      nameEN: "",
      credit: 3,
      teacher: "",
      grade: "A",
    });
  };

  return (
    <div className="p-6 bg-gray-50 rounded-2xl shadow-lg">
      <h2 className="font-extrabold mb-6 text-xl sm:text-2xl text-gray-900">
        เพิ่มรายวิชา
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* รหัสวิชา */}
        <div className="flex flex-col">
          <label
            htmlFor="code"
            className="text-sm font-medium text-gray-700 mb-2"
          >
            รหัสวิชา
          </label>
          <input
            id="code"
            name="code"
            placeholder="รหัสวิชา"
            value={form.code}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
          />
        </div>

        {/* ชื่อวิชา (ไทย) */}
        <div className="flex flex-col">
          <label
            htmlFor="nameTH"
            className="text-sm font-medium text-gray-700 mb-2"
          >
            ชื่อวิชา (ไทย)
          </label>
          <input
            id="nameTH"
            name="nameTH"
            placeholder="ชื่อวิชา (ไทย)"
            value={form.nameTH}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
          />
        </div>

        {/* ชื่อวิชา (อังกฤษ) */}
        <div className="flex flex-col">
          <label
            htmlFor="nameEN"
            className="text-sm font-medium text-gray-700 mb-2"
          >
            ชื่อวิชา (อังกฤษ)
          </label>
          <input
            id="nameEN"
            name="nameEN"
            placeholder="ชื่อวิชา (อังกฤษ)"
            value={form.nameEN}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
          />
        </div>

        {/* หน่วยกิต */}
        <div className="flex flex-col">
          <label
            htmlFor="credit"
            className="text-sm font-medium text-gray-700 mb-2"
          >
            หน่วยกิต
          </label>
          <input
            id="credit"
            name="credit"
            type="number"
            placeholder="หน่วยกิต"
            value={form.credit}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
          />
        </div>

        {/* อาจารย์ผู้สอน */}
        <div className="flex flex-col">
          <label
            htmlFor="teacher"
            className="text-sm font-medium text-gray-700 mb-2"
          >
            อาจารย์ผู้สอน
          </label>
          <input
            id="teacher"
            name="teacher"
            placeholder="อาจารย์ผู้สอน"
            value={form.teacher}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
          />
        </div>

        {/* เกรด */}
        <div className="flex flex-col">
          <label
            htmlFor="grade"
            className="text-sm font-medium text-gray-700 mb-2"
          >
            เกรด
          </label>
          <select
            id="grade"
            name="grade"
            value={form.grade}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
          >
            {["A", "B+", "B", "C+", "C", "D+", "D", "F"].map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className="mt-6 w-full bg-gray-900 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-gray-700 transition-all"
      >
        เพิ่มรายวิชา
      </button>
    </div>
  );
}
