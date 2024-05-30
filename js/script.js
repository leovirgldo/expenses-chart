const chartValue = [
  {
    day: "mon",
    amount: 17.45,
    barra: document.querySelector(".mon"),
  },
  {
    day: "tue",
    amount: 34.91,
    barra: document.querySelector(".tue"),
  },
  {
    day: "wed",
    amount: 52.36,
    barra: document.querySelector(".wed"),
  },
  {
    day: "thu",
    amount: 31.07,
    barra: document.querySelector(".thu"),
  },
  {
    day: "fri",
    amount: 23.39,
    barra: document.querySelector(".fri"),
  },
  {
    day: "sat",
    amount: 43.28,
    barra: document.querySelector(".sat"),
  },
  {
    day: "sun",
    amount: 25.48,
    barra: document.querySelector(".sun"),
  },
];
let mondayAmount = document.querySelector(".balance-mon");
mondayAmount.textContent = "$" + chartValue[0].amount;

let tuesdayAmount = document.querySelector(".balance-tue");
tuesdayAmount.textContent = "$" + chartValue[1].amount;

let wednesdayAmount = document.querySelector(".balance-wed");
wednesdayAmount.textContent = "$" + chartValue[2].amount;

let thuesdayAmount = document.querySelector(".balance-thu");
thuesdayAmount.textContent = "$" + chartValue[3].amount;

let fridayAmount = document.querySelector(".balance-fri");
fridayAmount.textContent = "$" + chartValue[4].amount;

let saturdayAmount = document.querySelector(".balance-sat");
saturdayAmount.textContent = "$" + chartValue[5].amount;

let sundayAmount = document.querySelector(".balance-sun");
sundayAmount.textContent = "$" + chartValue[6].amount;

for (charts in chartValue) {
  if (chartValue[charts].amount >= "20") {
    chartValue[charts].barra.style.height = "50.5px";
  } else {
    chartValue[charts].barra.style.height = "40.25px";
  }
  if (chartValue[charts].amount >= "25") {
    chartValue[charts].barra.style.height = "55.75px";
  }
  if (chartValue[charts].amount >= "30") {
    chartValue[charts].barra.style.height = "75px";
  }
  if (Math.floor(chartValue[charts].amount) >= "35") {
    chartValue[charts].barra.style.height = "85.25px";
  }
  if (chartValue[charts].amount >= "40") {
    chartValue[charts].barra.style.height = "97.5px";
  }
  if (chartValue[charts].amount >= "45") {
    chartValue[charts].barra.style.height = "113.75px";
  }
  if (chartValue[charts].amount >= "50") {
    chartValue[charts].barra.style.height = "130px";
    chartValue[charts].barra.style.background = "hsl(186, 34%, 60%)";
  }
}
