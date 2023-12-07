import React from "react";
import DataTable from "react-data-table-component";
import "./user-all-addresses.scss";

const columns = [
  {
    name: "Title",
    selector: (row) => row.title,
  },
  {
    name: "Address",
    selector: (row) => row.address,
  },
  {
    name: "City",
    selector: (row) => row.city,
  },
  {
    name: "Country",
    selector: (row) => row.country,
  },
];

const data = [
  {
    id: 1,
    title: "Home",
    address: "123 st 23A NW",
    city: "Calgary",
    country: "Canada",
  },
  {
    id: 2,
    title: "Business",
    address: "123 st 23A NW",
    city: "Calgary",
    country: "Canada",
  },
];

const UserAllAddresses = () => {
  return (
    <div className="user-all-addresses">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default UserAllAddresses;
