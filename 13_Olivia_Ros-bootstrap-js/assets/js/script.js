//Esta es ;a funcion document ready. Es para que se carguq la pagina antes de que se haga cualquier cosa en js

/* Esto era un codigo de prueba que muestra un mensaje cuando hacemos click en un link del navbar
    $(function(){

    $("a").click(function(event){
      alert(this.hash);
    }
  )

  });
*/
  $(function(){
    $("a").click(function(event){

      if (this.hash !== "") {
        event.preventDefault();

        var gato = this.hash;

        $("html, body").animate({
          scrollTop: $(gato).offset().top

          }, 800, function(){
          window.location.hash = gato;
          });
      }
    });

    $('[data-toggle="popover"]').popover();
  });
