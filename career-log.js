let companies = JSON.parse(localStorage.getItem("companies")) || [];

window.onload = function () {
  displayCompanies();
};

function addCompany() {
  const input = document.getElementById("companyName");
  const name = input.value.trim();

  if (name === "") return;

  companies.push(name);
  localStorage.setItem("companies", JSON.stringify(companies));

  input.value = "";
  displayCompanies();
}

function displayCompanies() {
  const list = document.getElementById("companyList");
  list.innerHTML = "";

  companies.forEach((company) => {
    const li = document.createElement("li");
    li.textContent = company;
    list.appendChild(li);
  });
}

