<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="theme-color" content="#000000">

        <title>Laravel</title>

        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
        <link rel="shortcut icon" href="{{ asset('favicon/favicon.ico') }}"/>
        <link rel="shortcut icon" type="image/x-icon" href="{{ URL::to('favicon/favicon.ico') }}"/>
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet" type="text/css">

        <!-- React -->
        <link rel="stylesheet" href="{{asset('css/app.css')}}"/>
    </head>
    <body>
        <div id="main">
        </div>

        <script>
            let show = '{{ $show }}';
        </script>
        <script src="{{asset('js/app.js')}}"></script>
    </body>
</html>
