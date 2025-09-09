import { useCourseStore } from "../store/CourseStore";

export default function CourseDrop() {
  const dropped = useCourseStore((s) => s.droppedCourses);

  return (
    <div className="p-4 border rounded-xl mb-4 bg-white shadow-md">
      <h2 className="font-bold mb-3 text-lg text-gray-900 border-b border-gray-200 pb-2">
        รายวิชาที่ถอน
      </h2>

      {dropped.length === 0 ? (
        <p className="text-gray-500 italic">ยังไม่มีรายวิชาที่ถอน</p>
      ) : (
        <ul className="list-disc pl-5 space-y-1">
          {dropped.map((c) => (
            <li
              key={c.id}
              className="text-gray-800 bg-gray-50 p-2 rounded shadow-sm hover:bg-gray-100 transition"
            >
              <span className="font-medium">{c.code}</span> - {c.nameTH} (
              {c.credit} หน่วยกิต)
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
