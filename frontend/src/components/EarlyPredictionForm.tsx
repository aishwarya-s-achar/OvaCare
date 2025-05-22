import React, { useState } from 'react';
import axios from 'axios';

const EarlyPredictionForm: React.FC = () => {
  const [formData, setFormData] = useState({
    age: '',
    bmi: '',
    hairGrowth: '',
    acne: '',
    irregularPeriods: '',
  });

  const [prediction, setPrediction] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setPrediction(null);
    try {
      const response = await axios.post('http://localhost:5000/predict', formData);
      setPrediction(`Chance of PCOS: ${response.data.probability}%`);
    } catch (error) {
      console.error(error);
      setPrediction('Error in prediction. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Age */}
      <div>
        <label htmlFor="age" className="block text-sm font-medium text-gray-700">
          Age
        </label>
        <input
          type="number"
          name="age"
          id="age"
          value={formData.age}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
          required
        />
      </div>

      {/* BMI */}
      <div>
        <label htmlFor="bmi" className="block text-sm font-medium text-gray-700">
          BMI (Body Mass Index)
        </label>
        <input
          type="number"
          name="bmi"
          id="bmi"
          value={formData.bmi}
          onChange={handleChange}
          step="0.1"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
          required
        />
      </div>

      {/* Hair Growth */}
      <div>
        <label htmlFor="hairGrowth" className="block text-sm font-medium text-gray-700">
          Excessive Hair Growth
        </label>
        <select
          name="hairGrowth"
          id="hairGrowth"
          value={formData.hairGrowth}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
          required
        >
          <option value="">Select</option>
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>
      </div>

      {/* Acne */}
      <div>
        <label htmlFor="acne" className="block text-sm font-medium text-gray-700">
          Acne
        </label>
        <select
          name="acne"
          id="acne"
          value={formData.acne}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
          required
        >
          <option value="">Select</option>
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>
      </div>

      {/* Irregular Periods */}
      <div>
        <label htmlFor="irregularPeriods" className="block text-sm font-medium text-gray-700">
          Irregular Periods
        </label>
        <select
          name="irregularPeriods"
          id="irregularPeriods"
          value={formData.irregularPeriods}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
          required
        >
          <option value="">Select</option>
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          disabled={loading}
        >
          {loading ? 'Predicting...' : 'Get Prediction'}
        </button>
      </div>

      {/* Result */}
      {prediction && (
        <div className="p-4 mt-4 text-sm font-medium rounded-md text-purple-800 bg-purple-50 border border-purple-300">
          {prediction}
        </div>
      )}
    </form>
  );
};

export default EarlyPredictionForm;
