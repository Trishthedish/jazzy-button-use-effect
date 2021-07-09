import './App.css';
import { useState } from 'react';
import JazzyButton from './JazzyButton' 

function App() {
  const [mode, setMode] = useState('light');
  const [food, setFood] = useState('pasta');

  const toggleMode = () => {
    console.log('you toggling??')
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
  }

  return (
    <section className={`top-section ${mode}`}>
      <div>
        <h1>useEffect and Calling APIs</h1>
      </div>
      {/* why haven't we passed in id?? */}
      <JazzyButton
         mode={mode}
         onClickCallBack={toggleMode}
      >
      </JazzyButton>
      <div>
        <h1>I like {food}</h1>
        <JazzyButton
          mode={mode}
          onClickCallBack={() => setFood('Pizza')}
        >

        </JazzyButton>

      </div>
    </section>
  );
}

export default App;
