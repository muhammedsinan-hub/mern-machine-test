import { Student } from './student.js';

export class HOD extends Student {
  constructor() {
    super(); 
    this.hodName = "";
  }

  setStudent(name) { this.studentName = name; }
  setHod(name) { this.hodName = name; }
  setCollege(name) { this.collegeName = name; }

  info() {
    return `College: ${this.collegeName}\nHOD: ${this.hodName}\nStudent: ${this.studentName}`;
  }
}