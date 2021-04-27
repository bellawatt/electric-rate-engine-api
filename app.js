const express = require('express');
const { RateCalculator, LoadProfile } = require('@bellawatt/electric-rate-engine');
const port = process.env.PORT || 3004;

const app = express();

app.use(express.json({
  limit: '1mb',
}));

app.get('/health', (req, res) => {
  res.send('I\'m up!');
});

app.post('/calculate/annual_costs', (req, res) => {
  const {year, rates, loadProfile: rawLoadProfile} = req.body;

  const loadProfile = new LoadProfile(rawLoadProfile, {year});
  
  const annualCosts = rates.map(rate => {
    const calculator = new RateCalculator({...rate, loadProfile});

    return {
      id: rate.id,
      name: rate.name,
      annualCost: calculator.annualCost(),
    }
  });

  res.send(JSON.stringify({annualCosts}));
});

app.listen(port, () => {
  console.log(`Electric Rate Engine API listening on port ${port}`);
});
