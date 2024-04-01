const McqSubData = [
  {
    id: 1,
    title: "BSc.CSIT Entrance Preparation",
    slug: "BSc.CSIT-Entrance-Preparation",
  },
  {
    id: 2,
    title: "BCA Entrance Preparation",
    slug: "BCA-Entrance-Preparation",
  },
  {
    id: 3,
    title: "Engineering",
    slug: "Engineering",
  },
];

const McqSubjects = [
  {
    id: 1,
    parentId: 1,
    title: "Physics",
    slug: "Physics",
  },
  {
    id: 2,
    parentId: 1,
    title: "Chemestry",
    slug: "Chemestry",
  },
  {
    id: 3,
    parentId: 1,
    title: "Math",
    slug: "Math",
  },
  {
    id: 4,
    parentId: 1,
    title: "English",
    slug: "English",
  },
  {
    id: 5,
    parentId: 2,
    title: "English",
    slug: "English",
  },
];

const McqSubjectUnit = [
  {
    id: 1,
    parentId: 1,
    title: "Unit 1",
    slug: "Unit-1",
  },
  {
    id: 2,
    parentId: 1,
    title: "Unit 2",
    slug: "Unit-2",
  },
  {
    id: 3,
    parentId: 1,
    title: "Unit 3",
    slug: "Unit-3",
  },
];

export { McqSubData, McqSubjects, McqSubjectUnit };
