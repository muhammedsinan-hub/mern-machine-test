
import { HOD } from './hod.js';
import assert from 'assert';

try {
  const testHod = new HOD();
  testHod.setStudent("Sinan");
  testHod.setHod("abcd");
  testHod.setCollege("MIT");

  const expected = "College: MIT\nHOD: abcd\nStudent: Sinan";
  
  assert.strictEqual(testHod.info(), expected);
  
  console.log("✅ Success: The HOD class logic is working perfectly!");
} catch (err) {
  console.error("❌ Test Failed:", err.message);
}