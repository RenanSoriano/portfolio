const copyButton = document.querySelector("#copy-email");
const feedback = document.querySelector("#copy-feedback");

if (copyButton && feedback) {
  copyButton.addEventListener("click", async () => {
    // TODO: Atualizar o email de contanto especifico quando fizer um
    const email = "teste@gmail.com";

    try {
      await navigator.clipboard.writeText(email);
      feedback.textContent = "Email copiado!";
    } catch (error) {
      feedback.textContent = "Nao foi possivel copiar.";
    }

    setTimeout(() => {
      feedback.textContent = "";
    }, 2200);
  });
}
