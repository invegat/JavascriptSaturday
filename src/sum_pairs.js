const sum_pairs = (ints, s) => {
    let checked = {}
    for (let i = 1; i < ints.length; i++) {
        let minj = ((checked[ints[i]] != undefined) ? checked[ints[i]] : 0)
        for (let j = minj; j < i; j++) {
            if (ints[i] + ints[j] == s) {
                return [ints[j], ints[i]]
            } const sum_pairs = (ints, s) => {
                for (let i = 1; i < ints.length; i++) {
                    for (let j = 0; j < i; j++) {
                        if (ints[i] + ints[j] == s) {
                            return [ints[j], ints[i]]
                        }
                    }
                }
                //     console.log(ints,r)
                return undefined
            }
        }
        checked[ints[i]] = i

    }
    return undefined
}


var sum_pairs_best=function(ints, s){
    var seen = {}
    for (var i = 0; i < ints.length; ++i) {
      if (seen[s - ints[i]]) return [s - ints[i], ints[i]];
      seen[ints[i]] = true
    }
  }
export default sum_pairs_best