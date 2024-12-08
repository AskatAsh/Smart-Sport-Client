import { FaArrowRightLong } from "react-icons/fa6";

const ExpertAdvice = () => {
  const tips = [
    {
      id: 1,
      title: "Choose the Perfect Cricket Bat",
      description:
        "Learn how to pick the right cricket bat based on your playing style and preferences.",
      image: "https://i.ibb.co.com/9wWgCyh/vintage-cricket-elements-collection-1284-37952.jpg",
      link: "#",
    },
    {
      id: 2,
      title: "Top Exercises to Boost Stamina",
      description:
        "Improve your endurance with these simple yet effective exercises tailored for athletes.",
      image: "https://i.ibb.co.com/hCPvRVm/infographic-design-with-man-running-23-2148503761.jpg",
      link: "#",
    },
    {
      id: 3,
      title: "Maintaining Your Sports Gear",
      description:
        "Extend the life of your sports equipment with these essential maintenance tips.",
      image: "https://i.ibb.co.com/jrGWwq9/top-view-composition-with-neatly-arranged-organized-sport-items-23-2150275274.jpg",
      link: "#",
    },
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white">
            Training Tips and Expert Advice
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Boost your skills and maintain your gear with our expert tips.
          </p>
        </div>

        {/* Tips Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip) => (
            <div
              key={tip.id}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <img
                className="w-full h-48 object-cover"
                src={tip.image}
                alt={tip.title}
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                  {tip.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  {tip.description}
                </p>
                <a
                  href={tip.link}
                  className="mt-4 gap-2 text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                >
                  Read More <FaArrowRightLong className="text-xs" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpertAdvice;