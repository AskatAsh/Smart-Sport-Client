import { useContext } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { AuthContext } from "../provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateEquipment = () => {
  const { user } = useContext(AuthContext);
  const equipment = useLoaderData();
  const {
    _id,
    itemName,
    category,
    price,
    rating,
    image,
    quantity,
    deliveryTime,
    customization,
    description,
  } = equipment;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const itemName = form.itemName.value;
    const quantity = Number(form.stock.value);
    const customization = form.customization.value;
    const deliveryTime = form.deliveryTime.value;
    const category = form.category.value;
    const description = form.description.value;
    const price = Number(form.price.value);
    const rating = Number(form.rating.value);
    const image = form.image.value;
    const userName = user?.displayName;
    const userEmail = user?.email;
    const updatedEquipment = {
      itemName,
      quantity,
      customization,
      deliveryTime,
      category,
      description,
      price,
      rating,
      userName,
      userEmail,
      image,
    };
    fetch(`https://smart-sport-server.vercel.app/allEquipments/${_id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedEquipment),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Equipment Updated Successfully!",
            icon: "success",
            confirmButtonText: "Ok, Cool!",
          });
        }
      });
  };
  return (
    <section className="my-16">
      <HelmetProvider>
        <Helmet>
          <title>SmartSport | Update Equipment</title>
        </Helmet>
      </HelmetProvider>
      <h1 className="my-8 font-semibold text-3xl text-center text-gray-900 dark:text-gray-100">
        Update Equipment
      </h1>
      <form
        onSubmit={handleUpdateCoffee}
        className="max-w-7xl w-11/12 mx-auto border-2 border-gray-900 dark:border-gray-600 bg-white dark:bg-gray-800 shadow-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7 p-6 sm:p-10">
          <div className="md:col-span-2 flex flex-col md:flex-row items-center justify-center gap-5 md:gap-7">
            {/* Item Name */}
            <div className="w-full">
              <label
                htmlFor="itemName"
                className="font-semibold text-gray-900 dark:text-gray-100"
              >
                Item Name
              </label>
              <br />
              <input
                className="border input-bordered p-2 w-full rounded-none focus:outline-none focus:border-gray-900 dark:focus:border-gray-100 dark:bg-gray-700 dark:text-gray-100"
                type="text"
                name="itemName"
                id="itemName"
                defaultValue={itemName}
                placeholder="Add Equipment Name"
              />
            </div>
            {/* Stock Quantity */}
            <div className="w-full">
              <label
                htmlFor="stock"
                className="font-semibold text-gray-900 dark:text-gray-100"
              >
                Stock Status (available quantity)
              </label>
              <br />
              <input
                className="border input-bordered p-2 w-full rounded-none focus:outline-none focus:border-gray-900 dark:focus:border-gray-100 dark:bg-gray-700 dark:text-gray-100"
                type="number"
                min={0}
                name="stock"
                id="stock"
                defaultValue={quantity}
                placeholder="Add product quantity"
              />
            </div>
          </div>
          <div className="md:col-span-2 flex flex-col md:flex-row items-center justify-center gap-5 md:gap-7">
            {/* Customization */}
            <div className="w-full">
              <label
                htmlFor="customization"
                className="font-semibold text-gray-900 dark:text-gray-100"
              >
                Customization
              </label>
              <br />
              <input
                className="border input-bordered p-2 w-full rounded-none focus:outline-none focus:border-gray-900 dark:focus:border-gray-100 dark:bg-gray-700 dark:text-gray-100"
                type="text"
                name="customization"
                id="customization"
                defaultValue={customization}
                placeholder="e.g. bat with extra grip, hit paper etc."
              />
            </div>
            {/* Delivery Time */}
            <div className="w-full">
              <label
                htmlFor="deliveryTime"
                className="font-semibold text-gray-900 dark:text-gray-100"
              >
                Processing Time (in days)
              </label>
              <br />
              <input
                className="border input-bordered p-2 w-full rounded-none focus:outline-none focus:border-gray-900 dark:focus:border-gray-100 dark:bg-gray-700 dark:text-gray-100"
                type="text"
                name="deliveryTime"
                id="deliveryTime"
                defaultValue={deliveryTime}
                placeholder="e.g. 3-5 business days"
              />
            </div>
          </div>
          <div className="md:col-span-2 flex flex-col md:flex-row items-center justify-center gap-5 md:gap-7">
            {/* Category Name */}
            <div className="w-full">
              <label
                htmlFor="category"
                className="font-semibold text-gray-900 dark:text-gray-100"
              >
                Category Name
              </label>
              <br />
              <input
                className="border input-bordered p-2 w-full rounded-none focus:outline-none focus:border-gray-900 dark:focus:border-gray-100 dark:bg-gray-700 dark:text-gray-100"
                type="text"
                name="category"
                id="category"
                defaultValue={category}
                placeholder="Add category Name"
              />
            </div>
            {/* Image Link */}
            <div className="w-full">
              <label
                htmlFor="image"
                className="font-semibold text-gray-900 dark:text-gray-100"
              >
                Image (link)
              </label>
              <br />
              <input
                className="border input-bordered p-2 w-full rounded-none focus:outline-none focus:border-gray-900 dark:focus:border-gray-100 dark:bg-gray-700 dark:text-gray-100"
                type="text"
                name="image"
                id="image"
                defaultValue={image}
                placeholder="Add Image Link"
              />
            </div>
          </div>
          <div className="md:col-span-2 flex flex-col md:flex-row items-center justify-center gap-5 md:gap-7">
            {/* Price */}
            <div className="w-full">
              <label
                htmlFor="price"
                className="font-semibold text-gray-900 dark:text-gray-100"
              >
                Price ($usd)
              </label>
              <br />
              <input
                className="border input-bordered p-2 w-full rounded-none focus:outline-none focus:border-gray-900 dark:focus:border-gray-100 dark:bg-gray-700 dark:text-gray-100"
                type="number"
                min={0}
                step={0.01}
                name="price"
                id="price"
                defaultValue={price}
                placeholder="Add Price"
              />
            </div>
            {/* Rating */}
            <div className="w-full">
              <label
                htmlFor="rating"
                className="font-semibold text-gray-900 dark:text-gray-100"
              >
                Rating (1 to 5)
              </label>
              <br />
              <input
                className="border input-bordered p-2 w-full rounded-none focus:outline-none focus:border-gray-900 dark:focus:border-gray-100 dark:bg-gray-700 dark:text-gray-100"
                type="number"
                min={1}
                max={5}
                step={0.1}
                name="rating"
                id="rating"
                defaultValue={rating}
                placeholder="Add Rating"
              />
            </div>
          </div>
          <div className="md:col-span-2 flex flex-col md:flex-row items-center justify-center">
            {/* Description */}
            <div className="w-full">
              <label
                htmlFor="description"
                className="font-semibold text-gray-900 dark:text-gray-100"
              >
                Description
              </label>
              <br />
              <textarea
                rows={4}
                className="textarea textarea-bordered p-2 w-full rounded-none focus:outline-none focus:border-gray-900 dark:focus:border-gray-100 dark:bg-gray-700 dark:text-gray-100"
                name="description"
                id="description"
                defaultValue={description}
                placeholder="Add Description"
              />
            </div>
          </div>
          <button
            type="submit"
            className="md:col-span-2 btn bg-gray-900 hover:shadow-xl rounded-none text-white border-none dark:bg-gray-200 dark:text-gray-900 hover:dark:bg-gray-300"
          >
            Update Equipment
          </button>
        </div>
      </form>
    </section>
  );
};

export default UpdateEquipment;
