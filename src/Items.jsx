import { useEffect, useState } from "react";
import { db } from "./fire";
import Additems from "./Additems";

const Items = () => {
  //Select All Item CeckBox
  const [checkBoxValue, setCheckBoxValue] = useState(false);
  console.log("this is the All checkBox", checkBoxValue);
  //table checkbox
  const [checkBox, setCheckBox] = useState(false);
  console.log("this is the checkox of single item", typeof checkBox);

  // const [checkeValue, setCheckedValue] = useState(0);
  // console.log("item checkox", checkBox);

  const [Lists, setLists] = useState([]);

  const [checked, setChecked] = useState({});
  const fetchLists = async () => {
    const response = db.collection("list");
    // console.log("--------------------------", await response.get());

    let list = [];
    const data = await response.get();
    data.forEach((item) => {
      list.push(item);
      // console.log("data", data.docs);
      // data.docs.forEach((item) => {
      // console.log("items", item.id);
      // list.push(item.data());
    });

    setLists(list);
    // console.log(list.id);
    // console.log(list[0].data());
    // console.log(Lists.data());
  };
  useEffect(() => {
    fetchLists();
  }, []);
  const deleteFun = (e) => {
    // console.log("e", e);
    var index = e.nativeEvent.target.selectedIndex;
    var text = e.nativeEvent.target[index].text;
    console.log(text);
    // console.log("id is ", e.target.value);
    var id = e.target.value;
    console.log("idddd", id);
    // let dd = doc.id;
    if (text === "Delete") {
      db.collection("list").doc(id).delete();
    }
    fetchLists();
    // let deleteDoc = await db.collection("list").doc(id).get();
    // await deleteDoc.remove();
    // db.collection("list").doc(dd).collection(id).delete();
  };
  const allSelectCheckBox = () => {
    // console.log("eeeeeeeeeeeeeee", checkBoxValue);
    setCheckBoxValue(!checkBoxValue);
    if (checkBoxValue === true) {
      setCheckBox(false);
    } else {
      setCheckBox(true);
    }
    console.log("This is all select checkBox Function");
    // setCheckBox(checkBoxValue);

    // console.log("now we check condition", setCheckBox(true));
  };
  const deleteAllData = async () => {
    if (checkBoxValue === true) {
      let allSelectedData = [];
      Lists.forEach((item) => {
        allSelectedData.push(item.id);
      });
      // console.log("these are checkbox values", allSelectedData);
      if (allSelectedData.length > 0) {
        for (let x = 0; x < allSelectedData.length; x++) {
          await db.collection("list").doc(allSelectedData[x]).delete();
        }
      }
    } else {
      alert("No Data selected ");
    }
    fetchLists();
  };

  // const handleSinglChecked = (e, checkId) => {
  //   console.log("Lists", Lists);
  //   console.log("ist", Lists);
  //   if (e === checkId) {
  //     // debugger;
  //     setCheckBox(true);
  //   } else {
  //     // debugger;
  //     setCheckBox(false);
  //   }
  // };
  const deleteSelectedData = async () => {
    console.log("theeeeeee", checked);
    for (const [key, value] of Object.entries(checked)) {
      console.log(`${key}: ${value}`);
      if (value === true) {
        await db.collection("list").doc(key).delete();
      }
    }
    fetchLists();
  };

  console.log(checked);
  const sigleCheckBox = (id) => {
    console.log("---------------------->", id);
    let tempChecked = { ...checked };
    if (tempChecked[id] && tempChecked[id] === true) {
      tempChecked[id] = false;
    } else {
      tempChecked[id] = true;
    }

    // tempChecked[id] = !tempChecked[id];
    setChecked(tempChecked);
    // for (const [key, value] of Object.entries(tempChecked)) {
    //   console.log(`${key}: ${value}`);
    //   if (key === id) {
    //     setCheckBox(true);
    //     console.log("sadsadasdasdasdasdasd");
    //   }
    // }
  };

  // }, []);

  return (
    <>
      <div className="item-container">
        <h2 className="item-container-heading">Items List</h2>
        <input
          type="checkbox"
          checked={checkBoxValue}
          onChange={allSelectCheckBox}
        ></input>
        <label>Select All</label>
        <table style={{ width: "100%", marginTop: "20px" }}>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
          {Lists &&
            Lists?.map((list) => {
              return (
                <tr key={list.id}>
                  {/* <td> */}
                  <input
                    type="checkbox"
                    id={list.id}
                    // checked[list.id]
                    // undefined
                    // true
                    // false
                    /* {checkBoxValue == true ? "true" : "false"} */
                    checked={
                      checkBoxValue ? true : checked[list.id] ? true : false
                    }
                    // value={list.id}
                    // checked={false}
                    // onChange={(e) =>
                    //   handleSinglChecked(e.target.value, list.id)
                    // }
                    // defaultChecked={checked[list.id]}
                    onChange={() => sigleCheckBox(list.id)}
                  ></input>
                  {console.log(
                    "checkbox",
                    checked,
                    " checked[list.id] ",
                    checked[list.id]
                  )}
                  <label>{list.data().ID}</label>

                  <td className="table-name-field">{list.data().Name}</td>
                  <td className="dropDown-field">
                    <select name="" id="" onChange={deleteFun}>
                      <option value="">Select</option>
                      {/* <option value={list.id} label="update">
                        Update
                      </option> */}
                      <option value={list.id} label="delete">
                        Delete
                      </option>
                    </select>
                  </td>
                </tr>
              );
            })}
        </table>
        <div className="delete-btn-container">
          <button className="all-btn-style" onClick={deleteAllData}>
            Delete All items
          </button>
          <button className="all-btn-style" onClick={deleteSelectedData}>
            Delete Selected items
          </button>
        </div>
      </div>
      <Additems callFetchItem={fetchLists} />
    </>
  );
};
export default Items;
