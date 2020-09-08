import React from 'react';

const BookTable = ({toCurrency, fromCurrency, orders, title}) => {
  return (
    <div className="border shadow w-1/2 mx-4  bg-white">
      <h3 className="text-center text-4xl">{title}</h3>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Amount: {toCurrency}</th>
            <th className="px-4 py-2">Amount: {fromCurrency}</th>
          </tr>
        </thead>
        <tbody>
          {orders && orders.map((order, i) => (
            <tr key={i}>
              <td className="border px-4 py-2">{order[0]}</td>
              <td className="border px-4 py-2">{order[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookTable;

