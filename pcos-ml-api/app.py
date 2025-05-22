# app.py
from flask import Flask, request, jsonify
import pickle
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load model
model = pickle.load(open('model/pcos_model.pkl', 'rb'))

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    try:
        input_features = [
            float(data['age']),
            float(data['bmi']),
            int(data['hairGrowth']),
            int(data['acne']),
            int(data['irregularPeriods']),
        ]
        prediction = model.predict([input_features])[0]
        probability = model.predict_proba([input_features])[0][1]
        return jsonify({
            'prediction': int(prediction),
            'probability': round(probability * 100, 2)
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True, port=5001)
