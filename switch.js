function getLetter(s) {
  let letter

  switch (true) {

    case "a,e,i,o,u".includes(s[0]):
      letter = "A"
      break
    
    case "bcdfg".includes(s[0]):
        letter = "B"
        break
        
    case "hjklm".includes(s[0]):
        letter = "C"
        break
        
    default:
        letter = "D"
        break
  }
  
  return letter
}

console.log(getLetter("ndfgt"))