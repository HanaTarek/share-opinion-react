import { Header } from './components/Header';
import { Opinions } from './components/Opinions';
import { NewOpinion } from './components/NewOpinion';
import { OpinionsContextProvider } from './store/opinions-context';
/*
async form actions , async form actions , sending HTTP requests , real-world React forms
MOST IMPORTANT CONCEPT
Async Actions

Until now your actions were synchronous.No waiting happened.
Now actions become ASYNC. Because backend communication takes time.
Why async?Because requests take time. await fetch(...) means: “Wait until server responds.”




*/
function App() {
  return (
    <>
      <Header />
      <main>
        <OpinionsContextProvider>
          <NewOpinion />
          <Opinions />
        </OpinionsContextProvider>
      </main>
    </>
  );
}

export default App;
