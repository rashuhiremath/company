import { useState, useEffect } from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
import { Form, FormControl } from "react-bootstrap";

const SerachJobs = (props) => {
    const [jobs, setJobs] = useState([]);
    const [search, setSearch] = useState("");

  const fetchTheJobs = async () => {
    try {
      const response = await fetch(
        "https://strive-jobs-api.herokuapp.com/jobs"
      );
      const data = await response.json();
      if (response.ok) {
        console.log(data);
       setJobs(data.data);
      } else {
        console.log("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTheJobs();
  }, []);

  return (
    <>
    <Row>
        <Col md={4}>

     <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={search}
                // onChange={(e) => setSearch({ search: e.target.value })}
                onChange={e => setSearch(e.target.value)  }
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            </Col>
            </Row>
      <Row>
       
     { jobs.filter(job => job.title.toLowerCase().includes(search)).map(job => (
                            
                        
             <Col md={4}>
              <Card>
                <Card.Img variant="top" src={job.url} />
                <Card.Body>
                <Card.Title>{job.company_name}</Card.Title>
                 
                  <Card.Title>{job.title}</Card.Title>
                  <Card.Text>
                  {job.category}
                  </Card.Text>
                  <Button variant="primary">Detail</Button>
                </Card.Body>
              </Card>
              </Col>
          ))}
       
      </Row>
    </>
  );
};
export default SerachJobs;
