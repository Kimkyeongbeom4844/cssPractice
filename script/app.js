const showDialogButton = document.querySelector(".showDialogButton");
const dialog = document.querySelector(".dialog");

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
