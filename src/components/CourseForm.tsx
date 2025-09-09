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
    <div className="p-4 border rounded mb-4 bg-white shadow">
      <h2 className="font-bold mb-4 text-lg">เพิ่มรายวิชา</h2>

      {/* ฟอร์มแบบ responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* รหัสวิชา */}
        <div className="flex flex-col">
          <label
            htmlFor="code"
            className="text-sm font-medium text-gray-700 mb-1"
          >
            รหัสวิชา
          </label>
          <input
            id="code"
            name="code"
            placeholder="รหัสวิชา"
            value={form.code}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>

        {/* ชื่อวิชา (ไทย) */}
        <div className="flex flex-col">
          <label
            htmlFor="nameTH"
            className="text-sm font-medium text-gray-700 mb-1"
          >
            ชื่อวิชา (ไทย)
          </label>
          <input
            id="nameTH"
            name="nameTH"
            placeholder="ชื่อวิชา (ไทย)"
            value={form.nameTH}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>

        {/* ชื่อวิชา (อังกฤษ) */}
        <div className="flex flex-col">
          <label
            htmlFor="nameEN"
            className="text-sm font-medium text-gray-700 mb-1"
          >
            ชื่อวิชา (อังกฤษ)
          </label>
          <input
            id="nameEN"
            name="nameEN"
            placeholder="ชื่อวิชา (อังกฤษ)"
            value={form.nameEN}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>

        {/* หน่วยกิต */}
        <div className="flex flex-col">
          <label
            htmlFor="credit"
            className="text-sm font-medium text-gray-700 mb-1"
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
            className="border p-2 rounded"
          />
        </div>

        {/* อาจารย์ผู้สอน */}
        <div className="flex flex-col">
          <label
            htmlFor="teacher"
            className="text-sm font-medium text-gray-700 mb-1"
          >
            อาจารย์ผู้สอน
          </label>
          <input
            id="teacher"
            name="teacher"
            placeholder="อาจารย์ผู้สอน"
            value={form.teacher}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>

        {/* เกรด */}
        <div className="flex flex-col">
          <label
            htmlFor="grade"
            className="text-sm font-medium text-gray-700 mb-1"
          >
            เกรด
          </label>
          <select
            id="grade"
            name="grade"
            value={form.grade}
            onChange={handleChange}
            className="border p-2 rounded"
          >
            {["A", "B+", "B", "C+", "C", "D+", "D", "F"].map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* ปุ่มเพิ่ม */}
      <button
        onClick={handleSubmit}
        className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow"
      >
        เพิ่มรายวิชา
      </button>
    </div>
  );
}
