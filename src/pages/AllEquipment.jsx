import { useLoaderData, useNavigate } from "react-router-dom";

const AllEquipment = () => {
  const equipmentList = useLoaderData();
  console.log(equipmentList)
  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    navigate(`/equipment/${id}`);
  };

  return (
    <section className="max-w-7xl w-11/12 mx-auto my-10">
      <h1 className="text-2xl font-bold text-center mb-4">
        All Sports Equipment
      </h1>
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
            {equipmentList.map((equipment, index) => (
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
