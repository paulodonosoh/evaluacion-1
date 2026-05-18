document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#proceso form");
  const messageBox = document.querySelector("#form-message");

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const inputs = [form.nombre, form.email, form.telefono, form.direccion];
    inputs.forEach(clearFieldError);

    const errors = validateForm(form);

    if (errors.length > 0) {
      errors.forEach((error) => {
        const input = form[error.field];
        showFieldError(input, error.message);
      });

      if (messageBox) {
        showFormMessage(messageBox, "Revisa los campos marcados antes de continuar.", "error");
      }

      return;
    }

    inputs.forEach((input) => input.classList.add("form-success"));

    if (messageBox) {
      showFormMessage(messageBox, "Formulario enviado correctamente.", "success");
    }

    form.reset();
  });
});
