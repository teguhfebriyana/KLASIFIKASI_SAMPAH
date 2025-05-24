@extends('layout.app')

@section('content')

<main class="pt-20">
<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
  <div class="ml-32 mt-32">
    <div class="m-8">
      <h1 class="text-5xl font-bold">Deteksi Sampah Organik dan Anorganik</h1>
      <p class="mt-4">
        Unggah foto sampah Anda untuk membantu mengidentifikasi apakah sampah tersebut termasuk organik atau anorganik.
      </p>
    </div>

    <div class="m-8">
      <a href="{{ url('/unggah') }}"  id="uploadBtn" class="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transition">
      Unggah gambar
      </a >
    </div>
    
  </div>
  <div class="m-8">
    <img src="{{ asset('images/biru.jpg') }}" alt="Ilustrasi" width="500" height="500" />
</div>
</main>

@endsection
