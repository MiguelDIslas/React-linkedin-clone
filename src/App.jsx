import React from "react";
import { useSelector } from "react-redux";
import { MainBody, AppMain } from "./App.style";
import FeedComponent from "./Components/Feed";
import HeaderComponent from "./Components/Header";
import SiderbarComponent from "./Components/Sidebar";
import { selectUser } from "./features/userSlice";
import LoginPage from "./Pages/Login";

function App() {

  const user = useSelector(selectUser);

  return (
    <AppMain>
      <HeaderComponent />
      {!user ? (
        <LoginPage />
      ) : (
        <MainBody>
          <SiderbarComponent />
          <FeedComponent />
        </MainBody>
      )}
    </AppMain>
  );
}

export default App;
