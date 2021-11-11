document.querySelector("button").addEventListener("click", function () {
	var address = document.querySelector("textarea").value;
	console.log(address);
	if (address == "") {
		alert("address cannot be empty");
	} else {
		window.location.href = "payment.html";
	}
});
