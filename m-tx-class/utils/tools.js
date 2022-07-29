function filterCourseData(data, field) {
    // field字段为全部课程
    if (field == 1) {
        return data;
    }

    return data.filter((item) => item.field == field);
}

export { filterCourseData };