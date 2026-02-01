
import { HOD } from './hod.js';
import assert from 'assert';

try {
  const testHod = new HOD();
  testHod.setStudent("Alice");
  testHod.setHod("Dr. Smith");
  testHod.setCollege("MIT");

  const expected = "College: MIT\nHOD: Dr. Smith\nStudent: Alice";
  
  assert.strictEqual(testHod.info(), expected);
  
  console.log("✅ Success: The HOD class logic is working perfectly!");
} catch (err) {
  console.error("❌ Test Failed:", err.message);
}