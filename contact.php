<?php

if($_POST["submit"]) {
    $recipient="faceliftdevelopment@gmail.com";
    $subject=["subject"];
    $name=$_POST["name"];
    $email=$_POST["email"];
    $number=$_POST["number"];
    $message=$_POST["message"];

    $mailBody="Name: $name\nEmail: $email\n\n$message";

    mail($recipient, $subject, $mailBody, "From: $name <$email>");

}

?>