import { NavLink, Outlet } from "react-router-dom";
import styles from "./../../Routing.module.css";

function MensPage() {
  return (
    <>
      <h3>Mens Wardrobe!!</h3>

      <nav style={{ background: "lightblue" }}>
        <ul style={{ listStyle: "none", display: "flex", gap: "10px" }}></ul>
        <li>
          <NavLink
            className={(navLinkProp) => {
              const { isActive } = navLinkProp;
              return isActive ? `${styles.activeLink}` : "";
            }}
            to={"/men/t-shirt"}
          >
            T-Shirts
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navLinkProp) => {
              const { isActive } = navLinkProp;
              return isActive ? `${styles.activeLink}` : "";
            }}
            to={"/men/ties"}
          >
            Ties
          </NavLink>
        </li>
      </nav>

      {/* IT WILL SHOW THE CHILD ROUTING COMPONENT ACCORDINGLY */}
      {/* https://reactrouter.com/en/main/components/outlet */}
      <Outlet></Outlet>
    </>
  );
}

export default MensPage;
