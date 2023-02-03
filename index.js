function isWin(item) {
    return item.result === "W";
  }
  
  function superbowlWin(array) {
  let win = array.find(isWin);
  if (win) {
    return win.year;
  } else {
    return undefined;
  }
  }