var navbar = `
                <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
                    <div class="container">
                        <a class="navbar-brand" href="#">Market</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav ml-auto">
                                <a class="nav-link active" href="#">Inicio <span class="sr-only">(current)</span></a>
                                <a class="nav-link" href="#">Productos</a>
                                <a class="nav-link" href="#">Servicios</a>
                            </div>
                        </div>
                    </div>
                </nav>
            `

//var footer = PLACEHOLDER FOR FOOTER VARIABLE
var hero = `
            <div class="jumbotron">
                <h1 class="display-4">Bienvenido!</h1>
                <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr class="my-4">
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <a class="btn btn-primary btn-lg" href="#" role="button">Productos</a>
                <a class="btn btn-primary btn-lg" href="#" role="button">Servicios</a>
            </div>
            `



$('#root').append(navbar);
$('#root').append(hero);
//$('#root').append(footer); WE would use this if we defined a footer variable


$('.navbar-link a').click(function(){
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
});


//Usando JS puro para agregar footer
//var root = document.getElementById('root');
//var footer = document.createElement('footer'); //<footer></footer>
//var h2 = document.createElement('h2'); // <h2></h2>
//var footerText = document.createTextNode('Market'); //Market

//footer.style.height = '70px';
//footer.style.position = 'absolute';
//footer.style.bottom = '0';
//footer.style.width = '100%';
//footer.className = 'bg-primary text-center pt-4';

//h2.className = 'text-white';

//h2.appendChild(footerText);
//footer.appendChild(h2);
//root.appendChild(footer);