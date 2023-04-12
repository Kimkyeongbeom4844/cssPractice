window.onload = () => {
  const showDialogButton = document.querySelector(".showDialogButton");
  const dialog = document.querySelector(".dialog");
  const canvasRef = document.querySelector(".canvasRef");
  const brushColor = document.querySelector(".brushColor");
  const eraserButton = document.querySelector(".eraserButton");
  const drawButton = document.querySelector(".drawButton");

  const ctx = canvasRef.getContext("2d");
  console.log(ctx);

  ctx.strokeStyle = brushColor.value;
  ctx.fillStyle = "green";
  ctx.fillText("직접 구현한 캔버스", 60, 60);

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
  brushColor.addEventListener("change", (e) => {
    ctx.strokeStyle = e.currentTarget.value;
  });
  drawButton.addEventListener("click", () => {
    ctx.globalCompositeOperation = "source-over";
  });
  eraserButton.addEventListener("click", () => {
    ctx.globalCompositeOperation = "destination-out";
  });

  showDialogButton?.addEventListener("click", () => {
    dialog.showModal();
  });
  dialog?.addEventListener("close", () => {
    console.log(
      `모달닫힘, 리턴값 : ${
        dialog.returnValue === "" ? "없음" : dialog.returnValue
      }`
    );
  });
};
