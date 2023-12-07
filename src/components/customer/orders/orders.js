import React, { useEffect, useState } from "react";
import { Container, Pagination, Row, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./orders.scss";

const Orders = () => {
  //   const [loading, setLoading] = useState(true);
  // const [reservations, setReservations] = useState([]);
  const [paging, setPaging] = useState({});
  const navigate = useNavigate();

  const loadData = async (page) => {
    // try {
    //   const resp = await getReservations(page);
    //   const { content, totalPages, pageable } = resp.data;
    //   setReservations(content);
    //   setPaging({ totalPages, pageNumber: pageable.pageNumber });
    // } catch (err) {
    //   console.log(err);
    // } finally {
    //   setLoading(false);
    // }
  };

  useEffect(() => {
    loadData(0);
  }, []);

  return (
    <div className="orders-page">
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Order Date</th>
              <th>Items</th>
              <th>Status</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {/* {loading && ( */}
            {/* <tr>
          <td colSpan={4} className="text-center">
            <Spinner animation="border" size="sm" />
          </td>
        </tr> */}
            {/* )} */}
            {/* {orders.map((item) => ( */}
            <tr
              onClick={() => navigate(`/user/order-details`)}
              //    <tr key={item.id} onClick={()=> navigate(`/user/reservations/${item.id}`)} style={{ cursor: "pointer" }}>
              //    <td>{index + 1}</td>
              //    <td>{item.car.model}</td>
              //    <td>
              //      {item.pickUpLocation} - {formatDateTime(item.pickUpTime)}
              //    </td>
              //    <td>
              //      {item.dropOffLocation} - {formatDateTime(item.dropOffTime)}
              //    </td>
              //  </tr>
            >
              <td>Jan 13,2023</td>
              <td>5</td>
              <td>Completed</td>
              <td>$125</td>
            </tr>
            {/* ))} */}
            <tr onClick={() => navigate(`/user/order-details`)}>
              <td>Dec 05,2022</td>
              <td>3</td>
              <td>Canceled</td>
              <td>$52</td>
            </tr>
          </tbody>
        </Table>

        {paging.totalPages > 1 && (
          <Row className="mt-5">
            <Pagination className="justify-content-center">
              <Pagination.First
                onClick={() => loadData(0)}
                disabled={paging.pageNumber <= 0}
              />
              <Pagination.Prev
                onClick={() => loadData(paging.pageNumber - 1)}
                disabled={paging.pageNumber <= 0}
              />

              {[...Array(paging.totalPages)].map((item, index) => (
                <Pagination.Item
                  active={index === paging.pageNumber}
                  key={index}
                  onClick={() => index !== paging.pageNumber && loadData(index)}
                >
                  {index + 1}
                </Pagination.Item>
              ))}

              <Pagination.Next
                onClick={() => loadData(paging.pageNumber + 1)}
                disabled={paging.pageNumber >= paging.totalPages - 1}
              />
              <Pagination.Last
                onClick={() => loadData(paging.totalPages - 1)}
                disabled={paging.pageNumber >= paging.totalPages - 1}
              />
            </Pagination>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Orders;
