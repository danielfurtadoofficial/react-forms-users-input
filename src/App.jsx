import Header from './components/Header.jsx';
import Login from './components/Login.jsx';
import LoginWithCustomHook from './components/LoginWithCustomHook.jsx';
import Signup from './components/Signup.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <LoginWithCustomHook />
      </main>
    </>
  );
}

export default App;
