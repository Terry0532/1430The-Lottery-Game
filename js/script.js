function lottery() {
  let counter = window.prompt("enter a number");
  let result = [];
  let displayresult = document.getElementById("displayresult");
  for (let i = 0; i < counter; i++) {
    let randomnum = Math.floor(Math.random() * 99) + 1;
    result.push(randomnum);
  }
  for (let i = 0; i < result.length; i++) {
    if (i === result.length - 1) {
      displayresult.innerHTML += result[i];
    } else {
      displayresult.innerHTML += result[i] + "-";
    }
  }
}
