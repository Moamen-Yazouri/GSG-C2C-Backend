import CourseRepo from "../Models/course/course.model";

const course: CourseRepo = new CourseRepo();

const courseTester = async () => {
  console.log("Initial Courses:");
  console.log(await course.getAllItems());

  await course.createNewItem({
    id: "c4",
    name: "Advanced TypeScript",
    field: "Web Development",
    teacher: "Sarah Connor",
    price: 119.99,
  });

  await course.deleteItemById("c2");

  console.log("Courses After Add/Delete:");
  console.log(await course.getAllItems());

  console.log("Filter by Field:");
  console.log(await course.findByFilter({ field: "Web Development" }));
};

courseTester();
