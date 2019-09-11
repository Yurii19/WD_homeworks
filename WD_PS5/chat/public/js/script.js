
window.onload = init;

function init(){
	const sender = document.getElementById('submit-messege');
	sender.addEventListener('click', sendMessage);
}

function sendMessage() {
	var req = getXmlHttp()  ;
	var statusElem = document.getElementById('vote_status') ;
	
	req.onreadystatechange = function() {  
		if (req.readyState == 4) { 
			statusElem.innerHTML = req.statusText // показать статус (Not Found, ОК..)
			if(req.status == 200) { 
				alert("Ответ сервера: "+req.responseText);
			}
		}
	}

	req.open('GET', '/ajax_intro/vote.php', true);  
	req.send(null);  // отослать запрос
	statusElem.innerHTML = 'Ожидаю ответа сервера...' 
}


//function from https://javascript.ru/ajax/intro
function getXmlHttp(){
  var xmlhttp;
  try {
    xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
  } catch (e) {
    try {
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (E) {
      xmlhttp = false;
    }
  }
  if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
    xmlhttp = new XMLHttpRequest();
  }
  return xmlhttp;
}