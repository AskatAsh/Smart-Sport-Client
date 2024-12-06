import { useContext } from "react";
import BannerSlider from "../components/BannerSlider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import { AuthContext } from "../provider/AuthProvider";

const Home = () => {
    const {name} = useContext(AuthContext);
    return (
        <div>
            <h1>{name} | Home page</h1>
            <BannerSlider />
            <Products />
            <Categories />
        </div>
    );
};

export default Home;