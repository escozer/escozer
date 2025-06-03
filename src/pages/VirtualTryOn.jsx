import React, { useState } from 'react';

export default function VirtualTryOn() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [processing, setProcessing] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleTryOn = () => {
    setProcessing(true);
    // AI processing integration will be implemented here
    setTimeout(() => {
      setProcessing(false);
    }, 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 text-center mb-8">
          AI Virtual Try-On
        </h2>
        
        <div className="bg-white shadow-2xl rounded-2xl p-8">
          <div className="space-y-8">
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-4">
                Upload Your Photo
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-purple-300 rounded-xl hover:border-purple-400 transition-colors duration-200">
                <div className="space-y-1 text-center">
                  <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label className="relative cursor-pointer bg-white rounded-md font-medium text-purple-600 hover:text-purple-500">
                      <span>Upload Photo</span>
                      <input
                        type="file"
                        className="sr-only"
                        accept="image/*"
                        onChange={handleImageUpload}
                      />
                    </label>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>

            {selectedImage && (
              <div className="mt-8">
                <h4 className="text-lg font-medium text-gray-700 mb-4">Preview</h4>
                <img
                  src={selectedImage}
                  alt="Preview"
                  className="max-w-full h-auto rounded-xl shadow-lg"
                />
              </div>
            )}

            <button
              onClick={handleTryOn}
              disabled={!selectedImage || processing}
              className={`w-full flex justify-center py-3 px-4 rounded-xl shadow-lg text-base font-medium text-white transition-all duration-200 ${
                !selectedImage || processing
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transform hover:scale-105'
              }`}
            >
              {processing ? 'Processing...' : 'Try On Clothes'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}