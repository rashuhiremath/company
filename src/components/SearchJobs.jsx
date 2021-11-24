import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../../src/styles/hesrt.css"
import { connect } from "react-redux";
import { addToLikesAction } from "../action/index.js";

const mapStateToProps = (state) =>({

}

)

const mapDispatchToProps = (dispatch) => ({
 addToLikes :function(likes){
     dispatch(addToLikesAction(likes))
 }
})
 

const SearchJobs = (props) =>{
    const  [toggleHeart, setToggleHeart] = useState(false)
    
   const  changeColor = (() =>{
     setToggleHeart(!toggleHeart)
    },[])
   


     return(
  <Row style={{ color: "black" }}>
    <Col xs={2}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="currentColor"
        className={
            toggleHeart ? 'heart active' : 'heart'
          }  onClick={() => props.addToLikes(props.data)}
        viewBox="0 0 16 16"
      >
        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
      </svg>
    </Col>

    <Col xs={3}>
      <Link to={`/${props.data.company_name}`}>{props.data.company_name}</Link>
    </Col>
    <Col xs={7}>
      <a href={props.data.url} target="_blank" rel="noreferrer">
        {props.data.title}
      </a>
    </Col>
  </Row>
);
    

}

export default connect(mapStateToProps, mapDispatchToProps)(SearchJobs);
