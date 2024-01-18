function calculate() {
   var sisi = parseFloat(document.getElementById("sisi").value);

   if (!isNaN(sisi)) {
       var area = sisi * sisi;
       var perimeter = 4 * sisi;

       document.getElementById("resultContainer").innerHTML = `
         <p>Panjang Sisi   : ${sisi} cm</p>
         <p>Luas  : ${area} cm^2</p>
         <p>Keliling : ${perimeter} cm</p>
       `;
   } else {
       alert("Please enter a valid number for the side length.");
   }
}

function resetForm() {
   document.getElementById("calculatorForm").reset();
   document.getElementById("resultContainer").innerHTML = "";
}
