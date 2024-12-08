import BannerSlider from "../components/BannerSlider";
import Brands from "../components/Brands";
import Categories from "../components/Categories";
import Products from "../components/Products";

const Home = () => {
    return (
        <div>
            <BannerSlider />
            <Products />
            <Categories />
            <Brands />
        </div>
    );
};

export default Home;