import { Contest } from "../../types/hpc";

const contests: Contest[] = [
  //   {
  //     shortname: "hpi",
  //     image: "../../img/sub.jpg",
  //     name: "Harker Programming Invitational",
  //     description: `HPI is an annual algorithmic programming competition hosted by The Harker School's Programming Club. Teams of 2 or 3
  //                         students compete to solve the most problems in either the Novice or Advanced division on our online grading system in
  //                         the allotted time. This year, we will be hosting Mr. Jeremy Doig from Google Youtube and Google Virtual Reality as a
  //                         keynote speaker as well as representatives from various companies and colleges including IBM and CMU as part of a
  //                         sponsor fair. Lunch, including a vegetarian option, will be provided.`,
  //     registerLink: "https://google.com",
  //     who: "Any high schooler in the bay area is welcome.",
  //     where: ["The Harker School", "500 Saratoga Ave", "San Jose, CA", "95129"],
  //     when: ["Date: March 17th, 2019", "Time: 8:15AM - 2:00PM"],
  //     scheduleTimes: [
  //       "7:30 - 8:15",
  //       "8:15 - 8:45",
  //       "8:45 - 10:45",
  //       "10:50 - 11:30",
  //       "11:30 - 11:45",
  //       "11:50 - 12:25",
  //       "12:30 - 1:30",
  //       "1:30 - 2:00",
  //     ],
  //     scheduleContent: [
  //       "Registration",
  //       "Contest Setup",
  //       "Contest",
  //       "Keynote Speech",
  //       "Sponsor Talks",
  //       "Lunch",
  //       "Panel on CS + Ethics",
  //       "Awards",
  //     ],
  //     sponsors: [
  //       ["../../img/sub.jpg", "../../img/sub.jpg"],
  //       ["../../img/sub.jpg", "../../img/sub.jpg"],
  //       ["../../img/sub.jpg"],
  //     ],
  //   },
  {
    shortname: "gpl",
    image: "../../img/gpl.JPG",
    name: "Girls Programming League",

    description: `GPL is an annual algorithmic programming competition hosted by The Harker School's Programming Club. Teams of students compete to solve the most problems in either the Novice or Advanced division in the allotted time. This year, the contest's theme is data science and big data, and there will also be a women in STEM panel centered around COVID-19 and its impacts.`,
    registerLink:
      "https://docs.google.com/forms/d/e/1FAIpQLScLEPp-Wf-jmKgCK2LYK7SJir8m7SXMTDDBGcD5IwOo5rx7ag/viewform",
    who: "Any high school girl is welcome.",
    where: ["Zoom!"],
    when: ["Date: September 19th, 2020", "Time: 9:00AM - 2:30PM"],
    scheduleTimes: [
      "9:00-9:15 [PST]",
      "9:15-11:15",
      "11:15-12:00",
      "12:00-1:00",
      "1:00-2:00",
      "2:00-2:30",
    ],
    scheduleContent: [
      "Check In",
      "Contest",
      "Keynot Speech",
      "Lunch",
      "Women in STEM Panel Discussion: COVID-19",
      "Closing Remarks + Awards",
    ],
    sponsors: [
      ["../../img/sub.jpg", "../../img/sub.jpg"],
      ["../../img/sub.jpg", "../../img/sub.jpg"],
      ["../../img/sub.jpg"],
    ],
  },
];

export function getContest(shortname: string): Contest {
    return contests.find(function(c) {
        return c.shortname == shortname;
    });
}