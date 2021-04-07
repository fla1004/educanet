<?php
  header("Access-Control-Allow-Origin: http://localhost:4200");
  header("Access-Control-Allow-Headers: *");
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  
  $jsonMascota = json_decode(file_get_contents("php://input")); 
   
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;
   
  if (!$jsonMascota) {
    exit("No hay datos");
   }

  else{

    require 'PHPMailer/Exception.php';
    require 'PHPMailer/PHPMailer.php';
    require 'PHPMailer/SMTP.php';

    $nombre = $jsonMascota->nombre;
    $correo = $jsonMascota->correo;
    $ci = $jsonMascota->ci;
    $telefono = $jsonMascota->telefono;
    $membresia = $jsonMascota->membresia;

    //Instantiation and passing `true` enables exceptions
    $mail = new PHPMailer(true);

    try {
      //Configuracion del servidor 
        $mail->SMTPDebug = 1;                      //Enable verbose debug output
        
        $mail->isSMTP();                                            //Send using SMTP
        $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
        $mail->Username   = 'fla.claros.95@gmail.com';                     //SMTP username
        $mail->Password   = 'Fla106245*';                               //SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         //Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
        $mail->Port       = 587;                                    //TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

        //destinos
        $mail->setFrom('fla.claros.95@gmail.com', 'Web Educanet');
        $mail->addAddress('fla.claros.95@gmail.com');     //Add a recipient

        //Contenido
        $mail->isHTML(true);                                  //Set email format to HTML
        $mail->Subject = 'Solicitud membresia EDUCAnet';
        $mail->Body    =  '<h1> Datos del solicitante</h1>
                          <hr>
                          <strong> Nombre: </strong>'.$nombre.'<br>'.
                          '<strong> CI: </strong>'.$ci.'<br>'.
                          '<strong> Correo: </strong>'.$correo.'<br>'.
                          '<strong> Telefono:</strong>'.$telefono.'<br>'.
                          '<strong> Membresia: </strong>'.$membresia ;

        $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

        $mail->send();
        header('Content-Type: application/json');
        echo 'Mensaje enviado';
    }
    catch (Exception $e) {
      echo "No se pudo enviar el email. Error: {$mail->ErrorInfo}";
    }
  }

 