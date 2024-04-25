document.querySelector('.img-btn').addEventListener('click', function()
	{
		document.querySelector('.cont').classList.toggle('s-signup')
	}
);

var myInput = document.getElementsByName("customer[email]")[0];
myInput.oninvalid = function() {
  myInput.setCustomValidity("Please enter a valid Email Id")
};