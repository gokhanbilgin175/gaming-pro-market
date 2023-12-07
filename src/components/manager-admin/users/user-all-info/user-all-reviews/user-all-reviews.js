import React from "react";
import DataTable from "react-data-table-component";
import "./user-all-reviews.scss";

const columns = [
  {
    name: "Content",
    selector: (row) => row.content,
  },
  {
    name: "Rating",
    selector: (row) => row.rating,
  },
  {
    name: "Status",
    selector: (row) => row.status,
  },
];

const data = [
  {
    id: 1,
    content: "It is a beneficial product. I highly recommend it.",
    rating: 5,
    status: "Active",
  },
  {
    id: 2,
    content: "It is a beneficial product. I highly recommend it.",
    rating: 5,
    status: "Active",
  },
];

const UserAllReviews = () => {
  return (
    <div className="user-all-reviews">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default UserAllReviews;
