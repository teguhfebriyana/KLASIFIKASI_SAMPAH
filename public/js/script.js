const uploadBtn = document.getElementById("uploadBtn");
const uploadInput = document.getElementById("uploadInput");
const canvas = document.getElementById("canvas");
const resultText = document.getElementById("result");
const previewImage = document.getElementById("previewImage");

let model;

// Muat model TensorFlow
tf.loadGraphModel("model/model.json").then(m => {
  model = m;
  console.log("Model loaded.");
});

// Buka dialog file saat tombol upload diklik
uploadBtn.addEventListener("click", () => {
  uploadInput.click();
});

// Saat file dipilih
uploadInput.addEventListener("change", async (event) => {
  const file = event.target.files[0];
  if (!file || !model) {
    return alert("Pilih gambar dan pastikan model telah dimuat.");
  }

  const reader = new FileReader();

  reader.onload = function(e) {
    // Tampilkan preview gambar
    previewImage.src = e.target.result;
    previewImage.style.display = "block";

    const img = new Image();
    img.onload = async function() {
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, 128, 128);

      // Ambil data gambar dari canvas
      const imageData = ctx.getImageData(0, 0, 128, 128);
      const input = tf.browser
        .fromPixels(imageData)
        .toFloat()
        .div(255)
        .expandDims();

      // Prediksi menggunakan model
      const prediction = await model.predict(input).data();
      const confidence = prediction[0]; // Diasumsikan output 1 dimensi (Organik)

      let label, percent;
      if (confidence > 0.5) {
        label = "Organik";
        percent = confidence * 100;
      } else {
        label = "Anorganik";
        percent = (1 - confidence) * 100;
      }

      resultText.innerText = `Hasil: ${label} (${percent.toFixed(1)}%)`;
      resultText.style.display = "block";
    };

    img.src = e.target.result;
  };

  reader.readAsDataURL(file);
});
