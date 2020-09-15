import { ModalData } from '../../types/hpc'
import { DateTime } from 'luxon'

type ModalDisplayData = {
    modal: ModalData
    start: DateTime // when to start displaying the modal
    end: DateTime   // when to stop displaying the modal
    date: DateTime  // when the event actually is
}

// Modal display data
const modals: ModalDisplayData[] = [
  {
    modal: {
      name: "Girls Programming League",
      bodyText: [
        `GPL is an annual algorithmic programming competition hosted by The Harker School's Programming Club. Teams of students compete to solve the most problems in either the Novice or Advanced division in the allotted time. This year, the contest's theme is data science and big data, and there will also be a women in STEM panel centered around COVID-19 and its impacts.`,
        "",
        "Date: September 19th, 2020",
        "Time: 9:00AM - 2:30PM [PST]",
      ],
      buttons: [
        {
          text: "Learn more",
          class: "outline",
          link: "/programming/contest/gpl",
          target: "_self",
        },
        {
          text: "Register now",
          class: "",
          link:
            "https://docs.google.com/forms/d/e/1FAIpQLScLEPp-Wf-jmKgCK2LYK7SJir8m7SXMTDDBGcD5IwOo5rx7ag/viewform",
          target: "_blank",
          last: true,
        },
      ],
    },
    start: DateTime.fromObject({ month: 8, day: 1 }),
    end: DateTime.fromObject({ month: 9, day: 18 }),
    date: DateTime.fromObject({ month: 9, day: 19 }),
  },
];

// Gets the nearest modal that has a valid timeframe for the current date
export function getNearestModal(): ModalData {
    if (modals.length===0) return null

    // start before now and end after now
    const validModals = modals.filter((m) => m.start.diffNow().as('seconds') < 0 && m.end.diffNow().as('seconds') > 0)

    if (validModals.length===0) return null;

    let closest = validModals[0];
    let minDiff = closest.end.diffNow().as("seconds");

    validModals.forEach((m, i) => {
        const diff = m.end.diffNow().as('seconds')
        if (diff < minDiff) {
            minDiff = diff
            closest = m;
        }
    })

    // Process the duration string - units of either days or hours
    const dur = closest.date.diffNow()

    let name = closest.modal.name + ` is coming soon!`
    if (dur.as('days') > 1) name = closest.modal.name + ` is in ${dur.as('days').toFixed(0)} days!`
    else if (dur.as('hours') > 1) name = closest.modal.name + ` is in ${dur.as('hours').toFixed(0)} hours!`
    else {
        console.error("This should never happen")
    }

    return {
        name,
        bodyText: closest.modal.bodyText,
        buttons: closest.modal.buttons
    }
}