import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const MyEquipmentList = () => {
    const [myList, setMyList] = useState([]);
    const {user} = useContext(AuthContext);
    useEffect(() => {
        fetch('https://smart-sport-server.vercel.app/allEquipments')
        .then(res => res.json())
        .then(data => {
            const myEquipmentList = data.filter(equipment => equipment?.userEmail == user?.email);
            setMyList(myEquipmentList);
        })
    }, [user])
    return (
        <section className="max-w-7xl w-11/12 mx-auto">
            <h1>My Equipment List: {myList.length}</h1>

            
        </section>
    );
};

export default MyEquipmentList;