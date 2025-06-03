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
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Virtual Try-On
        </h2>
        
        <div className="bg-white shadow sm:rounded-lg p-6">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Upload Your Photo
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <div className="flex text-sm text-gray-600">
                    <label className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500">
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
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Preview</h4>
                <img
                  src={selectedImage}
                  alt="Preview"
                  className="max-w-full h-auto rounded-lg"
                />
              </div>
            )}

            <button
              onClick={handleTryOn}
              disabled={!selectedImage || processing}
              className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                !selectedImage || processing
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-indigo-600 hover:bg-indigo-700'
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