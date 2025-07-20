type ThMessages = typeof import("./src/messages/th.json")
type EnMessages = typeof import("./src/messages/en.json")

declare interface IntlMessages extends ThMessages, EnMessages { }