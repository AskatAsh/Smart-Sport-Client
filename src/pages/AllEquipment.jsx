import { useState } from "react";
import { FaArrowDown91 } from "react-icons/fa6";
import { useLoaderData, useNavigate } from "react-router-dom";

const AllEquipment = () => {
  const equipmentList = useLoaderData();
  const navigate = useNavigate();
  const [sortedList, setSortedList] = useState(equipmentList);

  const handleViewDetails = (id) => {
    navigate(`/viewDetails/${id}`);
  };

  const handleSortByPrice = () => {
    const sorted = [...sortedList].sort((a, b) => b.price - a.price);
    setSortedList(sorted);
  };

  return (
    <section className="max-w-7xl w-11/12 mx-auto my-10">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold text-left">
          All Sports Equipment
        </h1>
        <button
          className="btn btn-md bg-gray-900 text-white rounded-none flex items-center gap-2"
          onClick={handleSortByPrice}
        >
          Sort by Price <FaArrowDown91 className="text-lg" />
        </button>
      </div>
      <div className="overflow-x-auto border-2 shadow-lg bg-white border-gray-900 my-8">
        <table className="table w-full">
          <thead>
            <tr className="bg-gray-900 text-white">
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
              <tr key={equipment._id} className="hover:bg-gray-200">
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="w-16 rounded">
                      <img src={equipment?.image} alt={equipment.itemName} />
                    </div>
                  </div>
                </td>
                <td>{equipment?.itemName}</td>
                <td>{equipment?.category}</td>
                <td>${equipment?.price}</td>
                <td>
                  <button
                    className="btn btn-sm border-2 border-gray-900 rounded-none hover:scale-105"
                    onClick={() => handleViewDetails(equipment._id)}
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AllEquipment;
