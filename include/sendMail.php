<?php

	extract($_POST);

	$to      = 'celinequevilly@gmail.com';
    $subject = 'Mail de '.$name.' via le site CV';
    $message = $msg;
    $headers = 'From: celinequevilly@gmail.com' . "\r\n" .
    'Reply-To: ' . $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

    if (mail($to, $subject, $message, $headers)) {
    	echo "Votre message a été envoyé avec succès";
    } else {
    	echo "Un problème est survenu lors de l'envoi de votre message";
    }

?>