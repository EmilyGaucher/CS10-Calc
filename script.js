// CS10 Grade Calculator

document.getElementById("grade-btn").addEventListener("click", csGrade);

function csGrade() {
  // INPUT
  let number1 = Number(document.getElementById("numb1").value);
  let number2 = Number(document.getElementById("numb2").value);
  let number3 = Number(document.getElementById("numb3").value);
  let number4 = Number(document.getElementById("numb4").value);
  let number5 = Number(document.getElementById("numb5").value);
  let number6 = 5;
  // PROCESS
  let answer = (number1 + number2 + number3 + number4 + number5) / number6;
  // OUTPUT
  document.getElementById("grade").innerHTML = answer;
}
