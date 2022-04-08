// import { Fragment, useEffect, useRef, useState } from "react";
// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { sendNewBrand } from "../../../store/actions";
// import { brandActions } from "../../../store/brand-slice";
// import Axios from "axios";

// const AdminComments = () => {
//   const loadedComments = useSelector((state) => state.products.comments);
//   const [comments, setComments] = useState([]);
//   const dispatch = useDispatch();
//   const [showUpdateButton, setShowUpdateButton] = useState(false);
//   const [comment, setComment] = useState("");
//   const [productId, setProductId] = useState();

//   const nameRef = useRef();
//   const [id, setId] = useState();

//   useEffect(() => {
//     setBrands(loadedBrands);
//   }, [loadedBrands]);

//   ///////// UpdateButton //////////

//   const updateButtonHandler = (id) => {
//     setShowUpdateButton(true);
//     const newItem = loadedBrands.find((item) => item.id === id);
//     setName(newItem.name);
//     setId(id);
//     console.log(newItem, "new item");
//   };

//   ///////// UPDATEHANDLER //////////

//   const updateHandler = () => {
//     const name = nameRef.current.value;

//     Axios.put(`http://localhost:5000/updateBrand/${id}`, {
//       name: name,
//     });
//     const newBrands = loadedBrands.map((brand) => {
//       if (brand.id === id) {
//         return {
//           ...brand,
//           name: name,
//         };
//       }
//       return brand;
//     });
//     setBrands(newBrands);

//     dispatch(
//       brandActions.getBrands({
//         brandItems: newBrands,
//       })
//     );
//   };

//   ///////////////POST NEW Brand ///////////////////

//   const submitHandler = async (event) => {
//     event.preventDefault();
//     const name = nameRef.current.value;
//     const response = await dispatch(sendNewBrand(name));
//     console.log(response.data.insertId);
//     if (response.status === 200) {
//       const newId = response.data.insertId;
//       const newItem = { name: name, id: newId };
//       const newBrands = [...loadedBrands, newItem];
//       setBrands(newBrands);
//       dispatch(
//         brandActions.getBrands({
//           brandItems: newBrands,
//         })
//       );
//     }
//   };
//   const deleteHandler = (id) => {
//     Axios.delete(`http://localhost:5000/deleteBrand/${id}`);
//     const newBrands = brands.filter((brand) => brand.id !== id);
//     setBrands(newBrands);
//   };
//   return (
//     <Fragment>
//       <div>
//         <form action="">
//           <label htmlFor="">Name</label>
//           <input
//             type="text"
//             ref={nameRef}
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />

//           {showUpdateButton ? (
//             <button onClick={updateHandler}>Update</button>
//           ) : (
//             <button type="submit" onClick={submitHandler}>
//               Submit
//             </button>
//           )}
//         </form>
//       </div>
//       <table>
//         <thead>
//           <tr>
//             <th>Id</th>
//             <th>Name</th>
//             <th>Action</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {brands &&
//             brands.map((brand) => {
//               return (
//                 <tr key={brand.id}>
//                   <td>{brand.id}</td>
//                   <td>{brand.name}</td>
//                   <td>
//                     <button
//                       onClick={() => {
//                         updateButtonHandler(brand.id);
//                       }}
//                     >
//                       Update
//                     </button>
//                   </td>
//                   <td>
//                     <button
//                       onClick={() => {
//                         deleteHandler(brand.id);
//                       }}
//                     >
//                       delete
//                     </button>
//                   </td>
//                 </tr>
//               );
//             })}
//         </tbody>
//       </table>
//     </Fragment>
//   );
// };
// export default AdminComments;
