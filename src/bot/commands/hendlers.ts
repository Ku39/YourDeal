// import createCaseCommand from "./createCase.command.js"
// import createEventCommand from "./createEvent.command.js"
// import generateUrlCommand from "./generateUrl.command.js"
// import getCasesCommand from "./getCases.commands.js"
// import helpCommand from "./help.comman.js"
// import startCommand from "./start.command.js"

import { Bot } from "grammy"
import startCommand from "./start.command"

export const commandHandlers = (bot: Bot) => {
    bot.use(startCommand)
    // bot.use(startCommand)
    // bot.use(generateUrlCommand)
    // bot.use(helpCommand)
    // bot.use(createEventCommand)
    // bot.use(createCaseCommand)
    // bot.use(getCasesCommand)
}
