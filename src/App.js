
import './App.css';
import Video from "./pages/Video"

function App() {
  return (
    <div className="App">
      <div className='app__videos'>
        <Video 
        
        likes={111}
        messages={222}
        shares={333}
        name="Renan"
        description="Gato fofinho"
        music="musica "
        url="https://privaty.com.br/wp-content/uploads/2023/03/gato-1.mp4"
        />
        <Video 
        
        likes={444}
        messages={522}
        shares={333}
        name="Rafael"
        description="Gato brabo"
        music="Your hands"
        url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4"
        
      />

      </div>
 
    </div>
  );
}

export default App;
