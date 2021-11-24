
import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SearchJobs from "./SearchJobs.jsx";
import uniqid from 'uniqid'
import { useParams } from 'react-router-dom'

const CompanyDetails = () => {

    const [jobs, setJobs] = useState([])
    const params = useParams()

    useEffect(() => {
        companyJobs()
    }, [])



    const companyJobs = async () => {
        const response = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?company=${params.companyName}`)
        if(response.ok){
            const data = await response.json()
            console.log(data)
    
            setJobs(data.data)
        }
       else{
           console.log("cannot find data")
       }
    }

    return (
        <Container>
            <Row>
                <Col>
                    {jobs.map(job => <SearchJobs key={uniqid()} data={job} />)}
                </Col>
            </Row>
        </Container>
    )
}

export default CompanyDetails