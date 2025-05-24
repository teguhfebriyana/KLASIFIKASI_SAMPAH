<!DOCTYPE html>
<html lang="en">
<head>
  <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
    <style>
        * {
            font-family: 'Poppins', sans-serif;
        }
    </style>

  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <link rel="icon" href="{{ asset('images/favicon.png') }}" type="image/png">
  <title>Klasifikasi Sampah | Kelompok 5</title>
  @vite('resources/css/app.css')
</head>
<body>
    <nav class="fixed top-0 left-0 right-0 z-50 bg-white shadow h-16">
      <a href="{{ url('/') }}" class="absolute left-10 top-1/2 -translate-y-1/2 text-4xl font-bold text-blue-600">
        Kelompok 5
      </a>
    </nav>


    @yield('content')



  

  <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@3.21.0"></script>

  <!-- Skrip utama -->
  <script src="{{ asset('js/script.js') }}"></script>
</body>
</html>
