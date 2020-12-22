$(document).ready(function(){
    saludar()
})

$('.carousel').carousel({
    interval: 1000,
    pause: false,
    wrap: true
})

$('.toast').toast({
    delay: 3000,
    animation: true
})

$('.toast').toast('show')


//$(document).on('ready')

//function saludar(){
 //   alert('hola');
//}

$('nav').dblclick(function(){
    alert('hiciste click en el navbar');
});

$('#secondImage').click(function(){
    alert('hiciste click en la segunda imagen');
});
