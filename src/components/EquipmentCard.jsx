import { RiDeleteBin6Fill, RiEdit2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import Swal from "sweetalert2";
import { Tooltip as ReactTooltip } from "react-tooltip";
import viewAnimation from "../assets/viewAnimation.json";
import Lottie from "lottie-react";

const EquipmentCard = ({ myEquipment, myList, setMyList }) => {
  const { _id, itemName, category, price, rating, image, quantity } =
    myEquipment;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://smart-sport-server.vercel.app/allEquipments/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remainingEquipments = myList.filter(
                (equipment) => equipment._id !== id
              );
              setMyList(remainingEquipments);
              Swal.fire({
                title: "Deleted!",
                text: "This Equipment has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="text-gray-800 dark:text-gray-200 flex flex-col lg:flex-row items-center gap-8 bg-white dark:bg-gray-900 shadow-md border-2 border-gray-900 dark:border-gray-700 p-5 sm:p-8">
      {/* Image */}
      <div className="lg:h-[240px] flex flex-1 justify-center items-center">
        <img
          className="object-cover w-full h-full"
          src={image}
          alt={`image of ${itemName}`}
        />
      </div>

      {/* Details */}
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

      {/* Actions: View, Update, Delete */}
      <div className="flex flex-row lg:flex-col gap-3">
        <Link to={`/viewDetails/${_id}`} data-tooltip-id="viewDetails">
          <div className="w-[40px] h-[40px] bg-gray-200 dark:bg-gray-500">
            <Lottie
              animationData={viewAnimation}
              loop={true}
              style={{ width: 40, height: 40 }}
            />
          </div>
        </Link>
        <Link to={`/updateEquipment/${_id}`} data-tooltip-id="update">
          <button className="w-[40px] h-[40px] flex items-center justify-center text-xl bg-gray-950 text-white">
            <RiEdit2Fill />
          </button>
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          data-tooltip-id="delete"
          className="w-[40px] h-[40px] flex items-center justify-center text-xl bg-red-600 dark:bg-red-700 text-white dark:text-gray-200"
        >
          <RiDeleteBin6Fill />
        </button>
      </div>

      {/* Tooltips */}
      <ReactTooltip
        id="viewDetails"
        place="top"
        className="dark:bg-gray-700 dark:text-gray-200"
        content="View Details"
      />
      <ReactTooltip
        id="update"
        place="top"
        className="dark:bg-gray-700 dark:text-gray-200"
        content="Update"
      />
      <ReactTooltip
        id="delete"
        place="top"
        className="dark:bg-gray-700 dark:text-gray-200"
        content="Delete"
      />
    </div>
  );
};

EquipmentCard.propTypes = {
  myEquipment: PropTypes.object.isRequired,
  myList: PropTypes.array.isRequired,
  setMyList: PropTypes.func.isRequired,
};

export default EquipmentCard;