// Contoh penggunaan if-else
let isMorning = true;
if (isMorning) {
    console.log("Sekarang pagi");
} else {
    console.log("Sekarang bukan pagi");
}

// Contoh penggunaan switch case
let dayOfWeek = "Senin";
switch (dayOfWeek) {
    case "Senin":
        console.log("Hari Senin");
        break;
    case "Selasa":
        console.log("Hari Selasa");
        break;
    default:
        console.log("Hari lainnya");
}

// Contoh penggunaan for statement
for (let i = 0; i < 5; i++) {
    console.log("Iterasi ke-" + (i + 1));
}

// Contoh penggunaan while
let count = 0;
while (count < 3) {
    console.log("While loop ke-" + (count + 1));
    count++;
}

// Contoh penggunaan do while
let num = 1;
do {
    console.log("Do while loop ke-" + num);
    num++;
} while (num <= 3);

// Contoh penggunaan fungsi
function greeting(name) {
    return "Halo, " + name + "!";
}

let message = greeting("Anda");
console.log(message);
