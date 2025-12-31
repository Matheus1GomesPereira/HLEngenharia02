// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

//client section owl carousel
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: [
        '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});

/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(-26.9054302, -48.6939836),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

<script>
  // Inicializa o EmailJS
  emailjs.init("1ZEx6szUU7mPooXxu");

  const form = document.getElementById("formContato");
  const button = form.querySelector("button");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    // Ativa loading no botão
    button.disabled = true;
    button.innerHTML = "Enviando... ⏳";

    emailjs.sendForm("service_2smj5r7", "template_qvfn6bj", form)
      .then(() => {

        // Limpa o formulário
        form.reset();

        // Redireciona para página de obrigado
        window.location.href = "obrigado.html";

      })
      .catch((error) => {
        console.error("Erro:", error);
        alert("Erro ao enviar. Tente novamente.");

        // Restaura o botão
        button.disabled = false;
        button.innerHTML = "Enviar";
      });
  });
</script>

