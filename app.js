const myForm = document.forms.myForm;
// console.log(users);
const submit = document.getElementById("submit");
console.log(submit);
let i = 0;
const values = [];
submit.addEventListener("click", (event) => {
  event.preventDefault();
  const users = myForm.userName.value;
  const userWealth = myForm.userWealth.value;
  values.push({ id: i, names: users, wealth: userWealth });
  i++;
  console.log(values);
  let userList = document.querySelector(".usersList");
  const list = document.createElement("li");
  list.textContent = values.names;
  values.filter((obj) => {
    list.textContent = obj.names + obj.wealth;
    userList.append(list);
  });
});
let num = 0;
function showUser() {
  let showUsers = document.querySelector(".users-name-list");
  if (num < values.length) {
    let object = values.find((obj) => obj.id === num);
    num++;
    console.log(object);
    const list2 = document.createElement("li");
    list2.textContent = object.names;
    showUsers.append(list2);
  } else {
    alert("no more users");
  }
}
let num2 = 0;
function showWealth() {
  let showUsers = document.querySelector(".users-wealth-list");
  if (num2 < num) {
    let object = values.find((obj) => obj.id === num2);
    num2++;
    console.log(object);
    const list2 = document.createElement("li");
    list2.className = "wealth";
    list2.textContent = object.wealth;
    showUsers.append(list2);
  } else {
    alert("wealth of all users displayed");
  }
}
function calculateWealth() {
  let showUsers = document.querySelector(".calculated-weight-list");
  let wealth = document.getElementsByClassName("wealth");
  console.log(wealth);
  let total = 0;
  const list2 = document.createElement("li");
  for (var i = 0; i < wealth.length; i++) {
    total += parseInt(wealth[i].innerHTML);
  }

  list2.textContent = total;
  showUsers.append(list2);
}
