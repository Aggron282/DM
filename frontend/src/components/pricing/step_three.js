// import React from "react";
import "./../../css/pricing/step_three.css"
import React, { useState } from "react";

function StepThreeUploader({ formData, setFormData, nextStep, prevStep,submitQuote }) {

  const handleUpload = (e) => {
    const files = Array.from(e.target.files);
    const validImages = files.filter(file => file.type.startsWith("image/"));

    if (validImages.length !== files.length) {
      alert("Only image files allowed!");
      return;
    }

    setFormData({ ...formData, images: [...formData.images, ...validImages] });

  };

  const [uploadedImages, setUploadedImages] = useState([]);

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const previews = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setUploadedImages([...uploadedImages, ...previews]);
  };

  const removeImage = (index) => {
    const updated = [...uploadedImages];
    updated.splice(index, 1);
    setUploadedImages(updated);
  };

  return (
    <div className="upload-step">

  <div className="upload-grid">
    {/* LEFT: Upload Area */}
    <div className="upload-left">
      <label className="upload-circle">
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileUpload}
          hidden
        />
        <div className="upload-icon">↑</div>
        <p>Upload Images</p>
      </label>
    </div>

    {/* RIGHT: Uploaded Images */}
    <div className="upload-right">
      {uploadedImages.length > 0 ? (
        <div className="image-grid">
          {uploadedImages.map((img, idx) => (
            <div key={idx} className="image-wrapper">
              <img src={img.preview} alt={`upload-${idx}`} />
              <button onClick={() => removeImage(idx)} className="remove-img">×</button>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-images">No Images</p>
      )}
    </div>
  </div>

  {/* Buttons */}
  <div className="form-nav">
  <button className="nav-btn "  onClick={prevStep}>Previous</button>
  <button className="nav-btn submit-btn" onClick = {submitQuote}>Submit</button>


  </div>
</div>

  );
}

export default StepThreeUploader;
