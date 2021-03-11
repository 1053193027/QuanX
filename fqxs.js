let url = $request.url;
let body = JSON.parse($response.body);

if (url.indexOf(user) != -1) {
	body.data.isvip = 1;
}

	body = JSON.stringify(body);

$done({body});
