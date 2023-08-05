import React from 'react';
import PersonCard from './PersonCard';

export function App1() {
  return (
    <div className="App">
      <PersonCard firstName="Firstborn" lastName="Miyazato" age={29} hairColor="Maroon" />
      <PersonCard firstName="Kitsune" lastName="Niku" age={16} hairColor="Chocolate" />
      <PersonCard firstName="Kuroneko" lastName="Yamano" age={104} hairColor="Navajoewhite" />
      <PersonCard firstName="Alice" lastName="Liddel" age={7.5} hairColor="Goldenrod" />
    </div>
  );
}