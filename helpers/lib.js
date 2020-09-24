const testFor = (oneLetter, otherLetter) => {
  if (oneLetter === otherLetter) {
    return "ok";
  }
  return "nok";
}

module.exports = {
  testFor,
};