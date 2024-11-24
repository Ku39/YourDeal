class MarkupUtil {
    async getStartMarkup() {
        return {
            reply_markup: {
                // inline_keyboard: [
                //     [
                //         {
                //             text: "",
                //             url: `https://t.me/${DEVELOPER}?text=Привет, я бы хотел узнать`,
                //         },
                //     ],
                //     [
                //         {
                //             text: lastCase ? "В начало" : "Следующий кейс",
                //             callback_data: `next_case:${identy}`,
                //         },
                //     ],
                // ],
            },
        }
    }
}
export default new MarkupUtil()
