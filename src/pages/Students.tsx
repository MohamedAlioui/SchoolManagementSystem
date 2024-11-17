import React, { useState } from 'react';
import { Plus, Search, Edit2, Trash2, Eye } from 'lucide-react';
import StudentModal from '../components/students/StudentModal';
import StudentDetails from '../components/students/StudentDetails';
import { Student } from '../types/student.ts';
import { v4 as uuidv4 } from 'uuid'; // Ensure uuid package is installed

const mockStudents: Student[] = [
  {
    id: '1',
    name:'mohamed',
    studentId: '2024001',
    grade: '7 B 7 ',
    parentName: ' fawzi',
    phone: '20778911',
    email: 'ahmed@example.com',
    address: 'utique bizerte',
    attendance: 95,
    fees: {
      total: 1000,
      paid: 750,
      remaining: 250,
    },
  },
];

const Students = () => {
  const [students, setStudents] = useState<Student[]>(mockStudents);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [isViewMode, setIsViewMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddStudent = (student: Student) => {
    setStudents([...students, { ...student, id: uuidv4() }]);
    setIsModalOpen(false);
  };

  const handleEditStudent = (student: Student) => {
    setStudents(students.map((s) => (s.id === student.id ? student : s)));
    setIsModalOpen(false);
    setSelectedStudent(null);
  };

  const handleDeleteStudent = (id: string) => {
    if (window.confirm('هل أنت متأكد من حذف هذا الطالب؟')) {
      setStudents(students.filter((s) => s.id !== id));
    }
  };

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.studentId.includes(searchTerm)
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          إدارة الطلاب
        </h1>
        <button
          onClick={() => {
            setSelectedStudent(null);
            setIsModalOpen(true);
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <Plus size={20} />
          <span>إضافة طالب</span>
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="البحث عن طالب..."
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
                  رقم الطالب
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  الاسم
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  الصف
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  نسبة الحضور
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  الرسوم المتبقية
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  الإجراءات
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {filteredStudents.map((student) => (
                <tr key={student.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {student.studentId}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {student.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {student.grade}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mr-2">
                        <div
                          className="bg-blue-600 h-2.5 rounded-full"
                          style={{ width: `${student.attendance}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-900 dark:text-white">
                        {student.attendance}%
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    ₪{student.fees.remaining}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-3 space-x-reverse">
                      <button
                        onClick={() => {
                          setSelectedStudent(student);
                          setIsViewMode(true);
                        }}
                        className="text-blue-600 hover:text-blue-900 dark:hover:text-blue-400"
                      >
                        <Eye size={18} />
                      </button>
                      <button
                        onClick={() => {
                          setSelectedStudent(student);
                          setIsModalOpen(true);
                        }}
                        className="text-yellow-600 hover:text-yellow-900 dark:hover:text-yellow-400"
                      >
                        <Edit2 size={18} />
                      </button>
                      <button
                        onClick={() => handleDeleteStudent(student.id)}
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

      <StudentModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedStudent(null);
        }}
        onSubmit={selectedStudent ? handleEditStudent : handleAddStudent}
        student={selectedStudent}
      />

      <StudentDetails
        isOpen={isViewMode}
        onClose={() => {
          setIsViewMode(false);
          setSelectedStudent(null);
        }}
        student={selectedStudent}
      />
    </div>
  );
};

export default Students;
