function copy1() {
    var copyText = document.getElementById("copy1");
    var textToCopy = copyText.value;
  
    copyText.select();
    copyText.setSelectionRange(0, 99999);

  
    navigator.clipboard.writeText(textToCopy);
  
    setTimeout(function() {
        alert(`Copied the text: ${textToCopy}`);
        console.log(`Copied the text: ${textToCopy}`);
    }, 100000); // 10000 milliseconds = 10 seconds
}
  
function copy2() {
    var copyText = document.getElementById("copy2");
    var textToCopy = copyText.value;
  
    copyText.select();
    copyText.setSelectionRange(0, 99999);
  
    navigator.clipboard.writeText(textToCopy);
  
    setTimeout(function() {
        alert(`Copied the text: ${textToCopy}`);
        console.log(`Copied the text: ${textToCopy}`);
    }, 100000); // 10000 milliseconds = 10 seconds
}

function copy3() {
    var copyText = document.getElementById("copy3");
    var textToCopy = copyText.value;
  
    copyText.select();
    copyText.setSelectionRange(0, 99999);
  
    navigator.clipboard.writeText(textToCopy);
  
    setTimeout(function() {
        alert(`Copied the text: ${textToCopy}`);
         console.log(`Copied the text: ${textToCopy}`);
    }, 100000); // 10000 milliseconds = 10 seconds
}

function copy4() {
    var copyText = document.getElementById("copy4");
    var textToCopy = copyText.value;
  
    copyText.select();
    copyText.setSelectionRange(0, 99999);
  
    navigator.clipboard.writeText(textToCopy);
  
    setTimeout(function() {
        alert(`Copied the text: ${textToCopy}`);
        console.log(`Copied the text: ${textToCopy}`);
    }, 100000); // 10000 milliseconds = 10 seconds
}

function mail() {
    window.location.href = "mailto:tokyintelligentgamer@gmail.com";
    // Replace 'tokyintelligentgamer@gmail.com' with the recipient's email address
    var recipientEmail = 'tokyintelligentgamer@gmail.com';

    // Construct the Gmail compose URL
    var gmailComposeUrl = 'https://mail.google.com/mail/u/0/?view=cm&fs=1&to=' + recipientEmail;

    // Open Gmail in a new window/tab
    window.open(gmailComposeUrl, '_blank');
}