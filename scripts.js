function startAnimation() {
  setTimeout(
    () => document.getElementById("sauce1").classList.add("visible"),
    1000
  );
  setTimeout(
    () => document.getElementById("sauce2").classList.add("visible"),
    2000
  );
  setTimeout(
    () => document.getElementById("sauce3").classList.add("visible"),
    3000
  );
  setTimeout(
    () => document.getElementById("final-text").classList.add("visible"),
    4000
  );
}

document.addEventListener("DOMContentLoaded", startAnimation);
