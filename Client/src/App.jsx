import { React, useEffect } from "react";
import { useAuthStore } from "./store/useAuthstore";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"; // Correct import
import Signup from "./pages/signup.jsx";
import Hero from "./components/hero/hero.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import RecentResults from "./components/recent/recentresults.jsx";
import Score from "./components/score/score.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./App.css";

const App = () => {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();

  // Check authentication status when the app loads
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  // While checking authentication, show a loading spinner
  if (isCheckingAuth) {
    return <div className="loader"></div>;
  }

  return (
    <Router>
      {" "}
      {/* Wrap your routes in BrowserRouter */}
      <div>
        <Navbar />
        <Routes>
          {" "}
          {/* Correct usage of Routes container */}
          <Route
            path="/signin"
            element={!authUser ? <Signup /> : <Navigate to="/" />}
          />
          <Route
            path="/"
            element={
              authUser ? (
                <div>
                  <Hero />
                  <RecentResults />
                  <Score />
                  <Footer />
                </div>
              ) : (
                <Navigate to="/signin" />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
