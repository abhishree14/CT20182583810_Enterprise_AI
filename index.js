function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "<narayanan007.np@gmail.com>",
	Password : "<thirumurugan>",
	To : '<surendarsai007.np@gmail.com>',
	From : "<narayanan007.np@gmail.com>",
	Subject : "<test mail>",
	Body : "<User name : suren>",
	}).then(
		message => alert("mail sent successfully")
	);
}