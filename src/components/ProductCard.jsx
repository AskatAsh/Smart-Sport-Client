import { PropTypes } from "prop-types";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
const ProductCard = ({ equipment }) => {
  const { _id, itemName, category, price, rating, image, quantity } = equipment;
  return (
    <div className="text-gray-800 flex flex-col lg:flex-row items-center gap-8 bg-white shadow-md border-2 border-gray-900 p-5 sm:p-8">
      {/* Image */}
      <div className="lg:h-[240px] flex flex-1 justify-center items-center">
        <img
          className="object-cover w-full h-full"
          src={image}
          alt={`image of ${itemName}`}
        />
      </div>

      {/* Details */}
      <div className="flex flex-col gap-2 text-xl flex-1">
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
        <Link to={`/viewDetails/${_id}`} className="text-xl font-semibold text-gray-900 underline underline-offset-2 hover:underline-offset-4 duration-200 flex items-center gap-2 hover:gap-3">View Details <FaArrowRightLong /></Link>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  equipment: PropTypes.object.isRequired,
};

export default ProductCard;
