alert ("Atencion, el ingreso de datos ha comenzado")
var nombre= prompt("Ingrese el nombre del Alumno: ")
 if (nombre==null || nombre ==""){
     alert("Imposible continuar si no ingresas tu nombre")
 }else{
     alert ("Hola "+nombre)

 }

  var nota1= prompt("Ingrese la primer nota ")
  var nota2= prompt ("ingrese la segunda nota ")
  var nota3= prompt ("Ingrese la tercer nota ")
  
  var promedio= ((parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3))/3)
  alert("El Promedio es: "+ promedio)
  document.write("Promedio guardado en el sistema: "+ promedio)
  
  if (promedio>=7){
      document.write ("           USTED ESTA APROBADO")
  }else(document.write("          USTED ESTA DESAPROBADO"))