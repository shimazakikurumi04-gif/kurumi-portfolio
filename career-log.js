let companies = JSON.parse(localStorage.getItem("companies")) || [];

window.onload = function () {
  displayCompanies();
};

function addCompany() {
  const name = document.getElementById("companyName").value.trim();
  const motivation = document.getElementById("motivation").value;
  const anxiety = document.getElementById("anxiety").value;
  const excitement = document.getElementById("excitement").value;

  if (name === "") return;

  const company = {
    name: name,
    motivation: motivation,
    anxiety: anxiety,
    excitement: excitement
  };

  companies.push(company);
  localStorage.setItem("companies", JSON.stringify(companies));

  document.getElementById("companyName").value = "";
  displayCompanies();
}

function deleteCompany(index) {
  companies.splice(index, 1);
  localStorage.setItem("companies", JSON.stringify(companies));
  displayCompanies();
}

function updateValue(index, key, value) {
  companies[index][key] = value;
  localStorage.setItem("companies", JSON.stringify(companies));
}

function createOptions(selectedValue) {
  let options = "";

  for (let i = 1; i <= 5; i++) {
    if (i == selectedValue) {
      options += `<option value="${i}" selected>★${i}</option>`;
    } else {
      options += `<option value="${i}">★${i}</option>`;
    }
  }

  return options;
}

function displayCompanies() {
  const list = document.getElementById("companyList");
  list.innerHTML = "";

  companies.forEach((company, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <strong>${company.name}</strong><br><br>

      志望度：
      <select onchange="updateValue(${index}, 'motivation', this.value)">
        ${createOptions(company.motivation)}
      </select><br><br>

      不安度：
      <select onchange="updateValue(${index}, 'anxiety', this.value)">
        ${createOptions(company.anxiety)}
      </select><br><br>

      わくわく度：
      <select onchange="updateValue(${index}, 'excitement', this.value)">
        ${createOptions(company.excitement)}
      </select><br><br>

      <button onclick="deleteCompany(${index})">削除</button>
    `;

    list.appendChild(li);
  });
}


