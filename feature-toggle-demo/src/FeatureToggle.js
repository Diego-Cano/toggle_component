import React from 'react';
/**
 * The FeatureToggle component controls the display of features based on props.
 * @param {boolean} isEnabled Determines if the feature is enabled or not.
 * @param {string} featureName The name of the feature to display.
 * @returns A JSX element indicating whether the feature is enabled or disabled.
 */

const FeatureToggle = ({ isEnabled, featureName }) => {
  // Conditional rendering based on isEnabled prop
  // If true, displays the featureName, otherwise shows a disabled message.
  return (
    <div className="feature-toggle">
      {isEnabled ? (
        <span className="feature-enabled">{featureName}</span>
      ) : (
        <span className="feature-disabled">{featureName} is disabled</span>
      )}
    </div>
  );
};

export default FeatureToggle;
