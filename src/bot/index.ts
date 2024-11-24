import dotenv from "dotenv"
import { Bot } from "grammy"
import { commandHandlers } from "./commands/hendlers"

dotenv.config()

class BotExample {
    token: string | undefined = process.env.TOKEN
    bot!: Bot

    constructor() {
        if (!this.token || !this.token.length) throw new Error("Не удалось получить токен")
        if (this.token) this.bot = new Bot(this.token)
    }

    async initial() {
        commandHandlers(this.bot)

        this.bot
            .start()
            .then(() => console.log("Бот запущен!"))
            .catch((err) => {
                console.error("Ошибка при запуске бота:", err)

                throw new Error("Не удалось подключить бота")
            })
        console.log("Бот подключен")
    }
}

export default new BotExample()
