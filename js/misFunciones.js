


///////////////////Cabañas//////////////////////////////////////
function activaNuevo(){
    
    
    $("#nuevo").show(1000);
    //$("#listado").hide(500);
    $("#ADemail").focus();
    $("#ADid").focus();
    
    $("#Cnombre").focus();
    $("#IDcb").focus();

    $("#CAnombre").focus();
    $("#Idnombre").focus();

    $("#CLemail").focus();
    $("#CLid").focus();

    $("#Mmensaje").focus();
    $("#IdM").focus();
    
    $("#StartDate").focus();
    $("#idR").focus();
}


function traerInformacionCabañas(){
    $.ajax({
        url:"http://152.70.124.82:8080/api/Cabin/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaCabañas(respuesta);
        }
    });
}

function pintarRespuestaCabañas(respuesta){

    let myTable="<table>";

    myTable += "<tr>";
    myTable += "<td>" + 'Nombre' + "</td>" + "<td>" + 'Marca' + "</td>" + "<td>" + 'Habitaciones' + "</td>"+ "<td>" + 'Descripcion' + "</td>";
    myTable += "</tr>";

    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].brand+"</td>";
        myTable+="<td>"+respuesta[i].rooms+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="<td> <button onclick='borrarElementoCB("+respuesta[i].id+")'>Borrar Registro</button>";
        myTable+="</tr>";
    }
    if(respuesta.length==0){
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
    }
    myTable+="</table>";
    $("#resultado3").html(myTable);
    activaNuevo();
}

function guardarInformacionCabañas(){
    let var3 = {
        name:$("#Cnombre").val(),
        brand:$("#Cbrand").val(),
        rooms:$("#Crooms").val(),
        description:$("#Cdescription").val(),
        };

        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var3),
        
        url:"http://152.70.124.82:8080/api/Cabin/save",

        
        success:function(response) {
                console.log(response);
                $("#Cnombre").val("");
                $("#Cbrand").val("");
                $("#Crooms").val("");
                $("#Cdescription").val("");
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            activaNuevo();
            window.location.reload();
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se guardo correctamente");
        }
        });

}



//////////////
function editarInformacionCB(){
    let myData={
        id:$("#IDcb").val(),
        name:$("#Cnombre").val(),
        brand:$("#Cbrand").val(),
        rooms:$("#Crooms").val(),
        description:$("#Cdescription").val(),

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://152.70.124.82:8080/api/Cabin/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado5").empty();
            $("#IDcb").val("");
            $("#Cnombre").val("");
            $("#Cbrand").val("");
            $("#Crooms").val("");
            $("#Cdescription").val("");
            traerInformacionCabañasU();
            activaNuevo();
            alert("Se ha Actualizado el Registro")
        }
    });
}

function traerInformacionCabañasU(){
    $.ajax({
        url:"http://152.70.124.82:8080/api/Cabin/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaCabañasU(respuesta);
        }
    });
}

function pintarRespuestaCabañasU(respuesta){

    let myTable="<table>";

    myTable += "<tr>";
    myTable += "<td>" + 'ID Cabaña' + "</td>" +"<td>" + 'Nombre' + "</td>" + "<td>" + 'Marca' + "</td>" + "<td>" + 'Habitaciones' + "</td>"+ "<td>" + 'Descripcion' + "</td>";
    myTable += "</tr>";

    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].id+"</td>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].brand+"</td>";
        myTable+="<td>"+respuesta[i].rooms+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        //myTable+="<td> <button onclick='borrarElementoCB("+respuesta[i].id+")'>Borrar Registro</button>";
        myTable+="</tr>";
    }
    if(respuesta.length==0){
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
    }
    myTable+="</table>";
    $("#resultado3").html(myTable);
    activaNuevo();
}

////

function borrarElementoCB(idElemento){

    $.ajax({
        
        url:'http://152.70.124.82:8080/api/Cabin/'+idElemento,
        type:"DELETE",
        
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado4").empty();
            traerInformacionCabañas();
            activaNuevo();
            alert("Se ha Eliminado.")
        }
    });
}


//////////////////////Categorias//////////////////////////////////
function traerInformacionCategorias(){
    $.ajax({
        url:"http://152.70.124.82:8080/api/Category/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaCategorias(respuesta);
        }
    });
}

