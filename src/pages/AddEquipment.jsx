import { useContext } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const AddEquipment = () => {
  const { user, toastMessage } = useContext(AuthContext);

  const handleAddCoffee = (e) => {
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
    const newEquipment = {
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
    fetch("https://smart-sport-server.vercel.app/allEquipments", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newEquipment),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId && data.acknowledged) {
          Swal.fire({
            title: "Success!",
            text: "Added New Equipment successfully!",
            icon: "success",
            confirmButtonText: "Ok, Continue!",
          });
          form.reset();
        }
      })
      .catch((error) => {
        toastMessage(error.message, "error");
        console.log(error);
      });
    console.log(newEquipment);
  };
  return (
    <section className="my-16">
      <HelmetProvider>
        <Helmet>
          <title>SmartSport | Add Equipment</title>
        </Helmet>
      </HelmetProvider>
      <h1 className="my-8 font-semibold text-3xl text-center text-gray-800 dark:text-gray-200">
        Add Equipment
      </h1>
      <form
        onSubmit={handleAddCoffee}
        className="max-w-7xl w-11/12 mx-auto border-2 border-gray-900 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7 p-6 sm:p-10">
          <div className="md:col-span-2 flex flex-col md:flex-row items-center justify-center gap-5 md:gap-7">
            {/* Item Name */}
            <div className="w-full">
              <label
                htmlFor="itemName"
                className="font-semibold text-gray-800 dark:text-gray-200"
              >
                Item Name*
              </label>
              <br />
              <input
                className="border input-bordered p-2 w-full rounded-none focus:outline-none focus:border focus:border-gray-900 dark:border-gray-700 dark:focus:border-gray-500 dark:bg-gray-700 dark:text-gray-200"
                type="text"
                name="itemName"
                id="itemName"
                placeholder="Add Equipment Name"
                required
              />
            </div>
            {/* Stock Quantity */}
            <div className="w-full">
              <label
                htmlFor="stock"
                className="font-semibold text-gray-800 dark:text-gray-200"
              >
                Stock Status (available quantity)*
              </label>
              <br />
              <input
                className="border input-bordered p-2 w-full rounded-none focus:outline-none focus:border focus:border-gray-900 dark:border-gray-700 dark:focus:border-gray-500 dark:bg-gray-700 dark:text-gray-200"
                type="number"
                min={0}
                name="stock"
                id="stock"
                placeholder="Add product quantity"
                required
              />
            </div>
          </div>
          <div className="md:col-span-2 flex flex-col md:flex-row items-center justify-center gap-5 md:gap-7">
            {/* Customization */}
            <div className="w-full">
              <label
                htmlFor="customization"
                className="font-semibold text-gray-800 dark:text-gray-200"
              >
                Customization*
              </label>
              <br />
              <input
                className="border input-bordered p-2 w-full rounded-none focus:outline-none focus:border focus:border-gray-900 dark:border-gray-700 dark:focus:border-gray-500 dark:bg-gray-700 dark:text-gray-200"
                type="text"
                name="customization"
                id="customization"
                placeholder="e.g. bat with extra grip, hit paper etc."
                required
              />
            </div>
            {/* Delivery Time */}
            <div className="w-full">
              <label
                htmlFor="deliveryTime"
                className="font-semibold text-gray-800 dark:text-gray-200"
              >
                Processing Time (in days)*
              </label>
              <br />
              <input
                className="border input-bordered p-2 w-full rounded-none focus:outline-none focus:border focus:border-gray-900 dark:border-gray-700 dark:focus:border-gray-500 dark:bg-gray-700 dark:text-gray-200"
                type="text"
                name="deliveryTime"
                id="deliveryTime"
                placeholder="e.g. 3-5 business days"
                required
              />
            </div>
          </div>
          <div className="md:col-span-2 flex flex-col md:flex-row items-center justify-center gap-5 md:gap-7">
            {/* Category Name */}
            <div className="w-full">
              <label
                htmlFor="category"
                className="font-semibold text-gray-800 dark:text-gray-200"
              >
                Category Name*
              </label>
              <br />
              <input
                className="border input-bordered p-2 w-full rounded-none focus:outline-none focus:border focus:border-gray-900 dark:border-gray-700 dark:focus:border-gray-500 dark:bg-gray-700 dark:text-gray-200"
                type="text"
                name="category"
                id="category"
                placeholder="Add category Name"
                required
              />
            </div>
            {/* Image Link */}
            <div className="w-full">
              <label
                htmlFor="image"
                className="font-semibold text-gray-800 dark:text-gray-200"
              >
                Image (link)*
              </label>
              <br />
              <input
                className="border input-bordered p-2 w-full rounded-none focus:outline-none focus:border focus:border-gray-900 dark:border-gray-700 dark:focus:border-gray-500 dark:bg-gray-700 dark:text-gray-200"
                type="text"
                name="image"
                id="image"
                placeholder="Add Image Link"
                required
              />
            </div>
          </div>
          <div className="md:col-span-2 flex flex-col md:flex-row items-center justify-center gap-5 md:gap-7">
            {/* Price */}
            <div className="w-full">
              <label
                htmlFor="price"
                className="font-semibold text-gray-800 dark:text-gray-200"
              >
                Price ($usd)*
              </label>
              <br />
              <input
                className="border input-bordered p-2 w-full rounded-none focus:outline-none focus:border focus:border-gray-900 dark:border-gray-700 dark:focus:border-gray-500 dark:bg-gray-700 dark:text-gray-200"
                type="number"
                min={0}
                step={0.01}
                name="price"
                id="price"
                placeholder="Add Price"
                required
              />
            </div>
            {/* Rating */}
            <div className="w-full">
              <label
                htmlFor="rating"
                className="font-semibold text-gray-800 dark:text-gray-200"
              >
                Rating (1 to 5)*
              </label>
              <br />
              <input
                className="border input-bordered p-2 w-full rounded-none focus:outline-none focus:border focus:border-gray-900 dark:border-gray-700 dark:focus:border-gray-500 dark:bg-gray-700 dark:text-gray-200"
                type="number"
                min={1}
                max={5}
                step={0.1}
                name="rating"
                id="rating"
                placeholder="Add Rating"
                required
              />
            </div>
          </div>
          <div className="md:col-span-2 flex flex-col md:flex-row items-center justify-center gap-5 md:gap-7">
            {/* User Name */}
            <div className="w-full">
              <label
                htmlFor="userName"
                className="font-semibold text-gray-800 dark:text-gray-200"
              >
                User Name (read only)
              </label>
              <br />
              <input
                className="border input-bordered p-2 w-full rounded-none focus:outline-none focus:border focus:border-gray-900 dark:border-gray-700 dark:focus:border-gray-500 dark:bg-gray-700 dark:text-gray-200"
                type="text"
                name="userName"
                id="userName"
                disabled
                placeholder={user?.displayName}
              />
            </div>
            {/* User Email */}
            <div className="w-full">
              <label
                htmlFor="userEmail"
                className="font-semibold text-gray-800 dark:text-gray-200"
              >
                User Email (read only)
              </label>
              <br />
              <input
                className="border input-bordered p-2 w-full rounded-none focus:outline-none focus:border focus:border-gray-900 dark:border-gray-700 dark:focus:border-gray-500 dark:bg-gray-700 dark:text-gray-200"
                type="email"
                name="userEmail"
                id="userEmail"
                disabled
                placeholder={user?.email}
              />
            </div>
          </div>
          <div className="md:col-span-2 flex flex-col md:flex-row items-center justify-center">
            {/* Description */}
            <div className="w-full">
              <label
                htmlFor="description"
                className="font-semibold text-gray-800 dark:text-gray-200"
              >
                Description*
              </label>
              <br />
              <textarea
                rows={4}
                className="textarea textarea-bordered p-2 w-full rounded-none focus:outline-none focus:border focus:border-gray-900 dark:border-gray-700 dark:focus:border-gray-500 dark:bg-gray-700 dark:text-gray-200"
                name="description"
                id="description"
                placeholder="Add Description"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="md:col-span-2 btn bg-gray-900 hover:shadow-xl rounded-none text-white dark:bg-gray-900 dark:hover:bg-gray-950 border-none"
          >
            Add Equipment
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddEquipment;
