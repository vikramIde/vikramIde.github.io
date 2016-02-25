		
		       <script>
function contact(){
 var name=jQuery("#name").val();
var email=jQuery('#email').val();
var subject=jQuery('#subject').val();

var message=jQuery('#message').val();
 var email_regex=/^[\w%_\-.\d]+@[\w.\-]+.[A-Za-z]{2,6}$/;
validation_holder=0;
	
	if(name=="")
	{jQuery("span.val_name").html("Please enter name").addClass('validate');
	   validation_holder=1;
	}
	else
	{jQuery("span.val_name").html("");}
	
if(subject=="")
	{jQuery("span.val_subject").html("Please enter subject").addClass('validate');
	   validation_holder=1;
	}
	else
	{jQuery("span.val_subject").html("");}
 if(message=="")
	{jQuery("span.val_mess").html("Please enter message").addClass('validate');
	   validation_holder=1;
	}
	else
	{jQuery("span.val_mess").html("");}
		 if(email=="")
		 {
			jQuery("span.val_email").html("Please enter your email").addClass('validate');
			validation_holder=1;
			 			 
			 }
			 else
			 { if(email_regex.test(email)==false)
			 {jQuery("span.val_email").html("Invalid Email").addClass('validate');
			 validation_holder=1;
				 }
				 else
				 {jQuery("span.val_email").html("");}
				 
				 
				 
				 }
	
	


 if(validation_holder==0)
 { 
		jQuery.ajax({
	   type: "POST",
	   url:"../content/developer/contact.php",
	   data: {fstname:fstname, mobile:mobile, email:email, npassword:npassword, cpassword:cpassword}
	   }).done(function(result){
	   jQuery('#form_id').trigger("reset");
	            if(result=='correct')
                    {
		 jQuery("#success").html(result);}


	   });

	 }
 
 }
 </script>