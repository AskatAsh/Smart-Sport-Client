import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import EquipmentCard from "../components/EquipmentCard";
import { Link } from "react-router-dom";

const MyEquipmentList = () => {
  const [myList, setMyList] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch("https://smart-sport-server.vercel.app/allEquipments")
      .then((res) => res.json())
      .then((data) => {
        const myEquipments = data.filter(
          (equipment) => equipment?.userEmail == user?.email
        );
        setMyList(myEquipments);
      });
  }, [user]);
  return (
    <section className="max-w-7xl w-11/12 mx-auto my-16">
      <h1 className="my-8 font-semibold text-3xl text-center">
        My Equipment List
      </h1>
      {myList.length>0 ? (
        <>
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {myList.map((myEquipment) => (
              <EquipmentCard key={myEquipment._id} myEquipment={myEquipment} />
            ))}
          </section>
        </>
      ) : (
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-8">
            <h2 className="text-5xl text-gray-400 text-center font-bold">You did not add any equipment in the database?</h2>
            <Link to={'/addEquipment'} className="bg-gray-900 px-10 py-4 text-gray-50 ">Add Equipment</Link>
        </div>
      )}
    </section>
  );
};

export default MyEquipmentList;
