import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const equipment = useLoaderData();

  return (
    <section className="py-16">
      <div className="max-w-6xl w-11/12 mx-auto p-4 sm:p-6 lg:p-8 border-2 border-gray-900 bg-white shadow-lg">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Product Image Section */}
          <div className="md:flex-1 p-4 border h-[460px]">
            <div className="h-full bg-gray-300">
              <img
                className="w-full h-full object-cover"
                src={equipment.image}
                alt={equipment.itemName}
              />
            </div>
          </div>

          {/* Product Details Section */}
          <div className="md:flex-1 md:px-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              {equipment.itemName}
            </h2>
            <p className="text-gray-600 text-sm mb-4 max-h-[160px] overflow-y-auto">
              {equipment.description}
            </p>
            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-semibold text-gray-700">
                  Price:{" "}
                </span>
                <span className="text-gray-600">
                  ${equipment.price.toFixed(2)}
                </span>
              </div>
              <div>
                <span className="font-semibold text-gray-700">
                  Rating:{" "}
                </span>
                <span className="text-gray-600">
                  {equipment.rating} / 5
                </span>
              </div>
            </div>
            <div className="mb-4">
              <span className="font-semibold text-gray-700">
                Category:
              </span>
              <span className="text-gray-600 ml-2">
                {equipment.category}
              </span>
            </div>
            <div className="mb-4">
              <span className="font-semibold text-gray-700">
                Customization:
              </span>
              <span className="text-gray-600 ml-2">
                {equipment.customization}
              </span>
            </div>
            <div className="mb-4">
              <span className="font-semibold text-gray-700">
                Delivery Time:
              </span>
              <span className="text-gray-600 ml-2">
                {equipment.deliveryTime}
              </span>
            </div>
            <div className="mb-4">
              <span className="font-semibold text-gray-700">
                Stock Status:
              </span>
              <span className="text-gray-600 ml-2">
                {equipment.quantity} available
              </span>
            </div>
            <div className="flex -mx-2">
              <div className="w-1/2 px-2">
                <button className="w-full border-2 border-gray-900 bg-gray-900 text-white py-2 px-4 font-semibold hover:bg-gray-800 dark:hover:bg-gray-700">
                  Add to Cart
                </button>
              </div>
              <div className="w-1/2 px-2">
                <button className="w-full border-2 border-gray-900 hover:bg-gray-200 box-border text-gray-800 py-2 px-4 font-semibold">
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewDetails;
