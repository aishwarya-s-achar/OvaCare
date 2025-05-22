const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/Users');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/crowd-delivery");

// LOGIN
app.post('/', (req, res) => {
    const { email, password } = req.body;

    User.findOne({ email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("success");
                } else {
                    res.json("password not correct");
                }
            } else {
                res.json("no record");
            }
        })
        .catch(err => res.json(err));
});

// REGISTER
app.post('/register', (req, res) => {
    User.create(req.body)
        .then(register => res.json(register))
        .catch(err => res.json(err));
});

// PREDICT (PCOS Risk)
app.post('/predict', async (req, res) => {
    try {
      const response = await axios.post('http://localhost:5001/predict', req.body);
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Prediction failed' });
    }
  });
  
app.listen(5000, () => console.log('Server running on port 5000'));
