import { FaPhoneAlt, FaShoppingCart } from "react-icons/fa";
import sportImage from "../../src/assets/SportImage.svg";
import { FaCreditCard, FaTruck } from "react-icons/fa6";
import sport1 from "../../src/assets/sport-1.svg";
import sport2 from "../../src/assets/sport-2.svg";
import sport3 from "../../src/assets/sport-3.svg";
import sport4 from "../../src/assets/sport-4.svg";

const AboutUs = () => {

    const features = [
        {
            icon: <FaShoppingCart className="text-blue-500 text-4xl" />,
            title: "Large selection of quality sports goods",
            description: "A wide array of sporting goods to choose from. Are you ready?",
        },
        {
            icon: <FaCreditCard className="text-blue-500 text-4xl" />,
            title: "Credit card payment in our application",
            description: "Swipe, tap, done: Seamlessly secure payments in just a click!",
        },
        {
            icon: <FaTruck className="text-blue-500 text-4xl" />,
            title: "Fast and affordable our delivery",
            description: "Swift service, wallet-friendly shipping: Your delivery solution!",
        },
        {
            icon: <FaPhoneAlt className="text-blue-500 text-4xl" />,
            title: "24/7 support from our partners",
            description: "Always here, always ready: round-the-clock partner support!",
        },
    ];

  return (
    <section>
      <div className="flex flex-col md:flex-row items-center gap-8 px-4 md:px-16 lg:px-24 py-10">
            {/* Left section */}
            <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-50">
                    Why SmartSport?
                </h1>
                <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg mt-4">
                    Offers top-quality products designed to enhance your athletic performance. 
                    We prioritize innovation and functionality in every item we offer. You receive reliable and durable gear.
                </p>
                {/* Images showcasing services */}
                <div className="flex items-center flex-wrap justify-center md:justify-start gap-3 mt-8">
                    <img 
                        src={sport1} 
                        alt="sport 1" 
                        className="max-w-32 w-full h-auto dark:bg-gray-700 rounded-md shadow-lg hover:scale-105 transition-transform duration-300"
                    />
                    <img 
                        src={sport2} 
                        alt="sport 2" 
                        className="max-w-32 w-full h-auto dark:bg-gray-700 rounded-md shadow-lg hover:scale-105 transition-transform duration-300"
                    />
                    <img 
                        src={sport3} 
                        alt="sport 3" 
                        className="max-w-32 w-full h-auto dark:bg-gray-700 rounded-md shadow-lg hover:scale-105 transition-transform duration-300"
                    />
                    <img 
                        src={sport4} 
                        alt="sport 4" 
                        className="max-w-32 w-full h-auto dark:bg-gray-700 rounded-md shadow-lg hover:scale-105 transition-transform duration-300"
                    />
                </div>
            </div>
            {/* Right section image */}
            <div className="flex-1">
                <img
                    className="w-full h-auto max-w-sm md:max-w-md lg:max-w-lg mx-auto"
                    src={sportImage}
                    alt="Sport image of a family"
                />
            </div>
        </div>

      {/* features section */}
      <div className="px-4 md:px-16 lg:px-24 py-10 bg-gray-100 dark:bg-gray-900">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="bg-white dark:bg-gray-800 p-6 shadow hover:shadow-lg transition duration-300"
                    >
                        <div className="flex items-center mb-4">
                            {feature.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-50">
                            {feature.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mt-2">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default AboutUs;
