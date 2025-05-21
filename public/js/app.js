const uploadBtn = document.getElementById("uploadBtn");
const uploadInput = document.getElementById("uploadInput");
const canvas = document.getElementById("canvas");
const resultText = document.getElementById("result");
const previewImage = document.getElementById("previewImage");

let model;

// Muat model TensorFlow (ubah path ke model_tfjs/model.json)
tf.loadLayersModel("model_tfjs/model.json").then(m => {
  model = m;
  console.log("Model loaded.");
}).catch(err => {
  console.error("Gagal memuat model:", err);
});

// Tombol upload memicu input file
uploadBtn.addEventListener("click", () => {
  uploadInput.click();
});

uploadInput.addEventListener("change", async (event) => {
  const file = event.target.files[0];
  if (!file || !model) {
    return alert("Pilih gambar dan pastikan model telah dimuat.");
  }

  const reader = new FileReader();

  reader.onload = function(e) {
    // Preview gambar
    previewImage.src = e.target.result;
    previewImage.style.display = "block";

    const img = new Image();
    img.onload = async function() {
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, 224, 224); // ukuran input model

      const imageData = ctx.getImageData(0, 0, 224, 224);
      const input = tf.browser
        .fromPixels(imageData)
        .toFloat()
        .div(255.0)
        .expandDims();

      const prediction = await model.predict(input).data();
      
      // Untuk model dengan banyak kelas (softmax)
      const maxIndex = prediction.indexOf(Math.max(...prediction));
      const confidence = prediction[maxIndex];

      // Ganti label sesuai jumlah kelas kamu
      const labels = ["Organik", "Anorganik"];
      const label = labels[maxIndex] || "Tidak diketahui";

      resultText.innerText = `Hasil: ${label} (${(confidence * 100).toFixed(1)}%)`;
      resultText.style.display = "block";
    };

    img.src = e.target.result;
  };

  reader.readAsDataURL(file);
});
