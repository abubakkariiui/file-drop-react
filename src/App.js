import React from 'react';
import './style.css';
import FileDrop from './FileDrop.jsx';

export default function App() {
  return (
    <>
      <FileDrop handleDrop={console.log} />
    </>
  );
}
