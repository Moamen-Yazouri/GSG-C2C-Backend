# ✅ Task-4: TypeScript Repository Pattern

This project demonstrates a complete implementation of a **generic, type-safe repository pattern** using TypeScript. It includes full CRUD operations, in-memory data handling, and test scripts for three distinct data models.

## 📌 What I Achieved

- ✅ Designed and implemented a **generic repository interface** with full CRUD and filtering capabilities.
- ✅ Built a reusable **BaseRepository** class.
- ✅ Created **three model-specific repositories**:
  - `UserRepo`
  - `BookRepo`
  - `CourseRepo`
- ✅ Seeded each repository with initial static data.
- ✅ Created test files to demonstrate and verify functionality of each repository.

## 🧪 How to Test

After building the project (`tsc`), go to:


There you'll find **three test files**:
- `user.test.js`
- `book.test.js`
- `course.test.js`

Each file contains test cases for its corresponding repository. You can run any of them using Node.js:

```bash
node dist/test/user.test.js
node dist/test/book.test.js
node dist/test/course.test.js
