<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // 1. Honeypot ochrana (ak je toto pole vyplnené, ide o bota)
    if (!empty($_POST['website'])) {
        die(json_encode(["status" => "error", "message" => "Bot detected."]));
    }

    // 2. Načítanie a čistenie dát
    $name = filter_var(trim($_POST["name"]), FILTER_SANITIZE_STRING);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $subject = filter_var(trim($_POST["subject"]), FILTER_SANITIZE_STRING);
    $message = filter_var(trim($_POST["message"]), FILTER_SANITIZE_STRING);
    $gdpr = isset($_POST["gdpr"]) ? true : false;

    // 3. Validácia
    if (!$name || !filter_var($email, FILTER_VALIDATE_EMAIL) || !$message || !$gdpr) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Neplatné údaje alebo chýbajúci súhlas."]);
        exit;
    }

    // 4. Nastavenie e-mailu
    $to = "info@esdtronic.eu"; 
    $email_subject = "Nový dopyt: $subject";
    $email_body = "Meno: $name\nE-mail: $email\n\nSpráva:\n$message";
    $headers = "From: web@esdtronic.eu\r\nReply-To: $email";

    if (mail($to, $email_subject, $email_body, $headers)) {
        echo json_encode(["status" => "success", "message" => "Správa bola odoslaná."]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Chyba servera pri odosielaní."]);
    }
} else {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Metoda není povolena."]);
}