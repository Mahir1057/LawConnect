function handleLogin(event) {
    // Prevent default form submission
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const role = document.getElementById("role").value;

    // Validate username and password
    if (username !== "Jane Smith" || password !== "12345678") {
        alert("Wrong username or password!");
        return;
    }

    // Redirect based on role
    if (role === "Criminal") {
        window.location.href = "criminal.html";
    } else if (role === "Lawyer") {
        window.location.href = "lawyer.html";
    } else if (role === "Guardian") {
        window.location.href = "guardian.html";
    } else {
        alert("Please select a role.");
    }
}
