export function lockBody() {
  const scrollY = document.body.style.top;

  // Solo establecemos document.body.style.top si no está definido ya
  if (scrollY === "") {
    document.body.style.top = `-${window.scrollY}px`;
  }
  document.body.style.left = 0;
  document.body.style.right = 0;
  document.body.style.position = "fixed";
}

export function unlockBody() {
  const scrollY = document.body.style.top;

  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.left = "";
  document.body.style.right = "";

  // Solo establecemos document.body.style.top si no está definido ya
  if (scrollY !== "") {
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
  }
}
