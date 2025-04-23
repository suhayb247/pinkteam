function showForm(type) {
    document.getElementById("login-form").classList.remove("active");
    document.getElementById("register-form").classList.remove("active");
    document.getElementById(`${type}-form`).classList.add("active");
    document.getElementById("message").textContent = "";
}

function login() {
    const name = document.getElementById("login-name").value;
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    if (password.length < 6) {
      showMsg("Password must be at least 6 characters");
      return false;
    }

    window.location.href = "index.html";
    return false;
}

function registration() {
    const name = document.getElementById("reg-name").value;
    const email = document.getElementById("reg-email").value;
    const password = document.getElementById("reg-password").value;
    const plate = document.getElementById("reg-plate").value;

    if (password.length < 6) {
      showMsg("Password must be at least 6 characters");
      return false;
    }

    window.location.href = "index.html";
    return false;
}


document.getElementById("other-logins").addEventListener("click", function() {
    window.location.href = "index.html";
});


  

function showMsg(msg) {
    document.getElementById("message").textContent = msg;
}