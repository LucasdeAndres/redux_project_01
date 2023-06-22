import { Provider } from "react-redux";
import { Navbar } from "./components/navbar/Navbar";
import { UserList } from "./components/userList/UserList";
import store from  "./store"

function App() {
  return (
      <Provider store={store}>
        <Navbar />
        <UserList />
      </Provider>  
  );
}

export default App;
