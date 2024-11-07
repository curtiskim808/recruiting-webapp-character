import { useState } from 'react';
import './App.css';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from './consts.js';
import AddNewCharacter from './components/AddNewCharacter';
import { useRecoilValue } from "recoil";
import { characterListState } from "./atoms/atoms";
import AttributesControl from './components/AttributesControl';
import ClassDisplay from './components/ClassDisplay';

function App() {
  const [num, setNum] = useState<number>(0);
  const characterList = useRecoilValue(characterListState);
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <section className="App-section">
        <div>
          Value:
          {num}
          <button>+</button>
          <button>-</button>
        </div>
        <div>Character Counts: {characterList.length}</div>

        <AddNewCharacter />
        <div>
          {characterList.map((character) => {
            return (
              <div key={character.id}>
                {character.id}
                <AttributesControl characterId={character.id} />
                <ClassDisplay characterId={character.id} />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default App;
