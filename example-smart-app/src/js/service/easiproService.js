function authenticate(data, cbSucess, cbError){
	$.ajax({
		url: easipro_baseurl + '/authenticate',
		headers: {
			'Content-Type':'application/json'
		},
		method: 'POST',
		dataType: 'json',
		data: JSON.stringify(data),
		success: cbSucess,
		error: cbError
	});
}
