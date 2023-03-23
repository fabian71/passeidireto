const form = document.querySelector('form');

function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

var replaceImages = () => {
   
    const check = document.getElementById('text-inner-content');

    if (check !== null) {

        check.removeAttribute('style');

  
        const foo = document.querySelector('[data-testid="register-banner"]').style.visibility = 'hidden';

        console.log(foo);

    }else{

        var conteudo1 = document.getElementById('pf1').innerHTML;

        var conteudo2 = document.getElementById('pf2').innerHTML;

        document.getElementsByClassName("document-fragment").innerHTML =  conteudo1 + "\n\n\n\n\n\n\n\n\n\n\n\n\n<br><br><br><br><br>" + conteudo2;

        (async () => {
            const response = await chrome.runtime.sendMessage({conteudo: conteudo1 + '<br><br>' + conteudo2});
            // do something with response here, not outside the function
            //console.log(response);
          })();
    }


    //document.getElementById("file-viewer").style.fontsize = "25px";


    
}

form.addEventListener('submit',async (event) => {
    event.preventDefault();

    

    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});

    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: replaceImages,
    });

});

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {


      const conteudo = document.getElementById('conteudo');
    

       conteudo.innerHTML = '';
       conteudo.innerHTML = request.conteudo;


 
       //sendResponse({farewell: "goodbyexxxx"});


    }
  );
