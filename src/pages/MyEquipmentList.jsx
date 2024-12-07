import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import EquipmentCard from "../components/EquipmentCard";

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
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {myList.map((myEquipment) => (
          <EquipmentCard key={myEquipment._id} myEquipment={myEquipment} />
        ))}
      </section>
    </section>
  );
};

export default MyEquipmentList;
