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
			$('#profile').html(`
			<div class="panel panel-default">
				<div class="panel-heading">
					<h3 class="panel-title">${user.name}</h3>
				</div>
				<div class="panel-body">
					<div class="row">
						<div class="col-md-3">
							<img class="thumbnail avatar" src="${user.avatar_url}">
								<a target="_blank" class="btn btn-primary btn-block" href="${user.html_url}"> View Profile</a>
						</div>
						<div class="col_md-9">

						</div>
					</div>
				</div>
			</div>
			`);
		});
	});
});
