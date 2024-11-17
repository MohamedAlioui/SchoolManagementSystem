// File: src/components/students/StudentDetails.tsx
import React from 'react';
import { X } from 'lucide-react';
import { Student } from '../../types/student.ts';

interface StudentDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  student: Student | null;
}

const StudentDetails: React.FC<StudentDetailsProps> = ({
  isOpen,
  onClose,
  student,
}) => {
  if (!isOpen || !student) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-2xl mx-4">
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            تفاصيل الطالب
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                اسم الطالب
              </h3>
              <p className="mt-1 text-sm text-gray-900 dark:text-white">
                {student.name}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                رقم الطالب
              </h3>
              <p className="mt-1 text-sm text-gray-900 dark:text-white">
                {student.studentId}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                الصف
              </h3>
              <p className="mt-1 text-sm text-gray-900 dark:text-white">
                {student.grade}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                اسم ولي الأمر
              </h3>
              <p className="mt-1 text-sm text-gray-900 dark:text-white">
                {student.parentName}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                رقم الهاتف
              </h3>
              <p className="mt-1 text-sm text-gray-900 dark:text-white">
                {student.phone}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                البريد الإلكتروني
              </h3>
              <p className="mt-1 text-sm text-gray-900 dark:text-white">
                {student.email}
              </p>
            </div>

            <div className="col-span-2">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                العنوان
              </h3>
              <p className="mt-1 text-sm text-gray-900 dark:text-white">
                {student.address}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                نسبة الحضور
              </h3>
              <div className="mt-1 flex items-center">
                <div className="w-24 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mr-2">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${student.attendance}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-900 dark:text-white">
                  {student.attendance}%
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                الرسوم الدراسية
              </h3>
              <div className="mt-1 space-y-1">
                <p className="text-sm text-gray-900 dark:text-white">
                  الإجمالي: ₪{student.fees.total}
                </p>
                <p className="text-sm text-green-600 dark:text-green-400">
                  المدفوع: ₪{student.fees.paid}
                </p>
                <p className="text-sm text-red-600 dark:text-red-400">
                  المتبقي: ₪{student.fees.remaining}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
            >
              إغلاق
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
