<?php
header('Content-Type: text/html; charset=utf-8');

$recepient = "nice-dev@list.ru";
$subject = "Заявка с сайта - Header";
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";

$name = trim($_POST['name']);
$tel = trim($_POST['tel']);
$email = trim($_POST['email']);
$message = trim($_POST['message']);

$text = "Имя: $name <br/> Телефон: $tel <br/> E-mail: $email <br/> Сообщение: $message";

mail($recepient, $subject, $text, $headers);
