function changeColor(element) {
  const currentColor = element.style.backgroundColor;
  if (currentColor === "gray") {
    element.style.backgroundColor = "blue";
  } else {
    element.style.backgroundColor = "gray"; 
  }
}
