function GetUser(setLoggedInStatus, setUser, setErrMes) {
	const getUpdateUserUrl = "http://localhost:5000/api/user/userUpdate/";
	function handleErrors(response) {
		if (!response.ok) {
			if (response.status === 400) {

				const msg1 = response.json().then(msg => {
					console.log(msg.message);
					setErrMes(msg.message)
				})
				console.log("Fetch error 400 ", msg1);
			}
			throw Error(response.statusText);
		}
		return response;
	}

	const getEmail = JSON.parse(localStorage.getItem("user")).email
	const data = {
		email: getEmail
	}
	fetch(getUpdateUserUrl, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data),
	}).then(handleErrors).then(response => response.json())
		.then(data => {
			setLoggedInStatus(data.auth)
			setUser(data.user)
			localStorage.setItem("token", data.token)
			localStorage.setItem("user", JSON.stringify(data.user))
			//console.log("getUser");
		})
		.catch((error) => {
			console.error('Error:', error);
			if (typeof error.json === "function") {
				error.json().then(jsonError => {
					console.log("Json error from API");
					console.log(jsonError);
				}).catch(genericError => {
					console.log("Generic error from API");
					console.log(error.statusText);
				});
			}
		});

	//console.log("getUser Done");
}

export default GetUser