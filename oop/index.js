import { HOD } from './hod.js';

const args = process.argv.slice(2);
const params = {};

args.forEach(arg => {
  const [key, value] = arg.replace('--', '').split('=');
  params[key] = value;
});

const myHOD = new HOD();
if (params.student) myHOD.setStudent(params.student);
if (params.hod) myHOD.setHod(params.hod);
if (params.college) myHOD.setCollege(params.college);

console.log("--- Academic Info ---");
console.log(myHOD.info());