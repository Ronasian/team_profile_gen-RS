function renderManager(manager) {
  return `<div class="card">
    <div class="employee">
      <p>${manager.getName()}</p>
      <p>${manager.getRole()}</p>
    </div>
    <div class="info">
      <p>Id: ${manager.getId()}</p>
      <p>Email: ${manager.getEmail()}</p>
      <p>Office #: ${manager.officeNum}</p>
    </div>
  </div>`
};

function renderEngineer(engineer) {
    return `<div class="card">
    <div class="employee">
      <p>${engineer.getName()}</p>
      <p>${engineer.getRole()}</p>
    </div>
    <div class="info">
      <p>Id: ${engineer.getId()}</p>
      <p>Email: ${engineer.getEmail()}</p>
      <p>GitHub: ${engineer.getGithub()}</p>
    </div>
  </div>`
};

function renderIntern(intern) {
    return `<div class="card">
    <div class="employee">
      <p>${intern.getName()}</p>
      <p>${intern.getRole()}</p>
    </div>
    <div class="info">
      <p>Id: ${intern.getId()}</p>
      <p>Email: ${intern.getEmail()}</p>
      <p>School: ${intern.getSchool()}</p>
    </div>
  </div>`
};

module.exports = { renderManager, renderEngineer, renderIntern };