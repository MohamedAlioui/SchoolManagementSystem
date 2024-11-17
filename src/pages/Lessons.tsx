import React, { useState } from 'react';
import { Lesson } from '../types/lesson';
import { Plus, Edit2, Trash2 } from 'lucide-react';
import LessonModal from '../components/lessons/LessonModal';
import { v4 as uuidv4 } from 'uuid';

const mockLessons: Lesson[] = [
  {
    id: '1',
    name: 'الحصة الأولى',
    teacher: 'أحمد سعيد',
    startTime: '08:00',
    endTime: '09:00',
    room: 'A101',
    description: 'مقدمة في الرياضيات',
  },
];

const Lessons = () => {
  const [lessons, setLessons] = useState<Lesson[]>(mockLessons);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);

  const handleAddLesson = (lesson: Lesson) => {
    setLessons([...lessons, { ...lesson, id: uuidv4() }]);
    setIsModalOpen(false);
  };

  const handleEditLesson = (lesson: Lesson) => {
    setLessons(lessons.map((l) => (l.id === lesson.id ? lesson : l)));
    setIsModalOpen(false);
    setSelectedLesson(null);
  };

  const handleDeleteLesson = (id: string) => {
    if (window.confirm('هل أنت متأكد من حذف هذه الحصة؟')) {
      setLessons(lessons.filter((lesson) => lesson.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">إدارة الحصص</h1>
        <button
          onClick={() => {
            setSelectedLesson(null);
            setIsModalOpen(true);
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <Plus size={20} />
          <span>إضافة حصة</span>
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  اسم الحصة
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  المعلم
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  الوقت
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  القاعة
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  الإجراءات
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
              {lessons.map((lesson) => (
                <tr key={lesson.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{lesson.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{lesson.teacher}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{lesson.startTime} - {lesson.endTime}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{lesson.room}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-right space-x-3">
                    <button
                      onClick={() => {
                        setSelectedLesson(lesson);
                        setIsModalOpen(true);
                      }}
                      className="text-yellow-500 hover:text-yellow-600"
                    >
                      <Edit2 size={20} />
                    </button>
                    <button
                      onClick={() => handleDeleteLesson(lesson.id)}
                      className="text-red-500 hover:text-red-600"
                    >
                      <Trash2 size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <LessonModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={selectedLesson ? handleEditLesson : handleAddLesson}
        lesson={selectedLesson}
      />
    </div>
  );
};

export default Lessons;
