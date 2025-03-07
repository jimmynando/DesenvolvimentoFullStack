try {
  throw new Error("Gerando erro genérico");
} catch (e) {
  console.error(`${e.name}: ${e.message}`);
}

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function vaiDarError() {
  throw new ValidationError("Dados inválidos!");
}

try {
  vaiDarError();
} catch (err) {
  console.log(`${err.name}: ${err.message}`);
} finally {
  console.log("finally");
}
