const container1 = document.getElementById("container1");
const container2 = document.getElementById("container2");
const list = document.querySelectorAll("li");
const paragraph = document.querySelectorAll("p");

container1.style.backgroundColor = "#e8dcbe";
container2.style.backgroundColor = "#e8dcbe";

for (let i = 0; i < paragraph.length; i++) {
  paragraph[i].style.backgroundColor = "#c8a867f7";
}

for (let i = 0; i < list.length; i++) {
  list[i].style.backgroundColor = "#c8a867f7";
  list[i].style.fontWeight = "bold";
  list[i].style.fontFamily = "Consolas";
}
