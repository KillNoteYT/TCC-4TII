
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Login e senha pré-definidos
    const predefinedUsername = "usuario";
    const predefinedPassword = "senha";

    if (username === predefinedUsername && password === predefinedPassword) {
        // Redireciona para a página principal
        window.location.href = "pagina-inicial.html";
    } else {
        errorMessage.textContent = "Usuário ou senha incorretos!";
    }
});
