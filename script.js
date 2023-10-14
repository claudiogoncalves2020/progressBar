const progress = document.querySelector(".barra div");

const alterarprogresso = () => {
  const input = document.querySelector("input");

  progress.setAttribute("style", "width: " + input.value + "%");
};
