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
