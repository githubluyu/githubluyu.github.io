document.getElementById("boton").addEventListener('click', function() {
    console.log("hola mundo desde EventListener");
    document.getElementById("demo").innerHTML = "MUCHAS GRACIAS!!"
});


document.getElementById("boton_color").addEventListener('click', function() {
    document.body.style.backgroundColor = 'red';
});
document.getElementById("boton_default").addEventListener('click', function() {
    document.body.style.backgroundColor = 'aquamarine';
});