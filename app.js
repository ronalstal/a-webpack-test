var indexHbs = require("./src/templates/index.hbs");

document.addEventListener("DOMContentLoaded", function() {
  var div = document.createElement('div');
  div.innerHTML = indexHbs({
    username: "quark",
    usernameA: "quarkA",
    usernameB: "quarkB",
  });
  document.body.appendChild(div);
});