function pintarRespuestaCategorias(respuesta){
    let myTable="<table>";
    myTable += "<tr>";
    myTable += "<td>" + 'Nombre' + "</td>" + "<td>" + 'Descripcion' + "</td>";
    myTable += "</tr>";
    
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="<td> <button onclick='borrarElementoCT("+respuesta[i].id+")'>Borrar Registro</button>";
        myTable+="</tr>";
    }
    if(respuesta.length==0){
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
    }
    myTable+="</table>";
    $("#resultado5").html(myTable);
    activaNuevo();
}

function guardarInformacionCategorias(){
    let var4 = {
        name:$("#CAnombre").val(),
        description:$("#CAdescripcion").val(),
        };

        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var4),
        
        url:"http://152.70.124.82:8080/api/Category/save",

        success:function(response) {
            $("#CAnombre").val("");
            $("#CAdescripcion").val("");
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload();
            activaNuevo();
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se guardo correctamente");
        }
        });
}


//////////////
function editarInformacionCT(){
    let myData={
        id:$("#Idnombre").val(),
        name:$("#CAnombre").val(),
        description:$("#CAdescripcion").val(),

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://152.70.124.82:8080/api/Category/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado5").empty();
            $("#Idnombre").val("");
            $("#CAnombre").val("");
            $("#CAdescripcion").val("");
            traerInformacionCategoriasU();
            activaNuevo();
            alert("Se ha Actualizado el Registro")
        }
    });
}

function traerInformacionCategoriasU(){
    $.ajax({
        url:"http://152.70.124.82:8080/api/Category/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaCategoriasU(respuesta);
        }
    });
}

function pintarRespuestaCategoriasU(respuesta){
    let myTable="<table>";
    myTable += "<tr>";
    myTable += "<td>" + 'ID Categoria' + "</td>" +"<td>" + 'Nombre' + "</td>" + "<td>" + 'Descripcion' + "</td>";
    myTable += "</tr>";
    
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].id+"</td>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        //myTable+="<td> <button onclick='borrarElementoCT("+respuesta[i].id+")'>Borrar Registro</button>";
        myTable+="</tr>";
    }
    if(respuesta.length==0){
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
    }
    myTable+="</table>";
    $("#resultado5").html(myTable);
    activaNuevo();
}

////

function borrarElementoCT(idElemento){

    $.ajax({
        
        url:'http://152.70.124.82:8080/api/Category/'+idElemento,
        type:"DELETE",
        
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado4").empty();
            traerInformacionCategorias();
            activaNuevo();
            alert("Se ha Eliminado.")
        }
    });
}



//////////////////////Clientes//////////////////////////////////
function traerInformacionClientes(){
    $.ajax({
        url:"http://152.70.124.82:8080/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaClientes(respuesta);
        }
    });
}

function pintarRespuestaClientes(respuesta){
    let myTable="<table>";
    myTable += "<tr>";
    myTable += "<td>" + 'Correo' + "</td>" + "<td>" + 'Contraseña' + "</td>" + "<td>" + 'Nombre' + "</td>"+ "<td>" + 'Edad' + "</td>";
    myTable += "</tr>";
    
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].email+"</td>";
        myTable+="<td>"+respuesta[i].password+"</td>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].age+"</td>";
        myTable+="<td> <button onclick='borrarElementoCL("+respuesta[i].idClient+")'>Borrar Registro</button>";
        myTable+="</tr>";
    }
    if(respuesta.length==0){
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
    }
    myTable+="</table>";
    $("#resultado1").html(myTable);
    activaNuevo();
}

function guardarInformacionClientes(){
    let var4 = {
        email:$("#CLemail").val(),
        password:$("#CLpassword").val(),
        name:$("#CLname").val(),
        age:$("#CLage").val(),
        };

        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var4),
        
        url:"http://152.70.124.82:8080/api/Client/save",

        success:function(response) {
            $("#CLemail").val("");
            $("#CLpassword").val("");
            $("#CLname").val("");
            $("#CLage").val("");
                console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload();
            activaNuevo();
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se guardo correctamente");
        }
        });
}

