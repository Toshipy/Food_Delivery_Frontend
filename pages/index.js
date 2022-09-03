import {Alert, Button, Col, Row, Input, InputGroup, InputGroupText} from "reactstrap";
import RestaurantList from "../components/RestaurantsList";
import React, { useEffect, useState } from "react";



const index = () => {
  const[query, setQuery] = useState("");
  return (
    <div className="container-fluid">
      <Row>
        <Col>
          <div className="search"L>
            <InputGroup>
              <InputGroupText>探す</InputGroupText>
              <Input placeholder="レストラン名を入力してください" onChange={(e) => setQuery(e.target.value.toLocaleLowerCase())}/>
            </InputGroup>
          </div>
          <RestaurantList search={query}/>
        </Col>
      </Row>
      <style jsx>{`
        .search {
          margin: 20px;
          width: 500px;
        }
      `}
      </style>
    </div>
  );
}

export default index;
