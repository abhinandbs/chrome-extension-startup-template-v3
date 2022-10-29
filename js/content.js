//load function
window.addEventListener("load", _);

//constructor
function _() {
  console.log("started");
  onStart();
}

function onStart() {
  document.body.innerHTML = ` ${document.body.innerHTML}<button id="test_button" type="button">Click Me!</button> <h1>hellow world</h1>`;
  btn_button = document.getElementById("test_button");

  btn_button.addEventListener("click", function () {
    alert("hellow world test works");
  });
}







