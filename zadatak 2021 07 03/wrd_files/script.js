
function getFunkcija(funk,url)
{
    var zahtjev = new XMLHttpRequest();
   
    zahtjev.onload  = function() { 
            if (zahtjev.status === 200) {  
               funk(JSON.parse(zahtjev.responseText));
            }
            else {  
                alert("Server javlja grešku: " + zahtjev.statusText);  
            }  
    }

    zahtjev.onerror = function() {
        alert("Greška u komunikaciji sa serverom.");  
    };

    zahtjev.open("GET", url, true);
    zahtjev.send(null);
}


urlGetStudenta="https://restapiexample.wrd.app.fit.ba/Ispit20210702/Get4Studenta";

function funkNapraviRed(obj){
    return`<img src="${obj.slikaPutanja}" style="border: 1 px solid black;text-align: center;"/>
    <div style="background-color: gainsboro;">
            <h3>${obj.imePrezime}</h3>
            <p>${obj.opis}</p>
            <div div style="text-align: center">
            <button style="border: none; ; padding: 10px; background-color: white; margin-bottom: 2px;" onclick="funkOdabit(${obj.id})">Pisis poruku</button>
            </div>
    </div>`;
}


function postaviRadnika(obj){
    var radnici=document.querySelectorAll("[id^=radnik]");
    for(var i in obj){
        radnici[i].innerHTML=funkNapraviRed(obj[i]);
    }
};

getFunkcija(postaviRadnika,urlGetStudenta);


function funkOdabit(id){
    document.getElementById("primaoc").value=id;
}