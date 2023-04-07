// Get all the required element
const generate = document.getElementById("generate");
const input = document.getElementById("input");
const tableBox = document.getElementById("table");

generate.addEventListener("click", () => {
  const value = input.value;

  // validation
  if (value === "") {
    alert("Please Enter some number");
  } else {
    let table = tableGenerator(value);

    tableBox.innerText = table;
  }
});

//Table Generator
const tableGenerator = (num) => {
  let table = "";

  for (let i = 1; i <= 10; i++) {
    table = table + num * i + " ";
  }

  return table;
};
