import React from "react";
import FoodItem from "../foodItem/FoodItem";

interface Dish {
    id: number;
    name: string;
    price: number;
    status: string;
}

const foodItems: Dish[] = [
    { id: 1, name: "Burger", price: 199, status: "available" },
    { id: 2, name: "Pizza", price: 699, status: "available" },
    { id: 3, name: "Pide", price: 499, status: "available" },
    { id: 4, name: "Donner", price: 399, status: "available" },
    { id: 5, name: "Rice", price: 299, status: "available" },
    { id: 6, name: "Pastery", price: 50, status: "available" },
]

const Dashboard: React.FC<any> = (props) => {
    return (
        <React.Fragment>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
            }}>
                {foodItems.map((item) => {
                    return <FoodItem item={item}/>
                })}
            </div>
        </React.Fragment>
    );
};

export default Dashboard;