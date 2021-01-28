import _ from "lodash";

const data = [
  {
    id: 1,
    author: "Katy Noel",
    createdAt: 1611711478455,
    image_url: "part1.jpg",
    likes: 1,
    comments: [],
    description: "",
    specialty: "Nail Artist",
  },
  {
    id: 2,
    author: "Claire McCarthy",
    createdAt: 1611711478455,
    image_url: "part2.jpg",
    likes: 13,
    comments: [],
    description: "",
    specialty: "Nail Technician",
  },
  {
    id: 3,
    author: "Katy Noel",
    createdAt: 1611711478455,
    image_url: "part3.jpg",
    likes: 1,
    comments: [],
    description: "",
    specialty: "Nail Technician",
  },
  {
    id: 4,
    author: "Duyen Nguyen",
    createdAt: 1611711478455,
    image_url: "part4.jpg",
    likes: 1,
    comments: [],
    description: "",
    specialty: "Nail Artist",
  },
  {
    id: 5,
    author: "Sinead Burke",
    createdAt: 1611711478455,
    image_url: "part5.jpg",
    likes: 1,
    comments: [],
    description: "",
    specialty: "Nail Artist",
  },
  {
    id: 6,
    author: "Aisling Noel",
    createdAt: 1611711478455,
    image_url: "part6.jpg",
    likes: 15,
    comments: [],
    description: "",
    specialty: "Nail Technician",
  },
];

const data_obj = { ...{}, ..._.mapKeys({ ...data }, "id") };
//const db = JSON.stringify(data_obj);

export { data, data_obj };
