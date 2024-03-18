const SubjectData = [
  {
    id: 1,
    parentId: 1,
    title: "Nepali",
  },
  {
    id: 2,
    parentId: 1,
    title: "English",
  },
  {
    id: 3,
    parentId: 1,
    title: "Account",
  },
  {
    id: 4,
    parentId: 1,
    title: "Mathematics",
  },
  {
    id: 5,
    parentId: 2,
    title: "Softwre engineering",
  },
];

const SyllabusData = [
  {
    id: 1,
    title: "syllabus",
    parentId: 1,
    pdf: "../data/cv.pdf",
  },
  {
    id: 2,
    title: "syllabus",
    parentId: 2,
    pdf: "../data/cv.pdf",
  },
];

export { SubjectData, SyllabusData };
