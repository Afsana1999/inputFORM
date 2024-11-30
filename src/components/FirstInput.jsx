import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { nextStep, setFirstData } from "../feautures/formSlice";

function FirstInput() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(nextStep());
  };
  const firstData = useSelector((state) => state.form.firstData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFirstData({ [name]: value }));
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit} className="flex  p-10">
        <div className="input-content">
          <div>
            <label className="mr-[59px]">Name</label>
            <input
              placeholder="Enter name"
              type="text"
              name="Name"
              className="border w-96 px-2 mx-40"
              value={firstData.Name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="mr-[62px]">Email</label>
            <input
              placeholder="Enter email"
              type="email"
              name="Email"
              className="border w-96 px-2 mx-40"
              value={firstData.Email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Mobil number</label>
            <input
              placeholder="Enter mobil number"
              type="number"
              className="border w-96 px-2 mx-40"
              name="Mobil number"
              value={firstData["Mobil number"]}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Address line 1</label>
            <input
              placeholder="Enter adress"
              type="text"
              className="border w-96 px-2 mx-40"
              name="Address line 1"
              id=""
              value={firstData["Address line 1"]}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Address line 2</label>
            <input
              placeholder="Enter adress"
              type="text"
              name="Address line 2"
              className="border w-96 px-2 mx-40"
              value={firstData["Address line 2"]}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Address line 3</label>
            <input
              type="text"
              placeholder="Enter adress"
              name="Address line 3"
              className="border w-96 px-2 mx-40"
              value={firstData["Address line 3"]}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="w-[40%] text-right content-center ">
          <input
            type="submit"
            className="bg-red-600 py-3 px-8 rounded-lg text-white font-semibold duration-500 hover:text-black hover:bg-red-500 "
          />
        </div>
      </form>
    </div>
  );
}

export default FirstInput;
