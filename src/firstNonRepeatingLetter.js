function firstNonRepeatingLetter(s) {
    let S = s.toLowerCase() 
    for(let i=0;i<S.length;i++) {
      let m = S.slice(0,i) + S.substring(i+1)
      if (m.indexOf(S[i]) == -1) {
          return s[i]
       }
    }
    return ""
  }
export default firstNonRepeatingLetter
