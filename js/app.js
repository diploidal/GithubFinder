$(document).ready(function(){
	$('#searchUser').on('keyup', function(e) {
		let userName = e.target.value;

		// making requety ti github
		$.ajax({
			url:'https://api.github.com/users/' + userName,
			data:{
				client_id:'1df8bb3f148d51fc631e',
				client_secret:'b5c867d1368528e052ab91ba688fc43195d015e9'
			}

		}).done(function(user){
			console.log(user);
		})
	});
});
