import { Button, Form, InputGroup } from "react-bootstrap";
import "./coupons-page-comp.scss";
import { BsSearch } from "react-icons/bs";
import usersData from "../coupons/coupons.json";
import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";


const columns = [
  {
    name: "code",
    selector: (row) => row.code,
  },
  {
    name: "amount",
    selector: (row) => row.amount,
  },
  {
    name: "type",
    selector: (row) => row.type,
  },
  {
    name: "life",
    selector: (row) => row.life,
  },
  {
    name: "num",
    selector: (row) => row.num,
  },
];

const CouponsPageComp = () => {
 
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("")
  const navigate = useNavigate()
  const {couponId} = useParams
  const [dataUsers, setdataUsers] = useState(usersData)
  


  const {pathname} = useLocation()

  const loadData = (values) => {
    try {
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleChangePage = () => {

 

  };

  // const handleChangeRowsPerPage = (id) => {
  //   navigate(`/admin/coupons/${usersData.id}`)
  // };


  const handleInput = (e) => {

    setQuery(e.target.value)
    }

    const handleClick = () => { 
      navigate(`/admin/coupons/${couponId}`)
     }

     const handleNew = () => { 
      navigate(`/admin/coupons/new`)

      }

  return (
    <div className="coupons-page ">
      <div className="pathname">
        <p>{pathname === "/admin/coupons" && "Dashboard > Coupons"}</p>
      </div>
      <InputGroup className="coupons-input">
        <Form.Control
          placeholder="Type something"
          aria-label="Text input"
          onChange={handleInput}
          type="text"
        />
        <Button variant="primary" >
          <BsSearch />
        </Button>
        <Button onClick={handleNew} variant="secondary">New Coupon</Button>
      </InputGroup>

      <div>
        <DataTable className="data-table"
          columns={columns}
          data={dataUsers.filter((val)=>{
            if(query === "")
            return val;
            else if(
              val.code.toLowerCase().includes(query.toLowerCase())
            ){
              return val;
            }

            

          })}
          progressPending={loading}
          pagination
          paginationServer
          paginationTotalRows={63}
          onChangePage={handleChangePage}
          onRowClicked={handleClick}
          // onChangeRowsPerPage={handleChangeRowsPerPage}
        
        />
      </div>
    </div>
  );
};

export default CouponsPageComp;
