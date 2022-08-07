let calculatorOne = document.getElementById("display");

let Calchistory = {
  content: "",
};

valueGet = (a) => {
  //check for any sign exists at last index
  if (calculatorOne.value.length > 0) {
    var lastValue = calculatorOne.value[calculatorOne.value.length - 1]; //return last digit or sign

    if (
      lastValue == "+" ||
      lastValue == "-" ||
      lastValue == "/" ||
      lastValue == "*" ||
      lastValue == "."
    ) {
      if (
        a == lastValue ||
        a == "+" ||
        a == "-" ||
        a == "*" ||
        a == "/" ||
        a == "."
      ) {
        var v = calculatorOne.value;
        n = v.substring(0, v.length - 1);
        calculatorOne.value = n + a;

        return;
      }
    } else {
      calculatorOne.value = calculatorOne.value + a;
      return;
    }
  }
  calculatorOne.value = calculatorOne.value + a;
};

hisab = () => {
  try {
    var old = calculatorOne.value;
    if (old.length == 0 || old == null) {
      return;
    }
    v = parseFloat(eval(old));
    calculatorOne.value = v;
    Calchistory.content = old;
    showHistory();
  } catch (e) {
    calculatorOne.value = e;
  }
};

function showHistory() {
  document.querySelector(".history").textContent = Calchistory.content;
}

zeroMama = (zero) => {
  calculatorOne.value = "";
  Calchistory.content = "";
  document.querySelector(".history").innerHTML = ` &nbsp;`;
};

aakKam = () => {
  let target_val = calculatorOne.value;
  calculatorOne.value = target_val.substr(0, target_val.length - 1);
};

squareGar = () => {
  try {
    calculatorOne.value = Math.pow(calculatorOne.value, 2);
  } catch (e) {
    calculatorOne.value = e;
  }
};

rootnikal = () => {
  try {
    calculatorOne.value = Math.sqrt(calculatorOne.value);
  } catch (e) {
    calculatorOne.value = e;
  }
};

sinnikal = () => {
  try {
    calculatorOne.value = Math.sin(calculatorOne.value);
  } catch (e) {
    calculatorOne.value = e;
  }
};
cosnikal = () => {
  try {
    calculatorOne.value = Math.cos(calculatorOne.value);
  } catch (e) {
    calculatorOne.value = e;
  }
};
tannikal = () => {
  try {
    calculatorOne.value = Math.tan(calculatorOne.value);
  } catch (e) {
    calculatorOne.value = e;
  }
};

//keyboard input support
document.addEventListener("keyup", function (e) {
  let key = e.key;
  let supportedKeys = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    0,
    "+",
    ".",
    "-",
    "*",
    "/",
    "Enter",
    "Backspace",
    "Escape",
    "Delete",
  ];
  let isValidKey = supportedKeys.filter((item, index) => {
    return item == key;
  });
  if (isValidKey.length == 1) {
    //user typed valid key
    if (key == "Enter") {
      //sum all the value in field
      hisab();
      return;
    }
    if (key == "Backspace") {
      aakKam();
      return;
    }
    if (key == "Escape" || key == "Delete") {
      zeroMama();
      return;
    }
    //else othr value
    valueGet(key);
  }
});
