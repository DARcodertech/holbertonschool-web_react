interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Alice",
  lastName: "Smith",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Bob",
  lastName: "Johnson",
  age: 22,
  location: "Los Angeles"
};

const studentsList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement("table");
const headerRow: HTMLTableRowElement = table.insertRow();

const header1: HTMLTableCellElement = headerRow.insertCell();
header1.textContent = "First Name";
const header2: HTMLTableCellElement = headerRow.insertCell();
header2.textContent = "Location";

studentsList.forEach((student) => {
  const row: HTMLTableRowElement = table.insertRow();
  const cell1: HTMLTableCellElement = row.insertCell();
  const cell2: HTMLTableCellElement = row.insertCell();

  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
});

document.body.appendChild(table);