import React, { useState } from 'react';
import { Upload, CheckCircle, AlertCircle } from 'lucide-react';

const DetectionUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [result, setResult] = useState<{status: 'positive' | 'negative' | null, confidence: number | null}>(
    {status: null, confidence: null}
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);

    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setPreview(null);
    }
  };

  const handleUpload = () => {
    if (!file) return;

    setUploading(true);
    
    // Simulate API call for PCOS detection
    setTimeout(() => {
      // Mock result - in a real app, this would come from your backend
      const mockResult = {
        status: Math.random() > 0.5 ? 'positive' : 'negative' as 'positive' | 'negative',
        confidence: Math.round(Math.random() * 30 + 70)
      };
      
      setResult(mockResult);
      setUploading(false);
    }, 2000);
  };

  const resetForm = () => {
    setFile(null);
    setPreview(null);
    setResult({status: null, confidence: null});
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">PCOS Detection</h2>
      
      {result.status ? (
        <div className="mb-6">
          <div className={`p-4 rounded-lg ${
            result.status === 'positive' 
              ? 'bg-red-50 border border-red-100' 
              : 'bg-green-50 border border-green-100'
          }`}>
            <div className="flex items-center mb-3">
              {result.status === 'positive' ? (
                <AlertCircle className="h-6 w-6 text-red-500 mr-2" />
              ) : (
                <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
              )}
              <h3 className="text-lg font-semibold">
                {result.status === 'positive' 
                  ? 'PCOS Indicators Detected' 
                  : 'No PCOS Indicators Detected'}
              </h3>
            </div>
            <p className={`text-${result.status === 'positive' ? 'red' : 'green'}-700 mb-2`}>
              Confidence level: {result.confidence}%
            </p>
            <p className="text-gray-600">
              {result.status === 'positive' 
                ? 'Our analysis detected potential indicators of PCOS in your scan. Please consult with a healthcare provider for a proper diagnosis.' 
                : 'Based on our analysis, no indicators of PCOS were detected in your scan. However, this is not a medical diagnosis.'}
            </p>
            
            <div className="mt-4">
              <button
                onClick={resetForm}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
              >
                Upload Another Image
              </button>
              
              <button
                className={`ml-4 px-4 py-2 rounded-md text-white transition-colors ${
                  result.status === 'positive' 
                    ? 'bg-purple-600 hover:bg-purple-700' 
                    : 'bg-teal-600 hover:bg-teal-700'
                }`}
              >
                View Recommended Diet Plan
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="mb-6">
            <p className="text-gray-600 mb-4">
              Upload a scan report or ultrasound image for PCOS detection. Our AI will analyze the image
              and provide preliminary results.
            </p>
            <p className="text-sm text-gray-500 italic mb-4">
              Note: This tool is for informational purposes only and does not replace professional medical advice.
            </p>
          </div>

          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 mb-6">
            <div className="text-center">
              {preview ? (
                <div className="mb-4">
                  <img 
                    src={preview} 
                    alt="Preview" 
                    className="max-h-64 mx-auto rounded-lg" 
                  />
                </div>
              ) : (
                <div className="mb-4">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <p className="mt-2 text-gray-600">
                    Drag and drop a file here or click to select
                  </p>
                </div>
              )}
              
              <input
                type="file"
                id="file-upload"
                className="hidden"
                accept="image/*"
                onChange={handleFileChange}
              />
              
              {!preview && (
                <label
                  htmlFor="file-upload"
                  className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 cursor-pointer transition-colors inline-block"
                >
                  Select File
                </label>
              )}
              
              {preview && !uploading && !result.status && (
                <div className="flex justify-center space-x-4">
                  <label
                    htmlFor="file-upload"
                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 cursor-pointer transition-colors inline-block"
                  >
                    Change File
                  </label>
                  <button
                    onClick={handleUpload}
                    className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
                  >
                    Analyze Image
                  </button>
                </div>
              )}
              
              {uploading && (
                <div className="mt-4 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-purple-700"></div>
                  <span className="ml-2 text-gray-600">Analyzing...</span>
                </div>
              )}
            </div>
          </div>
          
          <div className="text-sm text-gray-500">
            <p>Supported file types: JPG, PNG, JPEG, DICOM</p>
            <p>Maximum file size: 10MB</p>
          </div>
        </>
      )}
    </div>
  );
};

export default DetectionUpload;