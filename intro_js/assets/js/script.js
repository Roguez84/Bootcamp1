$(document).ready(function(){
    saludar()
})  

$('.carousel').carousel({
    interval: 2000,
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

//$(document).scrollingElement(function(){
//    console.log('me estoy moviendo')
//})

//function addCard(){
  //  console.log('addCard ejecutado')
//};

//$('#addCardButton').click(function(){
 //   console.log('addCard ejecutado')//
//})

//$('#addCardButton').click(function(){
//    $('#cardList').append('<h2>añadido</h2>')
//});

$('#addCardButton').click(function(){
    var card = `<div class="col-4 mr-0">
                    <div class="card border-danger mb-3" style="max-width: 18rem;">
                        <div class="card-header">Header</div>
                        <div class="card-body text-danger">
                        <h5 class="card-title">Danger card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div> 
                </div>`
    
    
    $('#cardList').append(card);
});