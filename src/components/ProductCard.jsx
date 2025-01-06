import { PropTypes } from "prop-types";
import { FaArrowRightLong, FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ProductCard = ({ equipment }) => {
  const { _id, itemName, category, price, rating, image } = equipment;

  return (
    <div className="text-gray-800 dark:text-gray-200 flex flex-col gap-2 bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-600">
      {/* Image */}
      <div className="flex justify-center items-center relative h-56 md:h-40">
        <img
          className="w-full h-full object-cover"
          src={image}
          alt={`image of ${itemName}`}
        />
        <div className="absolute z-30 bg-blue-500 text-white rounded-r-xl px-4 py-1 top-2 left-0">{category}</div>
      </div>

      {/* Details */}
      <div className="flex flex-col gap-2 text-xl p-4">
        <p className="text-2xl font-medium">
          {itemName}
        </p>
        <p className="flex justify-between  text-2xl text-gray-600 dark:text-gray-300">
          <span>${price}</span><span className="flex items-center">{rating}<FaStar className="text-yellow-400" /></span>
        </p>
        <Link
          to={`/viewDetails/${_id}`}
          className="text-xl font-medium text-blue-500 underline underline-offset-2 hover:underline-offset-4 duration-200 flex items-center gap-2 hover:gap-3"
        >
          View Details <FaArrowRightLong />
        </Link>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  equipment: PropTypes.object.isRequired,
};

export default ProductCard;
