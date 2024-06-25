import { hydrateRoot } from "react-dom/client";
import App from "./App";
import React from "react";

const initialData = (window as any).__INITIAL_DATA__;
console.log('Initial data from window:', initialData);

if (!initialData) {
  console.error('Initial data is undefined');
}

hydrateRoot(document.getElementById('root') as HTMLElement, <App initialData={initialData} />);

console.log('Client-rendered HTML:', document.getElementById('root')?.innerHTML);
