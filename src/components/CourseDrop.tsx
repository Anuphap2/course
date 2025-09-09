import { useCourseStore } from "../store/CourseStore";

export default function CourseDrop() {
  const dropped = useCourseStore((s) => s.droppedCourses);

  return (
    <div className="p-4 border rounded mb-4">
      <h2 className="font-bold mb-2">รายวิชาที่ถอน</h2>
      {dropped.length === 0 ? (
        <p className="text-gray-500">ยังไม่มีรายวิชาที่ถอน</p>
      ) : (
        <ul className="list-disc pl-5">
          {dropped.map((c) => (
            <li key={c.id}>
              {c.code} - {c.nameTH} ({c.credit} หน่วยกิต)
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
