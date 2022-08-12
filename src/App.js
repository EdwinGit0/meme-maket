import { useState } from "react";
import "./App.css";
import html2canvas from "html2canvas";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");

  const exportImage = () => {
    html2canvas(document.querySelector("#meme")).then((canvas) => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement("a");
      link.download = "meme.png";
      link.href = img;
      link.click();
    });
  };

  const previewImage = () => {
    var reader = new FileReader();
    reader.readAsDataURL(document.getElementById("uploadImage").files[0]);
    reader.onload = function (e) {
      document.getElementById("uploadPreview").src = e.target.result;
    };
  };

  return (
    <>
      <nav class="navbar">
        <h1>Memes Maker</h1>
        <button className="btn btn-outline-success">Try it free</button>
      </nav>
      <div className="container">
        <section className="section-information">
          <input
            className="form-control"
            id="uploadImage"
            type="file"
            onChange={previewImage}
          />
          <br />
          <textarea
            className="form-control"
            type="text"
            placeholder="texto superior"
            onChange={(e) => setLine1(e.target.value)}
          />
          <br />
          <textarea
            className="form-control"
            type="text"
            placeholder="texto inferior"
            onChange={(e) => setLine2(e.target.value)}
          />
          <br />
          <button className="btn btn-success col-12" onClick={exportImage}>
            Export
          </button>
        </section>
        <br />
        <section className="section-meme" id="meme">
          <span>{line1}</span>
          <span>{line2}</span>
          <img id="uploadPreview" src={`/img/no-image-available.jpg`} alt="" />
        </section>
      </div>
    </>
  );
}

export default App;
