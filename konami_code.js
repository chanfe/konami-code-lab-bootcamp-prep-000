const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  // your code here
  let index = 0;
  function onKeyDownHandler(e){
    const key = keyCode;
    console.log(key);
    if(key === codes[index]) {
      index++;
      console.log(index);
      if(index === codes.length){
        alert("Congrat!!")
      
        index = 0;
      }
    } else {
      index = 0;
    }
  }
}
