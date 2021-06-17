<footer class="site-footer">
    <div class="contenedor clearfix">
      <div class="footer-informacion">
        <h3>Sobre <span> GdlWebCamp</span></h3>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
      </div>
      <div class="ultimos-tweets">
        <h3>Últimos <span> Tweets</span></h3>
        <ul>
          <li>It is a long established fact that a reader will be distracted by the readable content></li>
          <li>It is a long established fact that a reader will be distracted by the readable content></li>
          <li>It is a long established fact that a reader will be distracted by the readable content></li>
        </ul>
      </div>
      <div class="menu">
        <h3>Redes <span> Sociales</span></h3>
        <nav class="redes-sociales">

          <a href="#"><i class="fab fa-facebook-square"></i></a>
          <a href="#"><i class="fab fa-twitter-square"></i></a>
          <a href="#"><i class="fab fa-pinterest-square"></i></a>
          <a href="#"><i class="fab fa-youtube-square"></i></a>
          <a href="#"><i class="fab fa-instagram-square"></i></a>

        </nav>
      </div>
    </div>

  </footer>



  <script src="js/vendor/modernizr-3.11.2.min.js"></script>
  <script src="js/plugins.js"></script>
  <script src="https://kit.fontawesome.com/2b26d5d976.js" crossorigin="anonymous"></script>
  <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"></script>
  <script src="js/jquery.js"></script>
  <script src="js/jquery.animateNumber.min.js"></script>
  <script src="js/jquery.countdown.min.js"></script>
  <script src="js/jquery.lettering.js"></script>

  <?php 
    $archivo = basename($_SERVER['PHP_SELF']); // Retorna el nombre del archivo actual
    $pagina = str_replace('.php', '', $archivo);
    // Para cargar una hoja de estilos únicamente en una página
    if ($pagina == 'invitados' || $pagina == 'index') {
      echo '<script src="js/jquery.colorbox-min.js"></script>';
    } else if ($pagina == 'conferencia') {
      echo '<script src="js/lightbox.js"></script>';
    }
  
  ?>  
  <script src="js/main.js"></script>

  <!-- Google Analytics: change UA-XXXXX-Y to be your site's ID. -->
  <script>
    window.ga = function () { ga.q.push(arguments) }; ga.q = []; ga.l = +new Date;
    ga('create', 'UA-XXXXX-Y', 'auto'); ga('set', 'anonymizeIp', true); ga('set', 'transport', 'beacon'); ga('send', 'pageview')
  </script>
  <script src="https://www.google-analytics.com/analytics.js" async></script>
</body>

</html>
