<!DOCTYPE html>
<html lang="Sk" class="theme">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link
      rel="shortcut icon"
      href="./img/logo with bgr.jpg"
      type="image/x-icon"
    />
  <link rel="stylesheet" href="./styles/style.min.css">
  
</head>

<nav class="php_nav_wraper">
  <div class="logo_wraper">
    <svg width="80" height="80" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="98" height="98" fill="#06419F" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 104H104V0H0V104ZM4 100V4H100V100H4ZM30.7453 83.1411H75.118V65.3374H50.2733V61.6687H71.3913V44.1718H50.2733V38.9693H75.118V20.8589H30.7453V83.1411Z" fill="white" />
    </svg>
    <h4 class="company_name">ESDtornic s.r.o</h4>
  </div>
</nav>

<body class="php_wraper">
  <?php
  if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = trim($_POST['name']);
    $company = trim($_POST['company']);
    $email = trim($_POST['email']);
    $phone = trim($_POST['phone']);
    $message = trim($_POST['message']);

    if (!is_numeric($phone)) {
      echo "V telefónnom čísle sa môžu vyskytovať iba číselné znaky.";
      return;
    }

    $to = "m.kis@esdtronic.eu";
    $subject = "vyplený kontaktný formulár na stránke od $name";
    $headers = "From: $email" . "\r\n";
    $headers .= "Reply-To: $email" . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    $body = "<html><body>";
    $body .= "<h3>Meno: $name</h3>";
    $body .= "<h3>Spoločnosť: $company</h3>";
    $body .= "<h3>Email: $email</h3>";
    $body .= "<h3>Telefónne číslo: $phone</h3>";
    $body .= "<p>Správa: $message</p>";
    $body .= "</body></html>";

    
    if (mail($to, $subject, $body, $headers)) {
      echo 
      "<div class='message'>
      <h1 class='php_header success'>Správa bola úspešne odoslaná. Čoskoro sa vám ozveme </h1>
      <a href='./index.html' class='php_btn'>Späť na hlavnú stránku</a>
    </div>";
    } else {
      echo 
      "<div class='message'>
      <h1 class='php_header wrong'>Nastala chyba , prosím skúste opakovať neskôr. </h1>
      <a href='./index.html' class='php_btn'>Späť na hlavnú stránku</a>
      </div>";
    }
  }
  ?>
  

</body>

</html>