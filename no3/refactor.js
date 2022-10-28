function findFirstStringInBracket(str) {
  if (str.length > 0) {
    // Find bracket position
    let indexFirstBracketFound = str.indexOf("(");
    // Get string after first bracket
    if (indexFirstBracketFound >= 0) {
      let wordsAfterFirstBracket = str.substr(indexFirstBracketFound);
      if (wordsAfterFirstBracket) {
        wordsAfterFirstBracket = wordsAfterFirstBracket.substr(1);

        // Get position of closing bracket
        let indexClosingBracketFound = wordsAfterFirstBracket.indexOf(")");

        // substrings until the index of closing bracket
        if (indexClosingBracketFound >= 0) {
          return wordsAfterFirstBracket.substring(0, indexClosingBracketFound);
        } else {
          return "";
        }
      } else {
        return "";
      }
    } else {
      return "";
    }
  } else {
    return "";
  }
}