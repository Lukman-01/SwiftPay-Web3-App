import React, { useState } from "react";
//create a component using React and TailwindCss, that includes a heading, a table with columns "Name", "Address", "Amount" and "Message",
//an editable button at the end of each row, an 'Add' button on top of the table, a form that appears
//when the 'Add' button is clicked. The form contains input fields for "Name", "Address", "Amount" and "Message" and
//when the form is submitted, it will add the form data to the table list, when the edit button of any row is clicked,
//that particular row data should be  editable, add a delete icon beside the edit button for every row, when the delete
//icon of any  row is clicked, that particular row should be deleted, use tailwind css, to make the component beautiful:

const TestTable = () => {
  const [tableData, setTableData] = useState([
    {
      name: "",
      address: "",
      amount: "",
      message: "",
    },
  ]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    amount: "",
    message: "",
  });

  const handleAdd = () => {
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTableData([...tableData, formData]);
    setFormData({ name: "", address: "", amount: "", message: "" });
    setShowForm(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDelete = (index) => {
    let newData = [...tableData];
    newData.splice(index, 1);
    setTableData(newData);
  };

  return (
    <div className="m-auto w-[60%] justify-center content-center">
      <div className="pb-10px">
        <h1 className="text-center text-white text-4xl italic justify-center font-bold font-mono">
          Send To Multiple Accounts
        </h1>
      </div>
      <div className="pb-5px justify-end content-end">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-lg mb-4 ml-2 "
          onClick={handleAdd}
        >
          Add
        </button>
      </div>
      <div className="justify-center m-auto">
        {showForm && (
          <form onSubmit={handleSubmit}>
            <input
              className="border p-2 mr-2 rounded-lg"
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              className="border p-2 mr-2 rounded-lg"
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
            />
            <input
              className="border p-2 mr-2 rounded-lg"
              type="text"
              name="amount"
              placeholder="Amount"
              value={formData.amount}
              onChange={handleChange}
            />
            <input
              className="border p-2 mr-2 rounded-lg"
              type="text"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg mr-2"
            >
              Submit
            </button>
          </form>
        )}
        <div>
          <table className="w-full justify-center items-center">
            <thead>
              <tr>
                <th className="px-4 py-2 text-white">Name</th>
                <th className="px-4 py-2 text-white">Address</th>
                <th className="px-4 py-2 text-white">Amount</th>
                <th className="px-4 py-2 text-white">Message</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 text-white">{data.name}</td>
                  <td className="px-4 py-2 text-white">{data.address}</td>
                  <td className="px-4 py-2 text-white">{data.amount}</td>
                  <td className="px-4 py-2 text-white">{data.message}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleDelete(index)}
                      className="bg-red-500 text-white py-2 px-4 rounded-full mr-4"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="m-auto w-[60%] justify-center content-center my-10">
            <button className="m-auto w-[60%] flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]">
              Send Ether
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestTable;
