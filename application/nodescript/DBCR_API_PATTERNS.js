const { Guild } = require("discord.js");


let DBCR_API_PATTERNS;


function __main__() {


DBCR_API_PATTERNS = {
    html: {
        getGuild: (guildObject) => {
            return BasicF.parseHTML(`
            <div class="guild">
                ${guildObject.iconURL() ?
                    `<img class="guild_icon" src="${guildObject.iconURL()}">`
                : `<label class="text">${guildObject.name.split(" ").map(x => { return x.substr(0,1)}).join("")}</label>`
                }
            </div>
            `)
        },
        getGuilds: (guildObjectList) => {
            return guildObjectList.map(x => DBCR_API_PATTERNS.html.getGuild(x))
        },
        drawGuilds: (guildHTMLList) => {
            let elem_guild_list = document.getElementById("guild_list")
            if(!elem_guild_list) return console.error("Element #guild_list not found.")
            for(let i in guildHTMLList) {
                elem_guild_list.appendChild(guildHTMLList[i])
            }
        },

        getChannel: (channelObject) => {
            // return html part
        },
        getChannels: (channelObjectList) => {
            return channelObjectList.map(x => DBCR_API_PATTERNS.html.getChannel(x))
        },

        getMessage: (messageObject) => {
            // return html part
        },
        getMessages: (messageObjectList) => {
            return messageObjectList.map(x => DBCR_API_PATTERNS.html.getMessage(x))
        }
    }
}


};__main__()






