import emailjs from 'emailjs-com';

const generateOTP = () =>{
    const newOTP=Math.floor(1000 + Math.random() * 9000);
    return(newOTP);
}


const sendOTP = (newOTP, email) =>{

    const recipientEmail = email; 
    const subject = 'OTP for Signingup';
    const message =  newOTP;

    emailjs.send(
      'service_3n4u5xv', 
      'template_lxheujc', 
      { recipientEmail, subject, message },
      '8UEl9xzVrd20IL3WZ' 
    )
      .then((response) => {
        console.log('Email sent:', response);
        alert('Email sent successfully!');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('Failed to send email.');
      });
}

export {generateOTP, sendOTP}