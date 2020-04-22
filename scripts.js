let imprimirDatos = function(){

    console.log("dentro de la function");

    const xhttp = new XMLHttpRequest();
    
    xhttp.open('GET', 'datos.json', true);

    xhttp.send();
    
    xhttp.onreadystatechange = function(){
        
        if(this.readyState == 4 && this.status == 200){
            
            let datos = JSON.parse(this.responseText);
            console.log(datos);

            for(i=0;i<=datos.length-1;i++){
                document.write(`<h3>${datos[i].Nombre}<br></h3>`);
                document.write(`${datos[i].Descripción}<br>`);
                document.write(`<a href=\\"${datos[i].Web}">${datos[i].Web}</a><br>`);
                document.write(`<br>`);
            }            
        } 
    }    
}

imprimirDatos();

/*
function traer() {
    console.log('dentro funcion')
    fetch('datos.json')
    .then(data => data.())
    .then(data=>{
        console.log(data)
    })
}
traer();*/