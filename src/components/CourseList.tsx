import { useCourseStore } from "../store/CourseStore";
import DropButton from "./DropButton";

export default function CourseList() {
  const courses = useCourseStore((s) => s.courses);

  return (
    <div className="p-4 border rounded mb-4 bg-white shadow">
      <h2 className="font-bold mb-4 text-lg">รายวิชาที่ลงทะเบียน</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-sm">
              <th className="px-3 py-2 text-center border">รหัสวิชา</th>
              <th className="px-3 py-2 text-center border">ชื่อวิชา</th>
              <th className="px-3 py-2 text-center border">หน่วยกิต</th>
              <th className="px-3 py-2 text-center border">อาจารย์</th>
              <th className="px-3 py-2 text-center border">เกรด</th>
              <th className="px-3 py-2 text-center border w-16"></th>
            </tr>
          </thead>

          <tbody>
            {courses.map((c) => (
              <tr
                key={c.id}
                className="border-t hover:bg-gray-50 transition-colors"
              >
                <td className="px-3 py-2 text-center">{c.code}</td>
                <td className="px-3 py-2">{c.nameTH}</td>
                <td className="px-3 py-2 text-center">{c.credit}</td>
                <td className="px-3 py-2">{c.teacher}</td>
                <td className="px-3 py-2 text-center font-semibold">
                  {c.grade}
                </td>
                <td className="px-3 py-2 text-center">
                  <DropButton id={c.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
