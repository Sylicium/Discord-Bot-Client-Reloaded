

let _log = (...args) => {
    let elem = document.createElement("p")
    elem.innerHTML = [...args].join("\n")
    try { document.getElementById("logs").appendChild(elem) } catch(e) {}
    try { document.getElementById("messages").appendChild(elem) } catch(e) {}
}

let con = {
    log: console.log,
    error: console.error,
    warn: console.warn
}

console.log = (...args) => {
    _log(...args)
}
console.error = (...args) => {
    _log(...args)
}
console.warn = (...args) => {
    _log(...args)
}


process
  .on('unhandledRejection', (reason, p) => {
    console.log(reason, '[DBG] Unhandled Rejection at Promise', p);
    _log(reason,p)
  })
  .on('uncaughtException', err => {
    console.log(err, '[DBG] Uncaught Exception thrown BBBBBBBBBB');
    _log(err)
  });


// OTI4MzA3OTYxOTM0Mjc0NTkw.Gwtd5b.drj1KEYgtKG8eK4w13HmYHE9XQslXfrw-Ag248



const BasicF = {
    parseHTML: (string) => {
        let DOMparser = new DOMParser(); // DOMparser.parseFromString("string")
        let string2 = `<div class="ZojGHNZkjZOJzcAEJNGZACILkgjhazLCDigjhlibzdfcikbgzakCieeeeeeeeebdhbikhbfIZHKCDFikZAC">${string}</div>`
        //console.log(string2)
        let a = DOMparser.parseFromString(string2, "text/html")
        let b = a.getElementsByClassName("ZojGHNZkjZOJzcAEJNGZACILkgjhazLCDigjhlibzdfcikbgzakCieeeeeeeeebdhbikhbfIZHKCDFikZAC")[0].firstChild
        return b
    }
}



