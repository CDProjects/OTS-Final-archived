<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $age = $_POST['age'];
  $sex = $_POST['sex'];
  $email = $_POST['email'];
  $inquiry = $_POST['inquiry'];

  $to = 'youremail@example.com';
  $subject = 'New Contact Inquiry';
  $message = "Name: $name\nAge: $age\nSex: $sex\nEmail: $email\nInquiry: $inquiry";
  $headers = "From: $email";

  mail($to, $subject, $message, $headers);

  echo "Thank you for contacting us!";
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Invalid email format";
    exit;
  }  
?>
