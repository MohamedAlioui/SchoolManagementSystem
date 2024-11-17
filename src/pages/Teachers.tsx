import React, { useState } from 'react';
import { Plus, Search, Edit2, Trash2, Eye } from 'lucide-react';
import TeacherModal from '../components/teachers/TeacherModal';
import TeacherDetails from '../components/teachers/TeacherDetails';
import { Teacher } from '../types/teacher';
import { v4 as uuidv4 } from 'uuid'; // Ensure uuid package is installed

const mockTeachers: Teacher[] = [
  {
    id: '1',
    name: 'mohamedali ',
    teacherId: 'T2024001',
    subject: 'الرياضيات',
    phone: '0599123456',
    email: 'mohamed@example.com',
    address: 'kelibia',
  },
];

const TeacherPage = () => {
  const [teachers, setTeachers] = useState<Teacher[]>(mockTeachers);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);
  const [isViewMode, setIsViewMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddTeacher = (teacher: Teacher) => {
    setTeachers([...teachers, { ...teacher, id: uuidv4() }]);
    setIsModalOpen(false);
  };

  const handleEditTeacher = (teacher: Teacher) => {
    setTeachers(teachers.map((t) => (t.id === teacher.id ? teacher : t)));
    setIsModalOpen(false);
    setSelectedTeacher(null);
  };

  const handleDeleteTeacher = (id: string) => {
    if (window.confirm('هل أنت متأكد من حذف هذا المعلم؟')) {
      setTeachers(teachers.filter((t) => t.id !== id));
    }
  };

  const filteredTeachers = teachers.filter(
    (teacher) =>
      teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.teacherId.includes(searchTerm)
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          إدارة المعلمين
        </h1>
        <button
          onClick={() => {
            setSelectedTeacher(null);
            setIsModalOpen(true);
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <Plus size={20} />
          <span>إضافة معلم</span>
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="البحث عن معلم..."
              className="w-full pl-4 pr-10 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              dir="rtl"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  رقم المعلم
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  الاسم
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  المادة
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  الإجراءات
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {filteredTeachers.map((teacher) => (
                <tr key={teacher.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {teacher.teacherId}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {teacher.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {teacher.subject}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-3 space-x-reverse">
                      <button
                        onClick={() => {
                          setSelectedTeacher(teacher);
                          setIsViewMode(true);
                        }}
                        className="text-blue-600 hover:text-blue-900 dark:hover:text-blue-400"
                      >
                        <Eye size={18} />
                      </button>
                      <button
                        onClick={() => {
                          setSelectedTeacher(teacher);
                          setIsModalOpen(true);
                        }}
                        className="text-yellow-600 hover:text-yellow-900 dark:hover:text-yellow-400"
                      >
                        <Edit2 size={18} />
                      </button>
                      <button
                        onClick={() => handleDeleteTeacher(teacher.id)}
                        className="text-red-600 hover:text-red-900 dark:hover:text-red-400"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <TeacherModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedTeacher(null);
        }}
        onSubmit={selectedTeacher ? handleEditTeacher : handleAddTeacher}
        teacher={selectedTeacher}
      />

      <TeacherDetails
        isOpen={isViewMode}
        onClose={() => {
          setIsViewMode(false);
          setSelectedTeacher(null);
        }}
        teacher={selectedTeacher}
      />
    </div>
  );
};

export default TeacherPage;
