import React from 'react';
import { Teacher } from '../../types/teacher';

interface TeacherDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  teacher: Teacher | null;
}

const TeacherDetails: React.FC<TeacherDetailsProps> = ({
  isOpen,
  onClose,
  teacher,
}) => {
  if (!isOpen || !teacher) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          تفاصيل المعلم
        </h2>
        <div className="mb-4">
          <strong className="text-sm font-medium text-gray-700 dark:text-gray-300">
            الاسم:
          </strong>
          <p className="text-sm text-gray-900 dark:text-white">{teacher.name}</p>
        </div>
        <div className="mb-4">
          <strong className="text-sm font-medium text-gray-700 dark:text-gray-300">
            رقم المعلم:
          </strong>
          <p className="text-sm text-gray-900 dark:text-white">{teacher.teacherId}</p>
        </div>
        <div className="mb-4">
          <strong className="text-sm font-medium text-gray-700 dark:text-gray-300">
            المادة:
          </strong>
          <p className="text-sm text-gray-900 dark:text-white">{teacher.subject}</p>
        </div>
        <div className="mb-4">
          <strong className="text-sm font-medium text-gray-700 dark:text-gray-300">
            رقم الهاتف:
          </strong>
          <p className="text-sm text-gray-900 dark:text-white">{teacher.phone}</p>
        </div>
        <div className="mb-4">
          <strong className="text-sm font-medium text-gray-700 dark:text-gray-300">
            البريد الإلكتروني:
          </strong>
          <p className="text-sm text-gray-900 dark:text-white">{teacher.email}</p>
        </div>
        <div className="mb-4">
          <strong className="text-sm font-medium text-gray-700 dark:text-gray-300">
            العنوان:
          </strong>
          <p className="text-sm text-gray-900 dark:text-white">{teacher.address}</p>
        </div>
        <div className="flex justify-end gap-4">
          <button
            type="button"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
            onClick={onClose}
          >
            إغلاق
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeacherDetails;
