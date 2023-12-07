import React from "react";
import DataTable from "react-data-table-component";
import "./user-all-coupons.scss";

const columns = [
  {
    name: "Code",
    selector: (row) => row.code,
  },
  {
    name: "Amount",
    selector: (row) => row.amount,
  },
  {
    name: "life",
    selector: (row) => row.life,
  },
  {
    name: "Status",
    selector: (row) => row.status,
  },
];

const data = [
  {
    id: 1,
    code: "ABC-123",
    amount: "50%",
    life: 4,
    status: "Finished",
  },
  {
    id: 1,
    code: "CBA-321",
    amount: "$20",
    life: "Unlimited",
    status: "Active",
  },
];

const UserAllCoupons = () => {
  return (
    <div className="user-all-coupons">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default UserAllCoupons;
