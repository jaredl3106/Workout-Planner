// src/App.js
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4">
        <h2 className="text-2xl font-bold mb-4">Recent Workouts</h2>
        <ul>
          {/* This will be where the list of workouts go */}
        </ul>
        <button className="mt-4 p-2 bg-blue-500 text-white rounded">Add Workout</button>
      </main>
      <Footer />
    </div>
  );
};

export default App;

