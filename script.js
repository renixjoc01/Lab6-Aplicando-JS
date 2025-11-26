// === Calculadora Científica Básica ===
// Programación Web III - Renix Guillen

// 1️⃣ Suma de dos valores
function realizarSuma() {
  const n1 = parseFloat(document.getElementById("suma1").value);
  const n2 = parseFloat(document.getElementById("suma2").value);

  if (isNaN(n1) || isNaN(n2)) {
    document.getElementById("resultadoSuma").innerText =
      "⚠️ Por favor, ingrese ambos números correctamente.";
    return;
  }

  const suma = n1 + n2;

  document.getElementById("resultadoSuma").innerText =
    `La suma de ${n1} + ${n2} es: ${suma}`;
}

// 2️⃣ Resta de dos valores
function realizarResta() {
  const n1 = parseFloat(document.getElementById("resta1").value);
  const n2 = parseFloat(document.getElementById("resta2").value);

  if (isNaN(n1) || isNaN(n2)) {
    document.getElementById("resultadoResta").innerText =
      "⚠️ Ingrese correctamente ambos números.";
    return;
  }

  const resta = n1 - n2;

  document.getElementById("resultadoResta").innerText =
    `La resta de ${n1} - ${n2} es: ${resta}`;
}

// 3️⃣ Multiplicación de dos valores
function realizarMultiplicacion() {
  const n1 = parseFloat(document.getElementById("multi1").value);
  const n2 = parseFloat(document.getElementById("multi2").value);

  if (isNaN(n1) || isNaN(n2)) {
    document.getElementById("resultadoMulti").innerText =
      "⚠️ Debe ingresar dos números válidos.";
    return;
  }

  const multi = n1 * n2;

  document.getElementById("resultadoMulti").innerText =
    `La multiplicación de ${n1} × ${n2} es: ${multi}`;
}

// 4️⃣ División de dos valores
function realizarDivision() {
  const n1 = parseFloat(document.getElementById("div1").value);
  const n2 = parseFloat(document.getElementById("div2").value);

  if (isNaN(n1) || isNaN(n2)) {
    document.getElementById("resultadoDiv").innerText =
      "⚠️ Ingrese valores válidos.";
    return;
  }

  if (n2 === 0) {
    document.getElementById("resultadoDiv").innerText =
      "⚠️ No se puede dividir entre cero.";
    return;
  }

  const division = n1 / n2;

  document.getElementById("resultadoDiv").innerText =
    `La división de ${n1} ÷ ${n2} es: ${division}`;
}

// 5️⃣ Potencia
function realizarPotencia() {
  const base = parseFloat(document.getElementById("base").value);
  const exp = parseFloat(document.getElementById("expo").value);

  if (isNaN(base) || isNaN(exp)) {
    document.getElementById("resultadoPot").innerText =
      "⚠️ Ingrese la base y el exponente correctamente.";
    return;
  }

  const potencia = Math.pow(base, exp);

  document.getElementById("resultadoPot").innerText =
    `La potencia de ${base} elevado a ${exp} es: ${potencia}`;
}
