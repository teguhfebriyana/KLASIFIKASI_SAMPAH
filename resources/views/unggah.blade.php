@extends('layout.app')

@section('content')
<main class="min-h-screen flex items-center justify-center -mt-16 pt-20">
  <div class="text-center max-w-lg w-full px-4">
    <h1 class="text-3xl font-bold mb-8">
      Unggah Gambar Sampah untuk Mendeteksi Jenisnya
    </h1>

    <div id="loader" style="display: none;" class="flex flex-col items-center justify-center gap-2 my-6">
      <img src="/images/loading-gif.gif" alt="Loading..." class="w-10 h-10 mx-auto" />
      <p class="text-lg text-gray-700 font-medium">Memproses...</p>
    </div>





    <img id="previewImage" src="" alt="Preview" width="300" height="300"
      class="mx-auto border border-gray-300 rounded-lg shadow-md max-h-80 object-contain" style="display: none;" />
    <canvas id="canvas" width="300" height="300" style="display: none;"></canvas>
    <p id="result" style="display: none;" class="mt-4 font-semibold text-lg">Hasil: -</p>
    <label id="uploadBtn"
      class="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transition inline-block mb-6">
      Unggah gambar
    </label>
    <input type="file" id="uploadInput" accept="image/*" class="hidden" />

  </div>
</main>


@endsection
