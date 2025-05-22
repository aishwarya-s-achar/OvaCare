# train_model.py

import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
import pickle
import os

# Load the dataset
df = pd.read_csv('dataset/PCOS_data.csv')

# Clean column names
df.columns = df.columns.str.strip().str.lower()

# Drop irrelevant or unnamed columns
df = df.dropna()
df = df.drop(columns=['patient file no.', 'sl. no', 'unnamed: 44'], errors='ignore')

# Select features based on cleaned column names
X = df[['age (yrs)', 'bmi', 'hair growth(y/n)', 'pimples(y/n)', 'cycle(r/i)']]
y = df['pcos (y/n)']

# Split the data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train the model
model = RandomForestClassifier()
model.fit(X_train, y_train)

# Ensure 'model' folder exists
os.makedirs('model', exist_ok=True)

# Save the model
with open('model/pcos_model.pkl', 'wb') as f:
    pickle.dump(model, f)

print("✅ Model trained and saved to model/pcos_model.pkl.")
