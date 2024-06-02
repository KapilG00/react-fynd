import { NavLink, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MentorPage from "./pages/MentorPage";
import NotFoundPage from "./pages/NotFoundPage";
import styles from "./Routing.module.css";
import MensPage from "./pages/Mens/MensPage";
import TShirtComponent from "./components/MensComponents/TShirtComponent";
import TiesComponent from "./components/MensComponents/TiesComponent";
import PrivateRoute from "./PrivateRoutes/PrivateRoute";
import React, { Suspense } from "react";

const HomePageLazy = React.lazy(() => import("./pages/HomePage"));

// TREAT THIS COMPONENT AS App.js ONLY.
function RoutingApp() {
  return (
    <>
      {/* Nav bar */}

      <nav style={{ background: "lightblue" }}>
        <ul style={{ listStyle: "none" }}>
          <li>
            <NavLink
              className={(navLinkProp) => {
                const { isActive } = navLinkProp;
                return isActive ? `${styles.activeLink}` : "";
              }}
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navLinkProp) => {
                const { isActive } = navLinkProp;
                return isActive ? `${styles.activeLink}` : "";
              }}
              to={"/mentor"}
            >
              Mentors
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navLinkProp) => {
                const { isActive } = navLinkProp;
                return isActive ? `${styles.activeLink}` : "";
              }}
              to={"/men"}
              end
            >
              Mens
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Register routes */}
      <Suspense fallback={<h1>Loading....</h1>}>
        <Routes>
          {/* Basic Routing */}

          {/* <Route path="/" element={<div>HOME PAGE!!</div>}></Route> */}
          <Route path="/" element={<HomePageLazy />}></Route>

          <Route
            path="/mentor"
            element={
              <PrivateRoute>
                <MentorPage />
              </PrivateRoute>
            }
          ></Route>

          <Route path="/*" element={<NotFoundPage />}></Route>

          {/* Complex Routing */}

          <Route path="/men" element={<MensPage />}>
            <Route path="t-shirt" element={<TShirtComponent />}></Route>
            <Route path="ties" element={<TiesComponent />}></Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default RoutingApp;

/*
    1. To show activated tab;
        className={(navLinkProp) => {
                    const { isActive } = navLinkProp;
                    return isActive ? `${styles.activeLink}` : "";
                }}
*/
