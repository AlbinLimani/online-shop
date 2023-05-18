<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Online Shop</title>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/material-design-icons-iconfont@6.1.0/dist/material-icons.css">



	@vite('resources/css/app.css')
</head>
<body>
	<div id="app"></div>

	@vite(['resources/js/app.js', 'resources/js/admin/scss/vertical-layout-light/style.scss'])
</body>
</html>
