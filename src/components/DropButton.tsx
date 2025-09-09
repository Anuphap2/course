import { useCourseStore } from "../store/CourseStore";

export default function DropButton({ id }: { id: number }) {
  const dropCourse = useCourseStore((s) => s.dropCourse);

  return (
    <button
      onClick={() => dropCourse(id)}
      className="bg-red-500 text-white px-2 py-1 rounded"
    >
      ถอน
    </button>
  );
}
