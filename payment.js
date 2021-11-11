document.getElementById("submit").addEventListener("click", function (e) {
	e.preventDefault();
	var cardNo = document.getElementById("cardNo").value;
	var cvv = document.getElementById("cvv").value;
	var edate = document.getElementById("edate").value;
	if (cardNo == "" || cvv == "" || edate == "") {
		alert("every field must be filled in order to place order");
	} else if (cardNo.toString().length < 16 || cardNo.toString().length > 16) {
		alert("card no. must be 16 digits");
	} else if (cvv.toString().length < 3 || cvv.toString().length > 3) {
		alert("cvv must be 3 digits");
	} else if (edate.length != 7) {
		alert("expiry date should be like 'MM/YYYY'");
	} else {
		alert("Your order is successfully placed");
		window.location.href = "home.html";
	}
});
