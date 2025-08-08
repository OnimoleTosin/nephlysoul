// const name = "Zainab";
// const age = 18;
// if (age >= 18){
//     console.log(name + " is an adult.")
// }else{
//     console.log(name + " is not an adult.")
// }

import { format } from "node:path/posix";

// function checkEligibility(name, age){
//     if (age >= 18){
//         console.log(name + " is allowed in.")
//     }else{
//         console.log(name + " is not allowed in.")
//     }
// }

// checkEligibility("Tosin", 25);
// checkEligibility("Zainab", 17); 

//  const checkcart=(item)=>{
// if (item === 0){
//     console.log("empty")
// }else if (item <=3){
//     console.log("Few Items")
// } else {
//     console.log("many item")
// }
//  }

//  checkcart (0);
//   checkcart (2);
//    checkcart (5)

// const cart=(my_cart)=>{
//     const mylist= my_cart.length
//     if (mylist===0){
//         console.log("empty")
//     }else if (mylist<=3){
//         console.log("few items")
//     }else{
//         console.log("many item")
//     }
// }
// const my_cart=["shoes","clothes", "books"];
// cart(my_cart)


// const my_cart = ["Shoes", "Shirt", "Book"];

// if (my_cart.length === 0) {
//     console.log("Your cart is empty.");
// } else {
//     console.log("Your Cart:");
//         console.log("You have " + my_cart.length);
// }


// const my_cart = [
//     { name: "Shoes", price: 50 },
//     { name: "Shirt", price: 30 },
//     { name: "Book", price: 20 }
// ];
// const totalPrice = my_cart.reduce((acc, item) => acc + item.price, 0);

// if (my_cart.length == 0) {
//     console.log("Your cart is empty")
// } else {
//     for(let i = 0; i <my_cart.length; i ++) {
//     console.log("You Added " + my_cart[i].name + " and it cost $ " + my_cart[i].price);
//     }
// } console.log("Total items: $" + totalPrice);



// const cart = [
//   { name: "Shoes", price: 50 },
//   { name: "Shirt", price: 30 },
//   { name: "Book", price: 20 }
// ];

// export default function Cart() {
//     return(
//         <div>
//             <hi>My cart</hi>
//             {cart.map((item, index)=>{
//                 <div key={index}>
//                     <p>{item.name} - ${item.price}</p>
//                 </div>
//             })}
//         </div>
//     )
// }


// import React from "react";
// import  {useState } from "react";
// const Cart = () => {
//   const [cart, setCart] = useState([
//     { name: "Shoes", price: 50 },
//     { name: "Shirt", price: 30 },
//     { name: "Book", price: 20 }
//   ]);

//   const handledelete = (itemName) => {
//     const updatedCart = cart.filter(
//       (item) => item.name.toLowerCase() !== itemName.toLowerCase()
//     );
//     setCart(updatedCart);
//   };

//   return (
//     <div className="p-4 max-w-md mx-auto">
//       <h2 className="text-xl font-bold mb-4">🛒 Shopping Cart</h2>

//       {cart.length === 0 ? (
//         <p className="text-gray-500">Your cart is empty.</p>
//       ) : (
//         cart.map((item, index) => (
//           <div
//             key={index}
//             className="flex justify-between items-center mb-2 border-b pb-2"
//           >
//             <p className="font-medium">{item.name}</p>
//             <span className="text-green-600 font-semibold">${item.price}</span>
//             <button
//               onClick={handledelete}
//               className="ml-4 text-red-500 hover:underline"
//             >
//               🗑 Remove
//             </button>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default Cart;


import React, { useState } from "react";

const ProfileCard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [bio, setBio] = useState("I love building things with React!");

  const [newBio, setNewBio] = useState(bio);

  const handleSave = () => {
    setBio(newBio);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setNewBio(bio);
    setIsEditing(false);
  };

  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-xl p-6 mt-10 text-center">
      <h2 className="text-xl font-bold mb-2">👤 John Doe</h2>

      {/* Conditionally render either bio text or input */}
      {isEditing ? (
        <textarea
          value={newBio}
          onChange={(e) => setNewBio(e.target.value)}
          className="w-full p-2 border rounded-md text-sm"
        />
      ) : (
        <p className="text-gray-700 mb-4">{bio}</p>
      )}

      {/* Conditionally render buttons */}
      {isEditing ? (
        <div className="space-x-2">
          <button
            onClick={handleSave}
            className="px-4 py-1 bg-green-500 text-white rounded-md"
          >
            Save
          </button>
          <button
            onClick={handleCancel}
            className="px-4 py-1 bg-gray-300 text-black rounded-md"
          >
            Cancel
          </button>
        </div>
      ) : (
        <button
          onClick={() => setIsEditing(true)}
          className="px-4 py-1 bg-blue-500 text-white rounded-md"
        >
          ✏️ Edit Bio
        </button>
      )}
    </div>
  );
};

export default ProfileCard;
