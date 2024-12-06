import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
  const equipment = useLoaderData();

  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          {/* equipment Image Section */}
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
              <img
                className="w-full h-full object-cover"
                src={equipment?.image}
                alt={equipment?.itemName}
              />
            </div>
            <div className="flex -mx-2 mb-4">
              <div className="w-1/2 px-2">
                <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                  Add to Cart
                </button>
              </div>
              <div className="w-1/2 px-2">
                <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>

          {/* equipment Details Section */}
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {equipment?.itemName}
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              {equipment?.description}
            </p>
            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold text-gray-700">
                  Price:
                </span>
                <span className="text-gray-600">${equipment?.price}</span>
              </div>
              <div>
                <span className="font-bold text-gray-700">
                  Availability:
                </span>
                <span className="text-gray-600">
                  {equipment?.availability}
                </span>
              </div>
            </div>
            <div className="mb-4">
              <span className="font-bold text-gray-700">
                Select Color:
              </span>
              
            </div>
            <div className="mb-4">
              <span className="font-bold text-gray-700">
                Select Size:
              </span>
            </div>
            <div>
              <span className="font-bold text-gray-700">
                equipment Description:
              </span>
              <p className="text-gray-600 text-sm mt-2">
                {equipment?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewDetails;