//////////////
function editarInformacionCL(){
    let myData={
        idClient:$("#CLid").val(),
        email:$("#CLemail").val(),
        password:$("#CLpassword").val(),
        name:$("#CLname").val(),
        age:$("#CLage").val(),
        

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://152.70.124.82:8080/api/Client/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado4").empty();
            $("#CLid").val("");
            $("#CLemail").val("");
            $("#CLpassword").val("");
            $("#CLname").val("");
            $("#CLage").val("");
            traerInformacionClientesU();
            activaNuevo();
            alert("Se ha Actualizado el Registro")
        }
    });
}

function traerInformacionClientesU(){
    $.ajax({
        url:"http://152.70.124.82:8080/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaClientesU(respuesta);
        }
    });
}

function pintarRespuestaClientesU(respuesta){
    let myTable="<table>";
    myTable += "<tr>";
    myTable += "<td>" + 'ID Cliente' + "</td>" +"<td>" + 'Correo' + "</td>" + "<td>" + 'Contraseña' + "</td>" + "<td>" + 'Nombre' + "</td>"+ "<td>" + 'Edad' + "</td>";
    myTable += "</tr>";
    
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].idClient+"</td>";
        myTable+="<td>"+respuesta[i].email+"</td>";
        myTable+="<td>"+respuesta[i].password+"</td>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].age+"</td>";
        //myTable+="<td> <button onclick='borrarElementoCL("+respuesta[i].idClient+")'>Borrar Registro</button>";
        myTable+="</tr>";
    }
    if(respuesta.length==0){
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
    }
    myTable+="</table>";
    $("#resultado1").html(myTable);
    activaNuevo();
}

///////

function borrarElementoCL(idElemento){

    $.ajax({
        
        url:'http://152.70.124.82:8080/api/Client/'+idElemento,
        type:"DELETE",
        
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado4").empty();
            traerInformacionClientes();
            activaNuevo();
            alert("Se ha Eliminado.")
        }
    });
}


//////////////////////Mensajes//////////////////////////////////
function traerInformacionMensajes(){
    $.ajax({
        url:"http://152.70.124.82:8080/api/Message/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaMensajes(respuesta);
        }
    });
}

function pintarRespuestaMensajes(respuesta){
    let myTable="<table>";
    myTable += "<tr>";
    myTable += "<td>" + 'ID' + "</td>" + "<td>" + 'Mensaje' + "</td>";
    myTable += "</tr>";
    
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].idMessage+"</td>";
        myTable+="<td>"+respuesta[i].messageText+"</td>";
        myTable+="<td> <button onclick='borrarElementoME("+respuesta[i].idMessage+")'>Borrar Registro</button>";
        myTable+="</tr>";
    }
    if(respuesta.length==0){
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
    }
    myTable+="</table>";
    $("#resultado4").html(myTable);
    activaNuevo();
}

function guardarInformacionMensajes(){
    let var4 = {
        messageText:$("#Mmensaje").val(),
        };

        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var4),
        
        url:"http://152.70.124.82:8080/api/Message/save",

        success:function(response) {
            $("#Mmensaje").val("");

                console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload();
            activaNuevo();
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se guardo correctamente");
        }
        });
}

//////////////
function editarInformacionME(){
    let myData={
        idMessage:$("#IdM").val(),
        messageText:$("#Mmensaje").val(),
        

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://152.70.124.82:8080/api/Message/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado4").empty();
            $("#IdM").val("");
            $("#Mmensaje").val("");
            traerInformacionMensajesU();
            activaNuevo();
            alert("Se ha Actualizado el Registro")
        }
    });
}

function traerInformacionMensajesU(){
    $.ajax({
        url:"http://152.70.124.82:8080/api/Message/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaMensajesU(respuesta);
        }
    });
}

function pintarRespuestaMensajesU(respuesta){
    let myTable="<table>";
    myTable += "<tr>";
    myTable += "<td>" + 'ID' + "</td>" + "<td>" + 'Mensaje' + "</td>";
    myTable += "</tr>";
    
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].idMessage+"</td>";
        myTable+="<td>"+respuesta[i].messageText+"</td>";
        //myTable+="<td> <button onclick='borrarElementoME("+respuesta[i].idMessage+")'>Borrar Registro</button>";
        myTable+="</tr>";
    }
    if(respuesta.length==0){
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
    }
    myTable+="</table>";
    $("#resultado4").html(myTable);
    activaNuevo();
}


/////

