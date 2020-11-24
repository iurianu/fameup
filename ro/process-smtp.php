<?php
	
/*********Mail processing for the form with attachments**********/

require_once("PHPMailer/Exception.php");
require_once("PHPMailer/PHPMailer.php");
require_once("PHPMailer/SMTP.php");

//Create a new PHPMailer instance
$mail = new PHPMailer\PHPMailer\PHPMailer();

//Tell PHPMailer to use SMTP
$mail->isSMTP();

//Enable SMTP debugging
// 0 = off (for production use)
// 1 = client messages
// 2 = client and server messages
$mail->SMTPDebug = 0;

//Set the hostname of the mail server
$mail->Host = 'smtp.gmail.com';

//Set the SMTP port number - likely to be 25, 465 or 587
$mail->Port = 587;

//Whether to use SMTP authentication
$mail->SMTPAuth = true;

//Username to use for SMTP authentication
$mail->Username = 'happy.media.dev@gmail.com';

//Password to use for SMTP authentication
$mail->Password = 'Happy&PW0';

$mail->SMTPSecure = 'tls';

//Set who the message is to be sent from
$mail->setFrom($_POST["email"], $_POST["name"]);

//Set an alternative reply-to address
$mail->addReplyTo($_POST["email"], $_POST["name"]);

//Set who the message is to be sent to
$mail->addAddress('contact@fameup.net');
$mail->addAddress('conversii@happy-media.ro');


//Set the subject line
$mail->Subject = "Cerere din formular Website";

$message = "<b>Nume:</b> ".$_POST["name"]."<br>".
		   "<b>Email:</b> ".$_POST["email"]."<br>".
		   "<b>Mesaj:</b> ".$_POST["message"];
$mail->MsgHTML($message);

$mail->IsHTML(true);

//send the message, check for errors
if (!$mail->send()) {
	echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
	//echo 'Message sent!';
	header('Location: thankyou.html');
}	

?>