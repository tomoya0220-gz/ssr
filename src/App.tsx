import React, { useEffect, useState } from "react";
import ErrorBoundary from "./ErrorBoundary";
interface AppProps {
  initialData?: {
    message: string
  };
}

const App: React.FC<AppProps> = ({ initialData }) => {
  console.log('App component received initial data:', initialData);

  const message = initialData?.message || 'No message provided';

  return (
    <ErrorBoundary>
      <div>
        <h1 style={{ color: 'blue' }}>{message}</h1>
      </div>
    </ErrorBoundary>
  );
};

export default App;