function borrarElementoME(idElemento){

    $.ajax({
        
        url:'http://152.70.124.82:8080/api/Message/'+idElemento,
        type:"DELETE",
        
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado4").empty();
            traerInformacionMensajes();
            activaNuevo();
            alert("Se ha Eliminado.")
        }
    });
}



//////////////////////Reservaciones//////////////////////////////////
function traerInformacionReservaciones(){
    $.ajax({
        url:"http://152.70.124.82:8080/api/Reservation/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaReservaciones(respuesta);
        }
    });
}

function pintarRespuestaReservaciones(respuesta){
    let myTable="<table>";
    myTable += "<tr>";
    myTable += "<td>" + 'Fecha Inicio' + "</td>" + "<td>" + 'Fecha Fin' + "</td>";
    myTable += "</tr>";


    for(i=0;i<respuesta.length;i++){
        var fecha = respuesta[i].startDate; //Guardo las fechas para darles formato
        var fecha2 = respuesta[i].devolutionDate; //Guardo las fechas para darles formato

        let fechIni = [];
        let fechFin = [];
        fechIni = fecha;
        fechFin = fecha2;
        let conver1 = [];
        let conver3= [];
        for (k = 0; k < 10; k++) {
            conver1.push(fechIni[k]); //Tomo los 9 primeros caracteres que necesito de la fecha
            conver3.push(fechFin[k]); //Tomo los 9 primeros caracteres que necesito de la fecha
        }
        var conver2 = conver1.toString(); //Convierto de arreglo a string
        var conver4 = conver3.toString(); //Convierto de arreglo a string
        for (k = 0; k < 9; k++) {
            conver2 = conver2.replace(",", ""); //Convierto la , por vacio
            conver4 = conver4.replace(",", ""); //Convierto la , por vacio
        }

        myTable+="<tr>";
        myTable+="<td>"+conver2+"</td>";
        myTable+="<td>"+conver4+"</td>";
        myTable+="<td> <button onclick='borrarElementoRE("+respuesta[i].idReservation+")'>Borrar Registro</button>";
        myTable+="</tr>";
    }
    if(respuesta.length==0){
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
    }
    myTable+="</table>";
    $("#resultado2").html(myTable);
    activaNuevo();
}

function guardarInformacionReservaciones(){
    let var4 = {
        startDate:$("#StartDate").val(),
        devolutionDate:$("#EndtDate").val(),
        };

        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var4),
        
        url:"http://152.70.124.82:8080/api/Reservation/save",

        success:function(response) {
            $("#StartDate").val("");
            $("#EndtDate").val("");

            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload();
            activaNuevo();
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se guardo correctamente");
        }
        });
}

/////////

function editarInformacionRE(){
    let myData={
        idReservation:$("#idR").val(),
        startDate:$("#StartDate").val(),
        devolutionDate:$("#EndtDate").val(),
        status:$("#status").val(),

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://152.70.124.82:8080/api/Reservation/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado6").empty();
            $("#idR").val("");
            $("#StartDate").val("");
            $("#EndtDate").val("");
            $("#status").val("");
            traerInformacionReservacionesU();
            activaNuevo();
            alert("Se ha Actualizado el Registro")
        }
    });
}


function traerInformacionReservacionesU(){
    $.ajax({
        url:"http://152.70.124.82:8080/api/Reservation/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaReservacionesU(respuesta);
        }
    });
}

function pintarRespuestaReservacionesU(respuesta){
    let myTable="<table>";
    myTable += "<tr>";
    myTable += "<td>" + 'ID Reservacion' + "</td>"+"<td>" + 'Fecha Inicio' + "</td>" + "<td>" + 'Fecha Fin' + "</td>";
    myTable += "</tr>";


    for(i=0;i<respuesta.length;i++){
        var fecha = respuesta[i].startDate; //Guardo las fechas para darles formato
        var fecha2 = respuesta[i].devolutionDate; //Guardo las fechas para darles formato

        let fechIni = [];
        let fechFin = [];
        fechIni = fecha;
        fechFin = fecha2;
        let conver1 = [];
        let conver3= [];
        for (k = 0; k < 10; k++) {
            conver1.push(fechIni[k]); //Tomo los 9 primeros caracteres que necesito de la fecha
            conver3.push(fechFin[k]); //Tomo los 9 primeros caracteres que necesito de la fecha
        }
        var conver2 = conver1.toString(); //Convierto de arreglo a string
        var conver4 = conver3.toString(); //Convierto de arreglo a string
        for (k = 0; k < 9; k++) {
            conver2 = conver2.replace(",", ""); //Convierto la , por vacio
            conver4 = conver4.replace(",", ""); //Convierto la , por vacio
        }

        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].idReservation+"</td>";
        myTable+="<td>"+conver2+"</td>";
        myTable+="<td>"+conver4+"</td>";
        //myTable+="<td> <button onclick='borrarElementoRE("+respuesta[i].idReservation+")'>Borrar Registro</button>";
        myTable+="</tr>";
    }
    if(respuesta.length==0){
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
    }
    myTable+="</table>";
    $("#resultado6").html(myTable);
    activaNuevo();
}


