import { Member } from "../../types/hpc";

const members: Member[] = [
  {
    image: "../img/saloni.png",
    name: "Saloni Shah",
    role: "Co-President",
  },
  {
    image: "../img/square.jpg",
    name: "Sidra Xu",
    role: "Co-President",
  },
  {
    image: "../img/rishab.jpg",
    name: "Rishab Parthasarathy",
    role: "Contest Manager",
  },
  {
    image: "../img/sally.png",
    name: "Sally Zhu",
    role: "Asst. Contest Manager",
  },
  {
    image: "../img/square.jpg",
    name: "Daniel Wang",
    role: "Head Problem Writer",
  },
  {
    image: "../img/square.jpg",
    name: "Tiffany Chang",
    role: "Treasurer",
  },
  {
    image: "../img/sabrina.jpg",
    name: "Sabrina Zhu",
    role: "Event Coordinator",
  },
  {
    image: "../img/square.jpg",
    name: "Alexa Lowe",
    role: "Communications",
  },
  {
    image: "https://avatars3.githubusercontent.com/u/45477172?s=460",
    name: "Gloria Zhu",
    role: "Design",
    url: "https://gloriazh.com",
  },
  {
    image: "../img/square.jpg",
    name: "William Zhao",
    role: "Problem Writer",
  },
  {
    image: "../img/square.jpg",
    name: "Sally Zhu",
    role: "Problem Writer",
  },
  {
    image: "../img/square.jpg",
    name: "Ashley Hu",
    role: "Problem Writer",
  },
  {
    image: "../img/square.jpg",
    name: "Alec Zhang",
    role: "Problem Writer",
  },
];

export function getMembers() {
    return members
}