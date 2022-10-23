import { NavLink } from "react-router-dom";
// import style from "./Navigation.modale.css";

const Navigation = () => {
    return (
        <>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/movies">Movies</NavLink>
            
            </nav>
            </>
    )
}

export default Navigation;