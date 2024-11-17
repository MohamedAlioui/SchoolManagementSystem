import React from 'react';
import { 
  Users,
  GraduationCap,
  School,
  TrendingUp,
  DollarSign
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const data = [
  { month: 'يناير', attendance: 85 },
  { month: 'فبراير', attendance: 88 },
  { month: 'مارس', attendance: 92 },
  { month: 'أبريل', attendance: 90 },
  { month: 'مايو', attendance: 85 },
  { month: 'يونيو', attendance: 89 }
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Stats Cards */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
              <Users className="h-6 w-6 text-blue-600 dark:text-blue-300" />
            </div>
            <div className="mr-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">إجمالي الطلاب</p>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">1,234</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
              <GraduationCap className="h-6 w-6 text-green-600 dark:text-green-300" />
            </div>
            <div className="mr-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">إجمالي المعلمين</p>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">45</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full">
              <School className="h-6 w-6 text-purple-600 dark:text-purple-300" />
            </div>
            <div className="mr-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">إجمالي الفصول</p>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">32</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-full">
              <DollarSign className="h-6 w-6 text-yellow-600 dark:text-yellow-300" />
            </div>
            <div className="mr-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">إجمالي الإيرادات</p>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">₪150,000</p>
            </div>
          </div>
        </div>
      </div>

      {/* Attendance Chart */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">معدل الحضور الشهري</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="attendance" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">النشاطات الأخيرة</h3>
        <div className="space-y-4">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-full">
                <TrendingUp className="h-5 w-5 text-blue-600 dark:text-blue-300" />
              </div>
              <div className="mr-4">
                <p className="text-sm font-medium text-gray-900 dark:text-white">تم تسجيل طالب جديد</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">منذ 5 دقائق</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;