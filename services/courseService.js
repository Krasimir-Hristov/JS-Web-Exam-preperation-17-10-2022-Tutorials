const Course = require("../models/Course");


async function getAllByDate() {
    return  Course.find({}).sort({ createdAt: 1 }).lean();
}

async function creatCourse (course) {
   return Course.create(course);
}

module.exports = {
    getAllByDate,
    creatCourse
}