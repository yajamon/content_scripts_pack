export {};

const description = document.getElementById("ak_editor_description")!;
const message = "編集中です。ページを離脱しても良いですか？";

window.addEventListener("beforeunload", (event: BeforeUnloadEvent) => {
  if (description.dataset.changed !== undefined) {
    event.preventDefault();
    event.returnValue = message;
    return message;
  }
});
