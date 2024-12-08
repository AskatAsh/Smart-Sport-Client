import { Helmet, HelmetProvider } from "react-helmet-async";
import BannerSlider from "../components/BannerSlider";
import Brands from "../components/Brands";
import Categories from "../components/Categories";
import ExpertAdvice from "../components/ExpertAdvice";
import Products from "../components/Products";

const Home = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <HelmetProvider>
        <Helmet>
          <title>SmartSport | Home</title>
        </Helmet>
      </HelmetProvider>
      <BannerSlider />
      <Products />
      <Categories />
      <Brands />
      <ExpertAdvice />
    </div>
  );
};

export default Home;
