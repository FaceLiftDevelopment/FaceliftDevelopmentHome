<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $mailFrom = $_POST['mail'];
    $number = $_POST['number'];
    $subject = $_POST['sunbject'];
    $message = $_POST['message'];

    $mailTo = "faceliftdevelopment@gmail.com";
    $headers = "From: ".$mailFrom;
    $txt = "You have recauved an email from ".$name.".\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: index.php?mailsend");
}