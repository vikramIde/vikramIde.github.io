<?php

 $name=$_REQUEST['name'];

 $sub=$_REQUEST['subject'];
 $email=$_REQUEST['email'];
 $mes=$_REQUEST['message'];


   $to = "harshithak61@gmail.com";
   $subject = "Message From Contact us Page";
   $header="from: $email";

   $message = "Name :  $name.\n";
 $message .= "Subject :  $sub.\n";
   $message .= "Message :  $mes.\n";

   $sentmail = mail($to,$subject,$message,$header);

   if($sentmail)
            {
  
    echo "correct";
   }

?>
