

let DBCR_API;


function __main__() {

const Discord = require("discord.js")

DBCR_API = {
    login: (token) => {
        Bot.login(token)
        _log("trying to log with token",token)
    }

}
    
let Bot = new Discord.Client()



Bot.on("ready", () => {
    _log("logged in.")
    setTimeout(() => {
        document.location.href = document.location.origin + "/application/pages/app.html"

        setTimeout(() => {
            _log("coucou")
            try {
                DBCR_API_PATTERNS.html.drawGuilds(DBCR_API_PATTERNS.html.getGuilds(Bot.guilds.cache.map(x => x)))
            } catch(e) {
                _log(`${e}`)
                _log(e)
            }
        }, 2000)
    }, 1000)
})


};__main__()






