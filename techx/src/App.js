import './App.css';
import Users from './components/Users';
import UsersContextProvider from './contexts/UsersContextProvider';
function App() {
  return (
    <div className="App">
     <UsersContextProvider>
        <Users />
     </UsersContextProvider>
    </div>
  );
}

export default App;
