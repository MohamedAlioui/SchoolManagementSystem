// File: src/components/students/StudentModal.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { X } from 'lucide-react';
import { Student } from '../../types/student.ts';

interface StudentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: Student) => void;
  student?: Student | null;
}

const StudentModal: React.FC<StudentModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  student,
}) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Student>({
    defaultValues: student || {
      name: '',
      studentId: '',
      grade: '',
      parentName: '',
      phone: '',
      email: '',
      address: '',
      attendance: 100,
      fees: {
        total: 0,
        paid: 0,
        remaining: 0,
      },
    },
  });

  React.useEffect(() => {
    if (student) reset(student);
  }, [student, reset]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-2xl mx-4">
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            {student ? 'تعديل بيانات الطالب' : 'إضافة طالب جديد'}
          </h2>
          <button
            onClick={() => {
              reset();
              onClose();
            }}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          >
            <X size={24} />
          </button>
        </div>

        <form
          onSubmit={handleSubmit((data) => {
            if (student) data.id = student.id; // Preserve the ID if editing
            onSubmit(data);
            reset(); // Clear the form on submit
          })}
          className="p-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                اسم الطالب
              </label>
              <input
                {...register('name', { required: true })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                dir="rtl"
              />
              {errors.name && <span className="text-red-500 text-sm">هذا الحقل مطلوب</span>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                رقم الطالب
              </label>
              <input
                {...register('studentId', { required: true })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                dir="rtl"
              />
              {errors.studentId && <span className="text-red-500 text-sm">هذا الحقل مطلوب</span>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                الصف
              </label>
              <select
                {...register('grade', { required: true })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                dir="rtl"
              >
                <option value="">اختر الصف</option>
                <option value="الصف العاشر">الصف العاشر</option>
                <option value="الصف الحادي عشر">الصف الحادي عشر</option>
                <option value="الصف الثاني عشر">الصف الثاني عشر</option>
              </select>
              {errors.grade && <span className="text-red-500 text-sm">هذا الحقل مطلوب</span>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                اسم ولي الأمر
              </label>
              <input
                {...register('parentName', { required: true })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                dir="rtl"
              />
              {errors.parentName && <span className="text-red-500 text-sm">هذا الحقل مطلوب</span>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                رقم الهاتف
              </label>
              <input
                {...register('phone', { required: true })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                dir="rtl"
              />
              {errors.phone && <span className="text-red-500 text-sm">هذا الحقل مطلوب</span>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                البريد الإلكتروني
              </label>
              <input
                {...register('email', { required: true })}
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                dir="rtl"
              />
              {errors.email && <span className="text-red-500 text-sm">هذا الحقل مطلوب</span>}
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                العنوان
              </label>
              <textarea
                {...register('address', { required: true })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                rows={3}
                dir="rtl"
              ></textarea>
              {errors.address && <span className="text-red-500 text-sm">هذا الحقل مطلوب</span>}
            </div>
          </div>

          <div className="mt-6 flex justify-end space-x-3 space-x-reverse">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              إلغاء
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {student ? 'حفظ التغييرات' : 'إضافة الطالب'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentModal;
