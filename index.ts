import * as Koa from "koa";
import * as Router from "koa-router";
import * as json from "koa-json";
import * as logger from "koa-logger";
import * as views from "koa-views";
import * as bodyParser from "koa-bodyparser"
import * as serve from 'koa-static'
import * as session from 'koa-session'
import * as Handlebars from 'handlebars'

import hpcRouter from './controllers/hpc'

import { registerComponentsWithinDirectory } from './helpers/componentRegistration'

import config from "./config"

const app = new Koa();
const router = new Router<Koa.DefaultState, Koa.Context>();

router.get("/", async (ctx, next) => {
    await ctx.render("pages/landing")
});

const sessionConfig: Partial<session.opts> = {
    key: config.auth.cookieKeys[0],
    maxAge: 1000 * 60 * 60 * 24 * 3 // 3 days
}

app.keys = config.auth.cookieKeys.slice(1);
app.use(session(sessionConfig, app));
app.use(json());
app.use(logger());
app.use(bodyParser());
app.use(views(__dirname + '/../views', {
    map: {
        hbs: "handlebars"
    },
    extension: "hbs"
}));

Handlebars.registerHelper('json', function (context) {
    return JSON.stringify(context);
});

registerComponentsWithinDirectory("./views/partials/hpc")

app.use(hpcRouter.routes())
app.use(router.routes());

app.use(serve('./assets', {}))

app.listen(config.server.port, () => {
    console.log("Server running on port " + config.server.port);
});

