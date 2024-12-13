const numero_telefono = '595976988254';
function whatApi() {
    $('body').append(`
      <a class="botonWhat">
          <span class="avisoAyuda">
              ¿Necesitas ayuda? <small>Conversa con nosotros!</small>
          </span>
          <div class="btn-whatsapp"><i class="posicionwhat fa fa-whatsapp"></i></div>
      </a>
    `);
    setTimeout(() => {
        if (window.innerWidth <= 991) {
            $('.avisoAyuda').css('display', 'none');
        }
    }, 200);
    setTimeout(() => {
        $('.botonWhat').on('click', function () {
            window.location.href = `https://wa.me/${numero_telefono}`;
        });
    }, 1500);
    
    /* 
     Si el dispositivo es pequeño, se mostrará el aviso por 5 segundos
     esto después de 10 segundos estando en la página
    */
   console.log(window.innerWidth);
   
    if (window.innerWidth <= 991) {
        setTimeout(() => {
            console.log('aaaaaaaaaaaaaaaa');
            
            $('.avisoAyuda').show(400, function () {
                $(this).css('display', 'inline-block');
            });
        
            setTimeout(() => {
                $('.avisoAyuda').hide(400, function () {
                    $(this).css('display', 'none');          
                });
            }, 5000);
            
        }, 10000);
    }
}
  