function initHTML() {
    return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>My Team</title>
        <link rel="stylesheet" href="./style.css">
      </head>
      <body>
        <h1>My Team</h1>
        <section>`
}

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
      <p>Office #: ${engineer.getGithub()}</p>
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
      <p>Office #: ${intern.getSchool()}</p>
    </div>
  </div>`
};

function finalizeHTML() {
    return `</section>
    <script src="index.js"></script>
  </body>
</html>`
}