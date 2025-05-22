import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DietTracker from '../components/DietTracker';

const TrackerPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <div className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Diet & Symptom Tracker
            </h1>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Monitor your nutritional intake and track symptoms to help manage your PCOS
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tracking for Better Health</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <p className="text-gray-600 mb-4">
                  Keeping track of what you eat and how you feel can provide valuable insights into how your 
                  diet affects your PCOS symptoms. Our comprehensive tracking tools help you:
                </p>
                <ul className="list-disc pl-5 text-gray-600 mb-4 space-y-2">
                  <li>
                    <span className="font-medium text-gray-900">Monitor nutritional intake:</span> Track calories, 
                    macronutrients, and important micronutrients relevant to PCOS management
                  </li>
                  <li>
                    <span className="font-medium text-gray-900">Identify trigger foods:</span> Recognize which 
                    foods may worsen your PCOS symptoms
                  </li>
                  <li>
                    <span className="font-medium text-gray-900">Track symptom changes:</span> Document changes in 
                    energy levels, skin health, menstrual regularity, and other PCOS symptoms
                  </li>
                  <li>
                    <span className="font-medium text-gray-900">Visualize progress:</span> See your improvements 
                    over time with easy-to-understand charts and graphs
                  </li>
                </ul>
                <p className="text-gray-600">
                  Use this information to make informed decisions about your diet and lifestyle, and share valuable 
                  insights with your healthcare provider.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-5 h-full">
                <h3 className="text-xl font-semibold text-purple-900 mb-3">Tracking Tips</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-purple-200 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-purple-700 text-xs">✓</span>
                    </div>
                    <p className="text-sm text-purple-800">
                      Log your food intake shortly after eating while memory is fresh
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-purple-200 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-purple-700 text-xs">✓</span>
                    </div>
                    <p className="text-sm text-purple-800">
                      Note any symptoms along with your meals to identify patterns
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-purple-200 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-purple-700 text-xs">✓</span>
                    </div>
                    <p className="text-sm text-purple-800">
                      Be consistent with tracking for at least 30 days to see meaningful patterns
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-purple-200 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-purple-700 text-xs">✓</span>
                    </div>
                    <p className="text-sm text-purple-800">
                      Share your tracking data with your healthcare provider during appointments
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Your Daily Tracker</h2>
              <div className="mt-2 inline-flex rounded-md shadow-sm">
                <a
                  href="#diet-tracker"
                  className="relative inline-flex items-center rounded-l-md bg-white px-3 py-2 text-sm font-medium text-purple-700 ring-1 ring-inset ring-purple-200 hover:bg-purple-50 focus:z-10"
                >
                  Diet Tracker
                </a>
                <a
                  href="#symptom-tracker"
                  className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-3 py-2 text-sm font-medium text-gray-600 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
                >
                  Symptom Tracker
                </a>
              </div>
            </div>
            <DietTracker />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TrackerPage;