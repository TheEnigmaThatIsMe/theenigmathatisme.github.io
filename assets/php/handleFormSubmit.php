<!--<?php

if(isset($_POST['c_name'])){
    
    $res['sendstatus'] = 1;
    $res['message'] = 'Form Submission Succesful';
    echo json_encode($res);
}

?>-->

<?php
    if ($_POST["submit"]) {
        $name = $_POST['c_name'];
        $email = $_POST['c_email'];
        $message = $_POST['c_message'];
        
        $from = 'georgegilmartin.me'; 
        $to = 'ggilmartin1123@gmail.com'; 
        $subject = 'Contact from georgegilmartin.me';
        
        $body = "From: $name\n E-Mail: $email\n Message:\n $message";
 
        // Check if name has been entered
        if (!$_POST['c_name']) {
            $errName = 'Please enter your name';
        }
        
        // Check if email has been entered and is valid
        if (!$_POST['c_email'] || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
            $errEmail = 'Please enter a valid email address';
        }
        
        //Check if message has been entered
        if (!$_POST['c_message']) {
            $errMessage = 'Please enter your message';
        }
 
		// If there are no errors, send the email
		if (!$errName && !$errEmail && !$errMessage) {
			if (mail ($to, $subject, $body, $from)) {
				$res['sendstatus'] = 1;
    			$res['message'] = 'Form Submission Succesful';
				echo json_encode($res);
			}
		}
		else{
			$res['sendstatus'] = 0;
    		$res['message'] = 'Form Submission Error';
			echo json_encode($res);
		}
    }
?>