import React from 'react';
import './App.css';
import AdGenerator from './components/AdGenerator';
import CustomerInsights from './components/CustomerInsights';
import SalesTrendChart from './components/SalesTrendChart';
import MarketingRecommendations from './components/MarketingRecommendations';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <div className="App">
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
              <div className="container">
                  <a className="navbar-brand" href="#">Smart Localized Marketing Assistant</a>
              </div>
          </nav>
          <main className="container mt-4">
              <AdGenerator />
              <SalesTrendChart />
              <CustomerInsights />
              <MarketingRecommendations />
          </main>
      </div>
  );
}

export default App;