////////////

function borrarElementoRE(idElemento){

    $.ajax({
        
        url:'http://152.70.124.82:8080/api/Reservation/'+idElemento,
        type:"DELETE",
        
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacionReservaciones();
            activaNuevo();
            alert("Se ha Eliminado.")
        }
    });
}

/////////////Admin////////////



function traerInformacionAdmin(){
    $.ajax({
        url:"http://152.70.124.82:8080/api/Admin/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaAdmin(respuesta);
        }
    });
}

function pintarRespuestaAdmin(respuesta){
    let myTable="<table>";
    myTable += "<tr>";
    myTable += "<td>" + 'Correo' + "</td>" + "<td>" + 'Contraseña' + "</td>" + "<td>" + 'Nombre' + "</td>";
    myTable += "</tr>";
    
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].email+"</td>";
        myTable+="<td>"+respuesta[i].password+"</td>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td> <button onclick='borrarElementoAD("+respuesta[i].idAdmin+")'>Borrar Registro</button>";
        myTable+="</tr>";
    }
    if(respuesta.length==0){
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
        
    }
    myTable+="</table>";
    $("#resultado10").html(myTable);
    activaNuevo();
}

function guardarInformacionAdmin(){
    let var4 = {
        email:$("#ADemail").val(),
        password:$("#ADpassword").val(),
        name:$("#ADname").val(),
        
        };

        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var4),
        
        url:"http://152.70.124.82:8080/api/Admin/save",

        success:function(response) {
            $("#ADemail").val("");
            $("#ADpassword").val("");
            $("#ADname").val("");
            
                console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload();
            activaNuevo();
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se guardo correctamente");
        }
        });
}

//////////////
function editarInformacionAD(){
    let myData={
        idAdmin:$("#ADid").val(),
        email:$("#ADemail").val(),
        password:$("#ADpassword").val(),
        name:$("#ADname").val(),
        

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://152.70.124.82:8080/api/Admin/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado10").empty();
            $("#ADid").val("");
            $("#ADemail").val("");
            $("#ADpassword").val("");
            $("#ADname").val("");
            traerInformacionAdminU();
            activaNuevo();
            alert("Se ha Actualizado el Registro")
        }
    });
}

function traerInformacionAdminU(){
    $.ajax({
        url:"http://152.70.124.82:8080/api/Admin/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaAdminU(respuesta);
        }
    });
}

function pintarRespuestaAdminU(respuesta){
    let myTable="<table>";
    myTable += "<tr>";
    myTable += "<td>" + 'ID Admin' + "</td>" + "<td>" + 'Correo' + "</td>" + "<td>" + 'Contraseña' + "</td>" + "<td>" + 'Nombre' + "</td>";
    myTable += "</tr>";
    
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].idAdmin+"</td>";
        myTable+="<td>"+respuesta[i].email+"</td>";
        myTable+="<td>"+respuesta[i].password+"</td>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        //myTable+="<td> <button onclick='borrarElementoAD("+respuesta[i].idClient+")'>Borrar Registro</button>";
        myTable+="</tr>";
    }
    if(respuesta.length==0){
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
        
    }
    myTable+="</table>";
    $("#resultado10").html(myTable);
    activaNuevo();
}

///////

function borrarElementoAD(idElemento){

    $.ajax({
        
        url:'http://152.70.124.82:8080/api/Admin/'+idElemento,
        type:"DELETE",
        
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado10").empty();
            traerInformacionAdmin();
            activaNuevo();
            alert("Se ha Eliminado.")
        }
    });
}

