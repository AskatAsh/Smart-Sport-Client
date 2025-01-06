import { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FaArrowDown91 } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const AllEquipment = () => {
  const equipmentList = useLoaderData();
  const [sortedList, setSortedList] = useState(equipmentList);

  const handleSortByPrice = () => {
    const sorted = [...sortedList].sort((a, b) => b.price - a.price);
    setSortedList(sorted);
  };

  return (
    <section className="max-w-7xl w-11/12 mx-auto my-10">
      <HelmetProvider>
        <Helmet>
          <title>SmartSport | All Equipment</title>
        </Helmet>
      </HelmetProvider>
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h1 className="text-3xl font-semibold text-left text-gray-800 dark:text-gray-100">
          All Sports Equipment
        </h1>
        <button
          className="btn btn-md bg-gray-900 dark:bg-gray-700 text-white dark:text-gray-200 rounded-none flex items-center gap-2 hover:bg-gray-700 dark:hover:bg-gray-600"
          onClick={handleSortByPrice}
        >
          Sort by Price <FaArrowDown91 className="text-lg" />
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 mt-10">
        {/* <table className="table w-full">
          <thead>
            <tr className="bg-gray-900 dark:bg-gray-700 text-white dark:text-gray-200">
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {sortedList.map((equipment, index) => (
              <tr
                key={equipment._id}
                className="hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                <td className="text-gray-800 dark:text-gray-200">{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="w-16 rounded">
                      <img src={equipment?.image} alt={equipment.itemName} />
                    </div>
                  </div>
                </td>
                <td className="text-gray-800 dark:text-gray-200">
                  {equipment?.itemName}
                </td>
                <td className="text-gray-800 dark:text-gray-200">
                  {equipment?.category}
                </td>
                <td className="text-gray-800 dark:text-gray-200">
                  ${equipment?.price}
                </td>
                <td>
                  <button
                    className="btn btn-sm border-2 border-gray-900 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-none hover:scale-105 hover:bg-gray-200 dark:hover:bg-gray-600"
                    onClick={() => handleViewDetails(equipment._id)}
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table> */}
        {
          sortedList.map((equipment) => <ProductCard key={equipment?._id} equipment={equipment} />)
        }
      </div>
    </section>
  );
};

export default AllEquipment;
// onClick={() => handleViewDetails(equipment._id)}