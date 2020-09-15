import { Event } from "../../types/hpc";
import { DateTime } from "luxon";

const MAX_EVENTS_SHOWN = 1;

type EventDisplayData = {
  event: Event;
  date: DateTime;
};

// event data
const events: EventDisplayData[] = [
  {
    event: {
      name: "Girls Programming League (GPL)",
      date: "September 19th",
      description: `GPL is an annual algorithmic programming competition hosted by The Harker School's Programming Club. Teams of students compete to solve the most problems in either the Novice or Advanced division in the allotted time. This year, the contest's theme is data science and big data, and there will also be a women in STEM panel centered around COVID-19 and its impacts.`,
      image: "img/gpl.JPG",
      buttons: [
        {
          text: "GPL Website",
          class: "outline",
          link: "https://www.girlsprogrammingleague.org/",
          target: "_blank",
        },
        {
          text: "Learn more and register",
          class: "",
          link: "/programming/contest/gpl",
          target: "_self",
        },
      ],
    },
    date: DateTime.fromObject({ month: 9, day: 19 }),
  },
  //   {
  //     event: {
  //       name: "Lecture",
  //       date: "4/3 2PM",
  //       description: `Harker Programming club will be lecturing on the problems below in two weeks (week of Oct 7). We will be touching on
  //                             problems at all levels, so everyone interested will have a problem that suits their level of experience.`,
  //       buttons: [
  //         {
  //           text: "Novice Problems",
  //           class: "outline",
  //           link: "https://google.com",
  //           target: "_blank",
  //         },
  //         {
  //           text: "Intermediate Problems",
  //           class: "outline",
  //           link: "https://google.com",
  //           target: "_blank",
  //         },
  //         {
  //           text: "Advanced Problems",
  //           class: "outline",
  //           link: "https://google.com",
  //           target: "_blank",
  //         },
  //       ],
  //     },
  //     date: DateTime.local().startOf("week"),
  //   },
];

// if return negative, e1 is after e2
// if e2.duration - e1.duration is negative, e1 is after e2
export function getUpcomingEvents(): Event[] {
  // sort with 'closest' at lowest index
  const results: Event[] = events
    .concat()
    .filter((e) => e.date.diffNow().as('seconds') > 0)
    .sort((e1, e2) => {
      return e1.date.diffNow().as("seconds") - e2.date.diffNow().as("seconds");
    })
    .slice(0, MAX_EVENTS_SHOWN)
    .map((s) => s.event)

    if (results.length > 0) results[results.length-1].last = true

    return results
}
