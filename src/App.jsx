import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { MainBody, AppMain } from "./App.style";
import FeedComponent from "./Components/Feed";
import HeaderComponent from "./Components/Header";
import SiderbarComponent from "./Components/Sidebar";
import WidgetsComponent from "./Components/Widgets";
import { logout, selectUser, login } from "./features/userSlice";
import { auth } from "./firebase";
import LoginPage from "./Pages/Login";
import RegisterPage from "./Pages/Register";
import { Route, Routes } from "react-router-dom";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => { 
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    })
  }, []);

  return (
    <>
      {!user ? (
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      ) : (
        <AppMain>
          <HeaderComponent />
          <MainBody>
            <SiderbarComponent />
            <FeedComponent />
            <WidgetsComponent />
          </MainBody>
        </AppMain>
      )}
    </>
  );
}

export default App;
