<?php

if(isset($_POST['submit'])){
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	
	$mailTo="info@websoftctg.com";
	$headers = "From:".$email;
	$txt = "You have received a e-mail from ".$name.".\n\n".$message;
	
	mail($mailTo,$txt,$headers);

	header("Location:index.php?mailsend);
}

?>