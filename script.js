const spanLabel = document.querySelectorAll("label");

// console.log(spanLabel);

spanLabel.forEach((lable) => {
  lable.innerHTML = lable.innerHTML
    .split("")
    .map((letter, idx) => {
      return `<span style="transition-delay:${idx * 50}ms">${letter}</span>`;
    })
    .join("");

  //   console.log(lable.innerHTML);
});
