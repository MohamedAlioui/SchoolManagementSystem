import React, { useState, useEffect } from 'react';
import { Teacher } from '../../types/teacher';

interface TeacherModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (teacher: Teacher) => void;
  teacher: Teacher | null;
}

const TeacherModal: React.FC<TeacherModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  teacher,
}) => {
  const [name, setName] = useState('');
  const [teacherId, setTeacherId] = useState('');
  const [subject, setSubject] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    if (teacher) {
      setName(teacher.name);
      setTeacherId(teacher.teacherId);
      setSubject(teacher.subject);
      setPhone(teacher.phone);
      setEmail(teacher.email);
      setAddress(teacher.address);
    }
  }, [teacher]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      id: teacher ? teacher.id : '', // Id will be auto-generated when adding
      name,
      teacherId,
      subject,
      phone,
      email,
      address,
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {teacher ? 'تعديل معلم' : 'إضافة معلم'}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              الاسم
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              رقم المعلم
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={teacherId}
              onChange={(e) => setTeacherId(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              المادة
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              رقم الهاتف
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              البريد الإلكتروني
            </label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              العنوان
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="flex justify-end gap-4">
            <button
              type="button"
              className="text-gray-600 dark:text-gray-300"
              onClick={onClose}
            >
              إلغاء
            </button>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
            >
              {teacher ? 'تعديل' : 'إضافة'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeacherModal;
