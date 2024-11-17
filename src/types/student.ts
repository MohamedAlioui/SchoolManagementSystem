// File: src/types/student.ts
export interface Student {
    id?: string; // Optional for cases like adding new students
    name: string; // Student's full name
    studentId: string; // Unique identifier for the student
    grade: string; // Grade level (e.g., "الصف العاشر")
    parentName: string; // Parent or guardian's name
    phone: string; // Contact number
    email: string; // Email address
    address: string; // Residential address
    attendance: number; // Attendance percentage (0-100)
    fees: {
      total: number; // Total fees
      paid: number; // Fees paid
      remaining: number; // Remaining fees
    };
  }
  