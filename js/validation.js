function validateForm(form) {
  const errors = [];
  const nombre = form.nombre.value.trim();
  const email = form.email.value.trim();
  const telefono = form.telefono.value.trim();
  const direccion = form.direccion.value.trim();

  if (nombre.length < 3) {
    errors.push({ field: "nombre", message: "El nombre debe tener al menos 3 caracteres." });
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    errors.push({ field: "email", message: "Ingresa un email válido." });
  }

  if (!/^\d{7,15}$/.test(telefono)) {
    errors.push({ field: "telefono", message: "El teléfono debe contener entre 7 y 15 dígitos." });
  }

  if (direccion.length < 5) {
    errors.push({ field: "direccion", message: "La dirección debe tener al menos 5 caracteres." });
  }

  return errors;
}

function clearFieldError(input) {
  input.classList.remove("form-error");
  input.classList.remove("form-success");

  const errorElement = input.nextElementSibling;
  if (errorElement && errorElement.classList.contains("field-error")) {
    errorElement.remove();
  }
}

function showFieldError(input, message) {
  clearFieldError(input);
  input.classList.add("form-error");

  const errorElement = document.createElement("small");
  errorElement.className = "field-error";
  errorElement.textContent = message;
  input.insertAdjacentElement("afterend", errorElement);
}

function showFormMessage(container, message, type) {
  container.textContent = message;
  container.className = `form-message ${type}`;
}
