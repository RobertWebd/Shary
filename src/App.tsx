import { Route, Routes } from 'react-router-dom';
import { FriendsPage, MessagesPage, ProfilePage, NewsPage, SignInPage, SignUpPage, DeepMessagePage } from './pages';
import { Layout } from './components';
import { useLocalStorage } from './hooks';
import { useEffect } from 'react';

function App() {
  const { setUsers } = useLocalStorage();

  useEffect(() => {
    setUsers();
  }, [setUsers]);

  return (
    <Routes>
      <Route path="/shary" element={<SignInPage />}></Route>
      <Route path="/shary/registration" element={<SignUpPage />}></Route>
      <Route path="/shary/main" element={<Layout />}>
        <Route path="/shary/main" element={<NewsPage />}></Route>
        <Route path="/shary/main/profile/:id" element={<ProfilePage />}></Route>
        <Route path="/shary/main/messages" element={<MessagesPage />}></Route>
        <Route path="/shary/main/messages/:id" element={<DeepMessagePage />}></Route>
        <Route path="/shary/main/friends" element={<FriendsPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
