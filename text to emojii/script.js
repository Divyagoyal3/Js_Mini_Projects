var clutter = "";

function encryption() {
  document.querySelector("#encrypt-btn").addEventListener("click", function () {
    var input = document.getElementById("txtmsg").value;
    //getting input from user
    console.log(input);
    //gettinf password from user
    var passw = document.getElementById("password").value;
    console.log(passw);
    //split the text
    const str = input.split("");
    console.log(str);
    // converting it into emojii
    str.forEach((element) => {
      clutter += `&#128${element.charCodeAt()}`;
    });
    console.log(clutter);
    // storing it into a result div

    document.querySelector("#result").innerHTML = clutter;

    var dataarr = [];

    if (JSON.parse(localStorage.getItem("data1"))) {
      dataarr = JSON.parse(localStorage.getItem('data1'))
      dataarr.push({ pass: password, input: input, clutter: clutter });
    } else {
      dataarr = [{ pass: password, input: input, clutter: clutter }];
    }

    localStorage.setItem("data1", JSON.stringify(dataarr));
  });
}

encryption();

function btnclicking() {
  document.querySelector("#dec-btn").addEventListener("click", function () {
    document.querySelector("#decryption").style.display = "block";
    document.querySelector("#encryption").style.display = "none";
    document.querySelector("#dec-btn").style.backgroundColor = "#333";
    document.querySelector("#enc-btn").style.backgroundColor = "#222";
    document.querySelector("#result").style.display = "none";
    document.querySelector("#main>h1 span img").style.rotate = "270deg";
  });
  document.querySelector("#enc-btn").addEventListener("click", function () {
    document.querySelector("#encryption").style.display = "block";
    document.querySelector("#decryption").style.display = "none";
    document.querySelector("#enc-btn").style.backgroundColor = "#333";
    document.querySelector("#dec-btn").style.backgroundColor = "#222";
    document.querySelector("#main>h1 span img").style.rotate = "90deg";
    document.querySelector("#result").style.display = "none";
  });
  document.querySelector("#encrypt-btn").addEventListener("click", function () {
    document.querySelector("#result").style.display = "block";
  });

  document.querySelector("#decrypt-btn").addEventListener("click", function () {
    document.querySelector("#result").style.display = "block";
  });
}

btnclicking();

// localStorage.setItem('username','divya')

// var a = localStorage.getItem('username')
// console.log(a);
// The localStorage object allows you to save key/value pairs in the browser.
// The localStorage object stores data with no expiration date.
// The data is not deleted when the browser is closed, and are available for future sessions.