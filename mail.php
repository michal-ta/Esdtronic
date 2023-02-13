<?php
  if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $company = $_POST['company'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    if (!is_numeric($phone)) {
        echo "V telefónnom čísle sa môžu vyskytovať iba číselné znaky.";
        return;
    }

    $to = "m.kis@esdtronic.eu";
    $subject = "Nová správa od $name";
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
      echo "Správa bola úspešne odoslaná.";
    } else {
      echo "Nastala chyba pri odosielaní správy, skúste to prosím neskôr.";
    }
  }
