chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "tomarAsistencia") {
    let correosInput = prompt("Ingrese los correos electrónicos:");
    if (correosInput) {
      const correosLimpios = correosInput.split("\r\n");
      let correosAComparar = limpiarCorreos(correosLimpios);
      tomarAsistencia(correosAComparar);
    }
  }
});

function limpiarCorreos(correos) {
  const uniqueEmails = new Set();

  // Iteramos sobre los datos a partir del segundo elemento para evitar la primera fila de encabezados
  for (let i = 1; i < correos.length; i++) {
    const rowData = correos[i].split(",");
    const email = rowData[1].trim();
    uniqueEmails.add(email); // Agregamos el correo electrónico al conjunto
  }

  const uniqueEmailsArray = Array.from(uniqueEmails);
  return uniqueEmailsArray;
}

function tomarAsistencia(correosAComparar) {
  let lista = document.querySelectorAll("tbody tr");
  listaTr = [];
  for (let i = 0; i < lista.length; i++) {
    listaTr.push(lista[i]);
  }

  // Iterar sobre cada elemento <tr>
  listaTr.forEach((tr) => {
    const elementoTd = tr.querySelectorAll("td")[1];

    if (elementoTd && elementoTd.textContent) {
      const correo = elementoTd.textContent.trim();
      if (correosAComparar.includes(correo)) {
        tr.style.backgroundColor = "#DAF7A6";
      }
    }
  });
}
