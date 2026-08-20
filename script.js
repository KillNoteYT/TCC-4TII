document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const feedback = document.getElementById("error-message");

    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      loginForm.classList.add("was-validated");
      feedback.textContent = "";
      feedback.className = "login-feedback mt-3 mb-0";

      if (!loginForm.checkValidity()) return;

      const isDemoLogin = username.value.trim() === "usuario" && password.value === "senha";
      if (isDemoLogin) {
        feedback.textContent = "Acesso liberado. Redirecionando…";
        feedback.classList.add("is-success");
        window.location.href = "pagina-inicial.html";
        return;
      }

      feedback.textContent = "Usuário ou senha incorretos. Use as credenciais demonstrativas informadas acima.";
      feedback.classList.add("is-error");
      password.value = "";
      password.focus();
    });
  }

  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    const contactFeedback = document.getElementById("contactFeedback");
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      contactForm.classList.add("was-validated");
      if (!contactForm.checkValidity()) {
        contactFeedback.textContent = "Revise os campos destacados.";
        return;
      }
      contactFeedback.textContent = "Demonstração concluída: nenhum dado foi enviado.";
      contactForm.reset();
      contactForm.classList.remove("was-validated");
    });
  }
});
