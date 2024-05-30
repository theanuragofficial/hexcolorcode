let get = () => {
  let randomnumber = Math.floor(Math.random() * 16777215);
  let randomcode = "#" + randomnumber.toString(16);
  document.body.style.backgroundColor = randomcode;
  document.getElementById("code").innerHTML = randomcode;
};

document.getElementById("btn").addEventListener("click", get);

get();
