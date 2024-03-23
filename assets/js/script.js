let radiologia = [
  {
    hora: "11:00",
    medico: "IGNACIO SCHULZ",
    paciente: "FRANCISCA ROJAS",
    rut: "9878782-1",
    prevision: "FONASA",
  },
  {
    hora: "11:30",
    medico: "FEDERICO SUBERCASEAUX",
    paciente: "PAMELA ESTRADA",
    rut: "15345241-3",
    prevision: "ISAPRE",
  },
  {
    hora: "15:00",
    medico: "FERNANDO WURTHZ",
    paciente: "ARMANDO LUNA",
    rut: "16445345-9",
    prevision: "ISAPRE",
  },
  {
    hora: "15:30",
    medico: "ANA MARIA GODOY",
    paciente: "MANUEL GODOY",
    rut: "17666419-0",
    prevision: "FONASA",
  },
  {
    hora: "16:00",
    medico: "PATRICIA SUAZO",
    paciente: "RAMON ULLOA",
    rut: "14989389-K",
    prevision: "FONASA",
  },
];
let traumatologia = [
  {
    hora: "11:00",
    medico: "IGNACIO SCHULZ",
    paciente: "FRANCISCA ROJAS",
    rut: "9878782-1",
    prevision: "FONASA",
  },
  {
    hora: "11:30",
    medico: "FEDERICO SUBERCASEAUX",
    paciente: "PAMELA ESTRADA",
    rut: "15345241-3",
    prevision: "ISAPRE",
  },
  {
    hora: "15:00",
    medico: "FERNANDO WURTHZ",
    paciente: "ARMANDO LUNA",
    rut: "16445345-9",
    prevision: "ISAPRE",
  },
  {
    hora: "15:30",
    medico: "ANA MARIA GODOY",
    paciente: "MANUEL GODOY",
    rut: "17666419-0",
    prevision: "FONASA",
  },
  {
    hora: "16:00",
    medico: "PATRICIA SUAZO",
    paciente: "RAMON ULLOA",
    rut: "14989389-K",
    prevision: "FONASA",
  },
];
let dental = [
  {
    hora: "11:00",
    medico: "IGNACIO SCHULZ",
    paciente: "FRANCISCA ROJAS",
    rut: "9878782-1",
    prevision: "FONASA",
  },
  {
    hora: "11:30",
    medico: "FEDERICO SUBERCASEAUX",
    paciente: "PAMELA ESTRADA",
    rut: "15345241-3",
    prevision: "ISAPRE",
  },
  {
    hora: "15:00",
    medico: "FERNANDO WURTHZ",
    paciente: "ARMANDO LUNA",
    rut: "16445345-9",
    prevision: "ISAPRE",
  },
  {
    hora: "15:30",
    medico: "ANA MARIA GODOY",
    paciente: "MANUEL GODOY",
    rut: "17666419-0",
    prevision: "FONASA",
  },
  {
    hora: "16:00",
    medico: "PATRICIA SUAZO",
    paciente: "RAMON ULLOA",
    rut: "14989389-K",
    prevision: "FONASA",
  },
];

document.getElementById(
  "radiologiaP"
).textContent = `${radiologia[0].paciente} - ${radiologia[0].prevision}`;
document.getElementById("radiologiaU").textContent = `${
  radiologia[radiologia.length - 1].paciente
} - ${radiologia[radiologia.length - 1].prevision}`;


document.getElementById(
  "traumatologiaP"
).textContent = `${traumatologia[0].paciente} - ${traumatologia[0].prevision}`;
document.getElementById("traumatologiaU").textContent = `${
  traumatologia[traumatologia.length - 1].paciente
} - ${traumatologia[traumatologia.length - 1].prevision}`;

document.getElementById(
  "dentalP"
).textContent = `${dental[0].paciente} - ${dental[0].prevision}`;
document.getElementById("dentalU").textContent = `${
  dental[dental.length - 1].paciente
} - ${dental[dental.length - 1].prevision}`;



function mostrarTabla() {
  let tabla = document.getElementById("tabla");
  let filas =
    "<tr><th>Hora</th><th>Medico</th><th>Paciente</th><th>Rut</th><th>Prevision</th></tr>";
  for (let i = 0; i < dental.length; i++) {
    filas += `<tr>
    <td>${dental[i].hora}</td>
    <td>${dental[i].medico}</td>
    <td>${dental[i].paciente}</td>
    <td>${dental[i].rut}</td>
    <td>${dental[i].prevision}</td>
    </tr>`;
  }
  tabla.innerHTML = filas;
}

mostrarTabla();
