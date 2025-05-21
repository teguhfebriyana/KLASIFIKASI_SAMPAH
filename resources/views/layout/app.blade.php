<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <link rel="icon" href="{{ asset('images/favicon.png') }}" type="image/png">
  <title>Klasifikasi Sampah | Kelompok 5</title>
  @vite('resources/css/app.css')
</head>
<body>
    <nav class="bg-white shadow relative h-16">
    <a href="{{ url('/') }}" class="absolute left-10 top-1/2 -translate-y-1/2 text-4xl font-bold text-blue-600">
        Kelompok 5
    </a>
    </nav>

    @yield('content')



  

  <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@4.15.0/dist/tf.min.js"></script>
  <script src="{{ asset('js/script.js') }}"></script>

  {{-- <!-- Tambahkan library TensorFlow.js -->
  <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@4.10.0/dist/tf.min.js"></script>
  <!-- Skrip utama -->
  <script src="{{ asset('js/app.js') }}"></script> --}}
</body>
</html>
