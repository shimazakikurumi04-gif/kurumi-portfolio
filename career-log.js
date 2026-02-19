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

function deleteCompany(index) {
  companies.splice(index, 1);
  localStorage.setItem("companies", JSON.stringify(companies));
  displayCompanies();
}

function displayCompanies() {
  const list = document.getElementById("companyList");
  list.innerHTML = "";

  companies.forEach((company, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span>${company}</span>
      <button class="delete-btn" onclick="deleteCompany(${index})">削除</button>
    `;

    list.appendChild(li);
  });
}
