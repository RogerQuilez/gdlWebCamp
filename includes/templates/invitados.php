<?php
        // Indica si funciona la base de datos y guarda una consulta en una variable
        try {
            require_once('includes/funciones/bd_conexion.php');
            $sql = "SELECT * FROM `invitados` ";
            $resultado = $conn->query($sql); // Guarda la consulta en una variable que se permite mostrar por pantalla
        } catch (Exception $e) {
            $error = $e->getMessage(); // Nos imprime un mensaje de error en caso de que no se pueda conectar con nuestra base de datos
        }
    ?>

    <section class="invitados contenedor seccion">
        <h2>Nuestros Invitados</h2>
        <ul class="lista-invitados clearfix">

        <?php while ($invitados = $resultado->fetch_assoc() ) { ?>
            <li>
                <div class="invitado">
                    <a class="invitado-info" href="#invitado<?php echo $invitados['invitado_id']; ?>">
                        <img src="img/<?php echo $invitados['url_imagen'] ?>" alt="Imagen Invitado">
                        <p><?php echo $invitados['nombre_invitado'] . ' ' . $invitados['apellido_invitado'] ?></p>
                    </a>
                </div>
            </li>
            <div style="display:none">
                <div class="invitado-info" id="invitado<?php echo $invitados['invitado_id']; ?>">
                    <h2><?php echo $invitados['nombre_invitado'] . ' ' . $invitados['apellido_invitado']; ?></h2>
                    <img src="img/<?php echo $invitados['url_imagen'] ?>" alt="Imagen Invitado">
                    <p><?php echo $invitados['descripcion'] ?></p>
                </div>
            </div>                    
        <?php } //While de fetch_assoc ?>

        </ul>
    </section> <!--.Seccion Invitados-->

        <?php
            $conn->close(); // Cierra la conexión a la base de datos
?>  