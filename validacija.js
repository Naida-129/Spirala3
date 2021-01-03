function validirajNaziv()
{ 
  var greska = document.getElementById('greska');
                   // ili document.body.children[0]
  greska.innerHTML=""; // ocistimo prethodne greske
  
  var name=document.mojaforma.naziv_predmeta.value;  
  var n = name.length; 
  var forma=document.getElementById('mf');	
  
  if (n>5){  
    alert("Naziv predemta ne smije biti duži od 5");
    document.getElementById("naziv_predmeta").style.background="rgb(209, 131, 131)";
    return false; 
  }
  else if (n<2){  
    alert("Naziv predmeta mora imati barem 2 karaktera");
    document.getElementById("naziv_predmeta").style.background="rgb(209, 131, 131)";
    return false; 
  }
  else if(!/[A-Z]/.test(name))
  {
    document.getElementById("naziv_predmeta").style.backgroundColor="rgb(209, 131, 131)";
    alert("Moraju biti velika slova");
    return false;
  }
  else{
    document.getElementById("naziv_predmeta").style.background="rgb(155, 228, 159)";
  }
regbroj=/[0-9]/;
      for (i = 0; i < (n - 1); i++) 
      {
        var c = name.charAt(i);
          if (c==regbroj) 
          {
              alert("Ne moze biti broj");
              return false;                                                            
          }
      }
document.getElementById("naziv_predmeta").style.background="rgb(155, 228, 159)";
}
function validirajPocetak()
{
  var reghhmm=/^([0-9]0[0-9]1[0-9]2[0-3]):[0-5][0-9])/;
  var pocetak=document.mojaforma.vrijemepocetka.value; 
  if(!reghhmm.test(pocetak))
  {
    document.getElementById("vrijemepocetka").style.backgroundColor="rgb(209, 131, 131)";
    alert("Prvo unesite sate, zatim minute");
    return false;
  }
  var vrijemepocetka=document.getElementById('vrijemepocetka');
  var pocetakmax=vrijemepocetka.max;
  var vrijednost=vrijemepocetka.value+':00';
  console.log(pocetakmax,vrijednost);
  if(vrijednost>pocetakmax)
  {
    alert("Vrijednost ne može biti iznad 20:00");
    
  }
}

function validirajKraj()
{
  var reghhmm=/^([0-9]0[0-9]1[0-9]2[0-3]):[0-5][0-9])/;
  var kraj=document.mojaforma.vrijemekraja.value; 
  var pocetak=document.mojaforma.vrijemepocetka.value; 
  if(!reghhmm.test(kraj))
  {
    document.getElementById("vrijemekraja").style.backgroundColor="rgb(209, 131, 131)";
    
      alert("Prvo unesite sate, zatim minute");
    return false;
    }
    var vrijemepocetka = document.getElementById('vrijemepocetka');
    var vrijemepocetkavr = vrijemepocetka.value;
    
    var vrijemekraja = document.getElementById('vrijemekraja');
    var vrijemekrajavr = vrijemekraja.value;

    if(vrijemekrajavr<vrijemepocetkavr)
    {
      alert("Nepravilan unos vremena");
    }
 
} 

function validirajTip()
{
  var tip = document.getElementById('tip');
  var predavanje = tip.value == "predavanje";
  var vjezbe = tip.value == "vjezbe";

  var vrijemepocetka = document.getElementById('vrijemepocetka');
    var vrijemepocetkavr = vrijemepocetka.value;
    
  var vrijemekraja = document.getElementById('vrijemekraja');
    var vrijemekrajavr = vrijemekraja.value;

    razlika=vrijemekrajavr-vrijemepocetkavr;
  if (predavanje) {
      alert('U pitanju je predavanje');
      return predavanje;

  }
  
  if (vjezbe) {
    alert('U pitanju je vjezba');
    return vjezbe;
}

  
}


