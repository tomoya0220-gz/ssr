import React from 'react';
import App from "./App";
import { hydrateRoot } from 'react-dom/client';

const initialData = (window as any).__INITIAL_DATA__;
console.log('Initial Data from Server:', initialData);

hydrateRoot(document.getElementById('root') as HTMLElement, <App initialData={initialData} />);
