
const user = document.querySelector("#username");
const pass = document.querySelector("#password");

function loginHandler() {
    if (user.value == "tony" && pass.value == "password123") {
        console.log("login working!");
        window.location.href = "http://www.google.co.uk/";
    }
}

function login2() {
    axios.post("http://localhost:3555/login", { username: user.value, password: pass.value })
    .then(res => res.data)
    .then(data => {
        if (data.token) {
            localStorage.setItem("token", data.token);
            window.location.href = "dashboard.html";
        } else {
            alert("DANGER!");
        }
    })
}