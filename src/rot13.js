function rot13(message){
    return message.split('').map(c => {
    let cc = c.charCodeAt()
    if ((cc > 0x40 && cc < 0x5B) || (cc > 0x60 && cc < 0x7B)) {
        let high = (cc > 0x40 && cc < 0x5B) ? 0x5B : 0x7B
        c = String.fromCharCode(cc + ((cc + 13 >= high) ? -13 : 13))
    }
    return c
    }).join('')
  }

  const rot13_best = str => str.replace(/[a-z]/gi, letter => String.fromCharCode(letter.charCodeAt() + (letter.toLowerCase() <= 'm' ? 13: -13)));

  export default rot13_best