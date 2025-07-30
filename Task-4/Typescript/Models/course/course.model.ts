import BaseRepository from "../base/BaseRepo";
import { ICourse } from "./types";
import { initialCourses } from "./constants";

class CourseRepo extends BaseRepository<ICourse> {
    constructor() {
        super(initialCourses);
    }
}

export default CourseRepo;
