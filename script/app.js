const showDialogButton = document.querySelector(".showDialogButton");
const dialog = document.querySelector(".dialog");
const canvasRef = document.querySelector(".canvasRef");
const ctx = canvasRef.getContext("2d");
console.log(ctx);

// ctx.strokeStyle = "red";
// ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(10, 10);
ctx.lineTo(50, 10);
ctx.stroke();

ctx.globalCompositeOperation = "destination-out";
ctx.lineWidth = 2;
ctx.beginPath();
ctx.moveTo(10, 10);
ctx.lineTo(50, 10);
ctx.stroke();
ctx.lineWidth = 1;
ctx.globalCompositeOperation = "source-over";

// ctx.strokeStyle = "blue";
// ctx.beginPath();
// ctx.moveTo(20, 20);
// ctx.lineTo(50, 20);
// ctx.stroke();

// ctx.fillStyle = "green";
// ctx.fillText("직접 구현한 캔버스", 60, 60);

let mousedown = false;
canvasRef.addEventListener("mousedown", (e) => {
  // console.log(
  //   e.pageX - canvasRef.offsetLeft,
  //   e.pageY - canvasRef.offsetTop
  // );
  mousedown = true;
  ctx.beginPath();
  ctx.moveTo(e.pageX - canvasRef.offsetLeft, e.pageY - canvasRef.offsetTop);
});

canvasRef.addEventListener("mousemove", (e) => {
  if (mousedown) {
    ctx.lineTo(e.pageX - canvasRef.offsetLeft, e.pageY - canvasRef.offsetTop);
    ctx.stroke();
  }
  return;
});
canvasRef.addEventListener("mouseup", () => {
  mousedown = false;
});

showDialogButton.addEventListener("click", () => {
  dialog.showModal();
});
dialog.addEventListener("close", () => {
  console.log(
    `모달닫힘, 리턴값 : ${
      dialog.returnValue === "" ? "없음" : dialog.returnValue
    }`
  );
});
