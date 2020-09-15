import * as Koa from "koa";
import * as Router from "koa-router";
import { HomeData, AboutData, ContestData } from "../types/hpc";
import { getNearestModal } from "../data/hpc/modal";
import { getUpcomingEvents } from "../data/hpc/events";
import { getMembers } from "../data/hpc/members";
import { getContest } from "../data/hpc/contests"

const router = new Router<Koa.DefaultState, Koa.Context>();

router.prefix("/programming");

router.get("/", async (ctx, next) => {
  const modal = getNearestModal();
  const upcomingEvents = getUpcomingEvents();
  const homeData: HomeData = {
    modal: !!modal,
    modalData: modal,
    path: '..',
    noUpcomingEvents: upcomingEvents.length === 0,
    upcomingEvents,
  };
  await ctx.render("pages/hpc/home", homeData);
});
router.get("/about", async (ctx, next) => {
  const modal = getNearestModal();
  const members = getMembers();
  const aboutData: AboutData = {
    modal: !!modal,
    modalData: modal,
    path: '..',
    members,
  };
  await ctx.render("pages/hpc/about", aboutData);
});

router.get("/contest/:name", async (ctx, next) => {
    const contest = getContest(ctx.params.name);
    const contestData: ContestData = {...contest, modal: false, modalData: null, path: '../..'}
    if (contest) await ctx.render("pages/hpc/contest", contestData);
    // todo: throw 404 (I guess?)
})

export default router;
