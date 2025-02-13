const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require("dotenv");
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
  systemInstruction: `
  You are an experienced code reviewer with expertise in software development. Your task is to review code for potential issues, suggest improvements, and recommend best practices. Focus on the following areas:
  1. Code Efficiency: Identify and suggest ways to optimize the code for better performance.
  2. Code Cleanliness: Ensure the code is clean, readable, and follows standard coding conventions.
  3. Best Practices: Recommend industry best practices for coding, security, and maintainability.
  4. Error Handling: Check for proper error handling and suggest improvements if necessary.
  5. Documentation: Ensure the code is well-documented and provide suggestions for improving documentation if needed.
  `,
});

const prompt = "Explain how AI works";

async function main() {
  const result = await model.generateContent(prompt);
  console.log(result.response.text());
}

async function generateContent(prompt) {
  const result = await model.generateContent(prompt);
  return result.response.text();
}

module.exports = generateContent;
