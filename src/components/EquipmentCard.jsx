import { FaEye } from "react-icons/fa6";
import { RiDeleteBin6Fill, RiEdit2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import Swal from "sweetalert2";

const EquipmentCard = ({ myEquipment, myList, setMyList }) => {
  const { _id, itemName, category, price, rating, image, quantity } =
    myEquipment;

    const handleDelete = (id) => {
      // console.log(id);
      Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
      }).then((result) => {
          if (result.isConfirmed) {
              fetch(`https://smart-sport-server.vercel.app/allEquipments/${id}`,{
                  method: 'DELETE'
              })
                  .then(res => res.json())
                  .then(data => {
                      // console.log(data);
                      if (data.deletedCount > 0) {
                          const remainingEquipments = myList.filter(coffee => coffee._id !== id);
                          setMyList(remainingEquipments);
                          Swal.fire({
                              title: "Deleted!",
                              text: "This Equipment has been deleted.",
                              icon: "success"
                          });
                      }
                  })

          }
      });
  }

  return (
    <div className="text-gray-800 flex flex-col lg:flex-row items-center gap-8 bg-white shadow-md border-2 border-gray-900 p-5 sm:p-8">
      {/* image */}
      <div className="lg:h-[240px] flex flex-1 justify-center items-center">
        <img
          className="object-cover w-full h-full"
          src={image}
          alt={`image of ${itemName}`}
        />
      </div>
      {/* details */}
      <div className="flex flex-col gap-2 text-xl xl:mr-5 flex-1">
        <p>
          <span className="font-semibold">Name: </span> {itemName}
        </p>
        <p>
          <span className="font-semibold">Category: </span> {category}
        </p>
        <p>
          <span className="font-semibold">Quantity: </span> {quantity}
        </p>
        <p>
          <span className="font-semibold">Rating: </span> {rating}/5
        </p>
        <p>
          <span className="font-semibold">Price: </span> ${price}
        </p>
      </div>
      {/* view, update delete */}
      <div className="flex flex-row lg:flex-col gap-3">
        <Link
          to={`/viewDetails/${_id}`}
          className="tooltip tooltip-top lg:tooltip-right"
          data-tip="View Details"
        >
          <button className="bg-gray-200 text-gray-900 w-[40px] h-[40px] flex items-center justify-center text-xl">
            <FaEye />
          </button>
        </Link>
        <Link
          to={`/updateEquipment/${_id}`}
          className="tooltip tooltip-top lg:tooltip-right"
          data-tip="Update"
        >
          <button className="w-[40px] h-[40px] flex items-center justify-center text-xl bg-gray-900 text-white">
            <RiEdit2Fill />
          </button>
        </Link>
        <Link
          className="tooltip tooltip-top lg:tooltip-right"
          data-tip="Delete"
        >
          <button
            onClick={() => handleDelete(_id)}
            className="w-[40px] h-[40px] flex items-center justify-center text-xl bg-red-600 text-white"
          >
            <RiDeleteBin6Fill />
          </button>
        </Link>
      </div>
    </div>
  );
};

EquipmentCard.propTypes = {
  myEquipment: PropTypes.object,
  myList: PropTypes.array,
  setMyList: PropTypes.func
};

export default EquipmentCard;
