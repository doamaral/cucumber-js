
module.exports = {
  testFor: (oneLetter, otherLetter) => {
      if (oneLetter === otherLetter) {
        return "ok";
      }
      return "nok";
    },
    isItFriday: (today) => {
      if (today == 'friday') {
        return "Yes";
      }
      return "Nope";
    }
};