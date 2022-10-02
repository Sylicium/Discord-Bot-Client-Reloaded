
const Discord = {}


Discord.user = {
    tag: "Sylicium#3980",
    username: "Sylicium",
    id: "30856308Y639085",
    avatar: "6bpkzrgzergzg",
    locale: "fr&"
}

Discord.temp = {}

Discord.vars = {
    selectedZone: {
        zone: "guild", // guild / dm
        guildId: "30857307",
        channelId: "3908903863",
        dmChannelId: "30957305",
        dmChannelUserId: "30639085"
    }
}

// Discord.CODE = {} // partie qui s'occupera de faire les appels API. fonctions appelées par les fonctions de Discord.UI

Discord.UI = {}
Discord.UI.microfunc = {
    collapseCategory: (elem) => {
        let cat = elem.parentElement
        if(cat.className.includes("collapsed")) { /* uncollapse */
        cat.className = cat.className.split("collapsed").join("").trim()
            for(let i in cat.children) {
                let e = cat.children[i]
                if(!e.className) continue;
                if(!e.className.includes("category_channel_list")) continue;
                for(let chan_i in e.children) {
                    let chan = e.children[chan_i]
                    if(!chan.className) continue;
                    basicf._toggleHidden(chan, false)
                }
            }
        } else { /* collapse */
            cat.className = cat.className.split("collapsed").join("").trim() + " collapsed"
            for(let i in cat.children) {
                let e = cat.children[i]
                if(!e.className) continue;
                if(!e.className.includes("category_channel_list")) continue;
                for(let chan_i in e.children) {
                    let chan = e.children[chan_i]
                    if(!chan.className) continue;
                    if(chan.className.includes("selected") || chan.className.includes("unread")) {
                    } else { /* not selected and no messages */
                        basicf._toggleHidden(chan, true)
                    }
                }
            }
        }
    },
    selectChannel: (elem) => {
        let chan_list = document.getElementById("channel_list")

        for(let i in chan_list.children) {
            let temp1 = chan_list.children[i]
            if(!temp1.className) continue;

        }

    }
}