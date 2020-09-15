type Button = {
    text: string
    class: string // empty for filled, 'outline' for outline
    link: string
    target: string
    last?: boolean
}

type ModalData = {
    name: string
    bodyText: string[] // newline inserted between each string
    buttons: Button[]
}

// For "upcoming events" section
type Event = {
    name: string
    date: string
    description: string
    image?: string
    buttons: Button[]
    last?: boolean
}

type Member = {
    image: string
    name: string
    role: string
    url?: string
}

type Contest = {
    shortname: string
    image: string
    name: string
    description: string
    registerLink: string
    who: string
    where: string[]
    when: string[]
    scheduleTimes: string[]
    scheduleContent: string[]
    sponsors: string[][] // pairs lol
}

// For individual pages

interface PageData {
    modal: boolean,
    modalData?: ModalData,
    path: string
}

interface HomeData extends PageData {
    upcomingEvents: Event[]
    noUpcomingEvents: boolean
}

interface AboutData extends PageData {
    members: Member[]
}

interface ContestData extends PageData, Contest {}


export { HomeData, AboutData, ModalData, ContestData, Event, Member, Contest };