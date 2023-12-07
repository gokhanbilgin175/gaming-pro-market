import React from "react";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import "./user-all-orders.scss";

const columns = [
  {
    name: "Order Date",
    selector: (row) => row.orderDate,
  },
  {
    name: "Code",
    selector: (row) => row.code,
  },
  {
    name: "Items",
    selector: (row) => row.items,
  },
  {
    name: "Status",
    selector: (row) => row.status,
  },
  {
    name: "Total",
    selector: (row) => row.total,
  },
];

const data = [
  {
    id: 1,
    orderDate: "10/10/2022",
    code: "AB-123",
    items: 4,
    status: "Pending",
    total: "$54",
  },
  {
    id: 2,
    orderDate: "09/01/2022",
    code: "ABC-123",
    items: 2,
    status: "Pending",
    total: "$653",
  },
];

const UserAllOrders = () => {
  const navigate = useNavigate();

  // const handleRowClicked = (row) => {
  //   navigate(`/admin/orders/:orderId`);
  // };

  return (
    <div className="user-all-orders">
      <DataTable
        columns={columns}
        data={data}
        // onRowClicked={handleRowClicked}
      />
    </div>
  );
};

export default UserAllOrders;
