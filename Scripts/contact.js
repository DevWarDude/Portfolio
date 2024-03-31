export function sendEmail(dataObj){
  Email.send({
    SecureToken: 'df8f40ea-1dd8-472f-8275-cb1c21b6e940',
    To : 'wardude704@gmail.com',
    From : "wardude704@gmail.com",
    Subject : "Details From My Website",
    Body : `
      Title: ${dataObj.title}; 
      <br> Name: ${dataObj.name};
      <br> Email: ${dataObj.email};
      <br> Message: ${dataObj.message};
    `
  }).then(
    message => alert('Message Sent Sucessfully! \nYou will get a reply shortly.')
  );
}