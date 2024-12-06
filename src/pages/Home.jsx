import BannerSlider from "../components/BannerSlider";
import Categories from "../components/Categories";
import Products from "../components/Products";

const Home = () => {
    return (
        <div>
            <h1>Home page</h1>
            <BannerSlider />
            <Products />
            <Categories />
        </div>
    );
};

export default Home;