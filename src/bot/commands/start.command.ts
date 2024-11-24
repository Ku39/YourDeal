import { Composer } from "grammy"
import IUserState from "../../types/IUserState"

const userState: IUserState = new Map()

const startCommand = new Composer()

startCommand.command("start", async (ctx) => {
    const userId = ctx.update?.message?.from.id || ctx.update.message?.chat.id
    if (userId)
        // const markup =
        ctx.reply("hello")
})

// const userState = new Map()

// startCommand.command("start", async (ctx) => {
//     const userId = ctx.update.message.from.id /* ID пользователя */
//     const firstName = ctx.update.message.from.first_name /* Имя пользователя */
//     let match = ctx.match /* Параметры переданные при вызове команды старт */

//     const findMarker = await metrikaUtil.findMarkerById(match).catch((err) => {
//         console.log(err)
//     }) /* Проверка, есть ли такой маркер приглашения */
//     if (!findMarker) match = "" /* Если маркера нет, то сбрасываем переданный параметр в дефолт*/

//     const findUser = await prisma.user.findFirst({ where: { tgid: userId } }).catch((err) => {
//         console.log(err)
//     }) /* Смотрим, был ли пользователь ранее зарегестрирован*/

//     if (findUser) {
//         let marker = "default"
//         if (findUser.markerId) {
//             const markerName = await metrikaUtil.findMarkerById(findUser.markerId).catch((err) => {
//                 console.log(err)
//             })
//             if (markerName) marker = markerName.name
//         }
//         const uniqMessages = await caseUtil.getCasesListByUser(marker, userId)
//         const needCase = uniqMessages[0]
//         userState.set(userId, uniqMessages)

//         const message = caseUtil.getMessage(needCase)
//         const extra = startUtil.getExtra(0)
//         await startUtil.sendMessage(ctx, message, extra)
//     } else {
//         let marker = "default"
//         if (match.length) {
//             const markerName = await metrikaUtil.findMarkerById(match).catch((err) => {
//                 console.log(err)
//             })
//             if (markerName) marker = markerName.name
//         }
//         const uniqMessages = await caseUtil.getCasesListByUser(marker).catch((err) => {
//             console.log(err)
//         })
//         const needCase = uniqMessages[0]
//         userState.set(userId, uniqMessages)

//         const message = caseUtil.getMessage(needCase)
//         const extra = startUtil.getExtra(0)
//         await startUtil.sendMessage(ctx, message, extra)
//         if (match) {
//             await prisma.user
//                 .create({
//                     data: { name: firstName, tgid: userId, markerId: match },
//                 })
//                 .catch((err) => {
//                     console.log(err)
//                 })
//         } else {
//             await prisma.user.create({
//                 data: { name: firstName, tgid: userId },
//             })
//         }
//     }
// })

// startCommand.on("callback_query:data", async (ctx, next) => {
//     const userId = ctx.callbackQuery.from.id
//     const event = ctx.update.callback_query.data
//     if (event.startsWith("next_case:")) {
//         let state = userState.get(userId)
//         if (!state) {
//             const user = await startUtil.getUser(userId)
//             let marker = "default"
//             if (user.markerId) {
//                 const markerName = await metrikaUtil.findMarkerById(user.markerId)
//                 if (markerName) marker = markerName.name
//             }
//             state = await caseUtil.getCasesListByUser(marker, userId)
//             if (state) userState.set(userId, state)
//         }
//         const [id] = event.match(/(?<=next_case:)\d+/)
//         let lastCase = false
//         let newId = +id + 1
//         if (newId > state.length - 2) {
//             lastCase = true
//         }
//         if (newId > state.length - 1) {
//             newId = 0
//             lastCase = false
//         }
//         const oneCase = state[newId]
//         const message = caseUtil.getMessage(oneCase)

//         const extra = lastCase ? startUtil.getExtra(newId, true) : startUtil.getExtra(newId)
//         await ctx.editMessageText(message.text, extra).catch((err) => {
//             console.log(err)
//         })
//     } else {
//         await next()
//     }
// })

export default startCommand
