const uploadBtn = document.getElementById("uploadBtn");
const uploadInput = document.getElementById("uploadInput");
const canvas = document.getElementById("canvas");
const resultText = document.getElementById("result");
const previewImage = document.getElementById("previewImage");
const loader = document.getElementById("loader");

let model;

// Muat model TensorFlow
tf.loadGraphModel("model/model.json").then(m => {
  model = m;
  console.log("Model loaded.");
});

// Klik tombol unggah
uploadBtn.addEventListener("click", () => {
  uploadInput.click();
});

// Saat gambar dipilih
uploadInput.addEventListener("change", async (event) => {
  const file = event.target.files[0];
  if (!file || !model) {
    return alert("Pilih gambar dan pastikan model telah dimuat.");
  }

  // Reset UI
  resultText.style.display = "none";
  previewImage.style.display = "none";
  loader.style.display = "block";
  uploadBtn.style.display = "none"; // Sembunyikan tombol saat loading

  const reader = new FileReader();

  reader.onload = function(e) {
    const img = new Image();
    img.onload = async function() {
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, 224, 224);
      ctx.drawImage(img, 0, 0, 224, 224);

      const imageData = ctx.getImageData(0, 0, 224, 224);
      const input = tf.browser
        .fromPixels(imageData)
        .toFloat()
        .div(255)
        .expandDims();

      try {
        const prediction = await model.predict(input).data();
        const confidence = prediction[0];

        let label, percent;
        if (confidence > 0.5) {
          label = "Anorganik";
          percent = confidence * 100;
        } else {
          label = "Organik";
          percent = (1 - confidence) * 100;
        }

        await new Promise(resolve => setTimeout(resolve, 2000)); // Delay 2 detik

        resultText.innerText = `Hasil: ${label} (${percent.toFixed(1)}%)`;
        resultText.style.display = "block";
        previewImage.src = e.target.result;
        previewImage.style.display = "block";

      } catch (err) {
        resultText.innerText = "Terjadi kesalahan saat prediksi.";
        resultText.style.display = "block";
        console.error(err);
      }

      loader.style.display = "none";
      uploadBtn.style.display = "inline-block"; // Tampilkan kembali tombol
    };

    img.src = e.target.result;
  };

  reader.readAsDataURL(file);
});
