import { useState, useEffect } from "react";
import { db } from "./fire";
import { collection, addDoc, doc } from "firebase/firestore";
import { setDoc } from "firebase/firestore/lite";
import Items from "./Items";

const Additems = ({ callFetchItem }) => {
  const [product, setProduct] = useState("");

  const addItem = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "list"), {
      Name: product,
    });
    setProduct("");
    callFetchItem();
  };

  return (
    <>
      <div className="item-container">
        <h2 className="item-container-heading">Add Items</h2>
        <label>Name</label>
        <input
          placeholder="Write Item Name"
          className="input-style"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
        ></input>

        <div className="Add-item-btn-box">
          <button onClick={addItem} className="all-btn-style add-item-btn">
            Add items
          </button>
        </div>
      </div>
    </>
  );
};
export default Additems;
