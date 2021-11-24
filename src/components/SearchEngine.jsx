import { useEffect, useState } from "react";
import { Form, Button, FormControl } from "react-bootstrap";
import { Container,Row,Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import uniqid from "uniqid"
import {  useNavigate } from 'react-router-dom'

import SearchJobs from "./SearchJobs.jsx";

const SearchEngine = (props) => {
  const [query, setQuery] = useState("");
  const [jobs, setJobs] = useState([])
  const navigate = useNavigate()
  

  const handleChange=(e)=>{
        setQuery(e.target.value)
  }

 const  fetchTheJobs = async (e) => {
    e.preventDefault()

    const response = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?search=${query}&limit=20`)

    if (response.ok) {
        const  data  = await response.json()

        setJobs(data.data)
       
       
    }else{
        console.log("something went wrong")
    }

   

}

  
  return (
    <Container>
                <Row>
                    <Col xs={10} className='mx-auto my-3'>
                        <h1>Jobs Search</h1>
                    </Col>
                    <Col xs={10} >
                        <Form onSubmit={fetchTheJobs}>
                            <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
                        </Form>
                    </Col>
                    <Col>
                   <Button onClick={()=>navigate("/favourites")}>Favourite</Button>
                    </Col>
                    <Col xs={10} >
                        {
                            jobs.map(job => <SearchJobs key={uniqid()} data={job} />)
                        }
                    </Col>
                </Row>
            </Container>
      
  );
};

export default SearchEngine;
