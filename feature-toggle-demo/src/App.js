import React from 'react';
import './App.css';
import FeatureToggle from './FeatureToggle';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FeatureToggle isEnabled={true} featureName="Feature One" />
        <FeatureToggle isEnabled={false} featureName="Feature Two" />
        <FeatureToggle isEnabled={true} featureName="Feature Three" />
        <FeatureToggle isEnabled={true} featureName="Feature Four" />
        <FeatureToggle isEnabled={false} featureName="Feature Five" />
        <FeatureToggle isEnabled={true} featureName="Feature Six" />
        <FeatureToggle isEnabled={false} featureName="Feature Seven" />
        <FeatureToggle isEnabled={true} featureName="Feature Eight" />
        <FeatureToggle isEnabled={false} featureName="Feature Nine" />
        <FeatureToggle isEnabled={true} featureName="Feature Ten" />
        <FeatureToggle isEnabled={true} featureName="Feature Eleven" />
      </header>
    </div>
  );
}

export default App;
