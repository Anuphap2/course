import { useState } from "react";
import { useCourseStore } from "../store/CourseStore";

export default function DropButton({ id }: { id: number }) {
  const dropCourse = useCourseStore((s) => s.dropCourse);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-gray-900 hover:bg-gray-700 text-white px-2 py-1 rounded-lg shadow transition transform hover:scale-105"
      >
        ถอน
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Background เบลอ */}
          <div
            className="absolute inset-0 backdrop-blur-sm bg-white/30"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Card Modal */}
          <div className="relative bg-white rounded-xl shadow-xl max-w-sm w-full p-6 z-10">
            <h2 className="text-xl font-bold mb-4 text-gray-800">
              ยืนยันการถอนรายวิชา
            </h2>
            <p className="mb-6 text-gray-600">
              คุณแน่ใจหรือไม่ว่าต้องการถอนรายวิชานี้?
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 transition"
              >
                ยกเลิก
              </button>
              <button
                onClick={() => {
                  dropCourse(id);
                  setIsOpen(false);
                }}
                className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600 transition"
              >
                ยืนยัน
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
