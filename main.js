// 演算子以外のボタンを押したとき
function clickbtn(btn) {
  if (btn.value == "AC") {
    document.calculator.result.value = "0";
  } else if (btn.value == "=") {
    document.calculator.result.value = eval(document.calculator.result.value);
    } else {
      if (document.calculator.result.value == "0") {
        document.calculator.result.value = btn.value;
      } else if (document.calculator.result.value == "00") {
        document.calculator.result.value = btn.value;
      } else {
        document.calculator.result.value += btn.value; 
      }
    }
}

// 演算子のボタンを押したとき
function clickopr(btn) {
  if (document.calculator.result.value.slice(-1) == "+") {
    document.calculator.result.value.slice(0, -1);
  } else if (document.calculator.result.value.slice(-1) == "-") {
    document.calculator.result.value.slice(0, -1);
  } else if (document.calculator.result.value.slice(-1) == "*") {
    document.calculator.result.value.slice(0, -1);
  } else if (document.calculator.result.value.slice(-1) == "/") {
    document.calculator.result.value.slice(0, -1);
  } else {
    document.calculator.result.value += btn.value; 
  }
}
