// odkazy na HTML objekty
const figurky = document.getElementById("figurky");
const pocetPat = document.getElementById("pocetPat");
const pocetMat = document.getElementById("pocetMat");

// kód vykreslení obrázků
const pat = "<img src='img/pat.png'>";
const mat = "<img src='img/mat.png'>";

let kodFigurek = "";
let i=0;
while (i<10 ) {
  i++;

  kodFigurek += "<div>" + (i%2==0 ? pat+mat : mat+pat) + "</div>"; 


  /*
  kodFigurek += "<div>" + pat + mat + "</div>";
  kodFigurek += "<div>" + mat + pat + "</div>";

  ale pak zmenit 
pocetPat.innerText = i * 2;
  pocetMat.innerText = i * 2;  

  a taky 

  while (i<5 ) 
  */
}
figurky.innerHTML = kodFigurek; // vloží kód řady obrázků, kterou požadujeme vykreslit
pocetPat.innerText = i;         // vypíše počet vykreslených figurek Pata (všech deset)
pocetMat.innerText = i;         // vypíše počet vykreslenách figurek Mata (žádný)

