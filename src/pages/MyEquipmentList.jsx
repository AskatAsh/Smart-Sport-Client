import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import EquipmentCard from "../components/EquipmentCard";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import { Helmet, HelmetProvider } from "react-helmet-async";

const MyEquipmentList = () => {
  const [myList, setMyList] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const { user } = useContext(AuthContext);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://smart-sport-server.vercel.app/allEquipments")
      .then((res) => res.json())
      .then((data) => {
        const myEquipments = data.filter(
          (equipment) => equipment?.userEmail === user?.email
        );
        setMyList(myEquipments);
      })
      // .catch((error) => console.error("Error fetching data:", error))
      .finally(() => setIsLoading(false));
  }, [user?.email]);

  return (
    <section className="max-w-7xl w-11/12 mx-auto my-16">
      <HelmetProvider>
        <Helmet>
          <title>SmartSport | My Products</title>
        </Helmet>
      </HelmetProvider>
      <h1 className="my-8 font-semibold text-3xl text-center">
        My Equipment List
      </h1>
      {isLoading ? (
        <Loading />
      ) : myList.length > 0 ? (
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {myList.map((myEquipment) => (
            <EquipmentCard
              key={myEquipment._id}
              myEquipment={myEquipment}
              myList={myList}
              setMyList={setMyList}
            />
          ))}
        </section>
      ) : (
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-8">
          <h2 className="text-5xl text-gray-400 text-center font-bold">
            You did not add any equipment to the database?
          </h2>
          <Link
            to={"/addEquipment"}
            className="bg-gray-900 px-10 py-4 text-gray-50"
          >
            Add Equipment
          </Link>
        </div>
      )}
    </section>
  );
};

export default MyEquipmentList;
