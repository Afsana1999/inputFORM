import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { nextStep, setSecondData } from "../feautures/formSlice";

function SecondInput() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(nextStep());
  };
  const secondData = useSelector((state) => state.form.secondData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setSecondData({ [name]: value }));
  };
  console.log(secondData);

  return (
    <div>
      <form action="" onSubmit={handleSubmit} className="flex  p-10">
        <div className="input-content">
          <div>
            <label className=" ">Building Name</label>
            <input
              type="text"
              name="Building name"
              placeholder="Enter name"
              value={secondData["Building name"]}
              onChange={handleChange}
              className="border w-96 px-2 mx-40"
            />
          </div>
          <div>
            <label className="mr-[40px]">City/area</label>
            <input
              placeholder="Enter City"
              type="text"
              name="City area"
              value={secondData["City area"]}
              onChange={handleChange}
              className="border w-96 px-2 mx-40"
            />
          </div>
          <div>
            <label>landline number</label>
            <input
              placeholder="Enter landline number"
              type="number"
              className="border w-96 px-2 mx-36"
              name="Landline number"
              value={secondData["Landline number"]}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Address line 1</label>
            <input
              type="text"
              placeholder="Enter adres"
              className="border w-96 px-2 mx-40"
              name="Address line 1"
              value={secondData["Address line 1"]}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Address line 2</label>
            <input
              type="text"
              placeholder="Enter adres"
              name="Address line 2"
              value={secondData["Address line 2"]}
              onChange={handleChange}
              className="border w-96 px-2 mx-40"
            />
          </div>
          <div>
            <label>PO Box Number</label>
            <input
              placeholder="Enter box number"
              type="number"
              name="PO Box Number"
              value={secondData["PO Box Number"]}
              onChange={handleChange}
              className="border w-96 px-2 mx-36"
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

export default SecondInput;
