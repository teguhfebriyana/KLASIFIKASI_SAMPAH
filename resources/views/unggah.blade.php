@extends('layout.app')

@section('content')
<main class="min-h-screen flex items-center justify-center -mt-16">
  <div class="text-center max-w-lg w-full px-4">
    <h1 class="text-3xl font-bold mb-8">
      Unggah Gambar Sampah untuk diklasifikasi Jenisnya
    </h1>

    <label id="uploadBtn"
      class="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transition inline-block mb-6">
      Unggah gambar
    </label>
    <input type="file" id="uploadInput" accept="image/*" class="hidden" />

    <br />
    <img id="previewImage" src="" alt="Preview" width="224" height="224"
      class="mx-auto border border-gray-300" style="display: none;" />
    <canvas id="canvas" width="224" height="224" style="display: none;"></canvas>
    <p id="result" style="display: none;" class="mt-4 font-semibold text-lg">Hasil: -</p>
  </div>
</main>


@endsection
