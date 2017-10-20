(function(){

	document.addEventListener('DOMContentLoaded', function() {
		
			var refresh = document.getElementById('refresh');

			console.log(refresh);
			
			refresh.addEventListener('click',function(){

				var xhttp = new XMLHttpRequest();
					  xhttp.onreadystatechange = function() {
					    if (this.readyState == 4 && this.status == 200) {
					      var responseText = this.responseText;
					      
					      var response = JSON.parse(responseText);


					      console.log(response);
					      
					      document.getElementById('demo').innerHTML =  response.INR["symbol"]  + response.INR["15m"] ;
					    }
					  };
					  xhttp.open("GET", "https://blockchain.info/ticker", true);
					  xhttp.send();

	});
  })


})();