<!doctype html>
<html class="no-js" lang="">

<head>
  <meta charset="utf-8">
  <title></title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <meta property="og:title" content="">
  <meta property="og:type" content="">
  <meta property="og:url" content="">
  <meta property="og:image" content="">

  <link rel="manifest" href="site.webmanifest">
  <link rel="apple-touch-icon" href="icon.png">
  <!-- Place favicon.ico in the root directory -->

  <link rel="stylesheet" href="css/normalize.css">
  
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css" />
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Oswald&family=PT+Sans&display=swap" rel="stylesheet">
  
  <?php 
    $archivo = basename($_SERVER['PHP_SELF']); // Retorna el nombre del archivo actual
    $pagina = str_replace('.php', '', $archivo);
    // Para cargar una hoja de estilos únicamente en una página
    if ($pagina == 'invitados' || $pagina == 'index') {
      echo '<link rel="stylesheet" href="css/colorbox.css">';
    } else if ($pagina == 'conferencia') {
      echo '<link rel="stylesheet" href="css/lightbox.css">';
    }
  
  ?>
  <link rel="stylesheet" href="css/main.css">

  <meta name="theme-color" content="#fafafa">
</head>

<body class="<?php echo $pagina; ?>">

  <!-- Add your site or application content here -->
  <header class="site-header">
    <div class="hero">
      <div class="contenido-header">
        <nav class="redes-sociales">

          <a href="#"><i class="fab fa-facebook-square"></i></a>
          <a href="#"><i class="fab fa-twitter-square"></i></a>
          <a href="#"><i class="fab fa-pinterest-square"></i></a>
          <a href="#"><i class="fab fa-youtube-square"></i></a>
          <a href="#"><i class="fab fa-instagram-square"></i></a>

        </nav>

        <div class="informacion-evento">
          <div class="clearfix">
            <p class="fecha"> <i class="fas fa-calendar-alt"></i> 10-12-Dic</p>
            <p class="ciudad"> <i class="fas fa-map-marker-alt"></i> Barcelona</p>
          </div>

          <h1 class="nombre-sitio">GdlWebCamp</h1>
          <p class="slogan">La mejor Conferencia de <span>Diseño Web</span> </p>

        </div><!--Información evento-->

      </div>

    </div><!--Hero-->

  </header>

  <div class="barra">
    <div class="contenedor clearfix">
      <div class="logo">
        <a href="index.php">
           <img src="img/logo.svg" alt="Imagen Logo">
        </a>
      </div>

      <div class="menu-movil">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav class="navegacion-principal clearfix">
        <a href="conferencia.php">Conferencia</a>
        <a href="calendario.php">Calendario</a>
        <a href="invitados.php">Invitados</a>
        <a href="reservas.php">Reservas</a>
      </nav>  
    </div><!--.Contenedor-->
  </div><!--.Barra-->