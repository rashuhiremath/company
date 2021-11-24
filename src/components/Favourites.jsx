import { Row, Col, Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { deleteToLikesAction } from "../../src/action/index.js";

const mapStateToProps = (state) => ({
  favourites: state.favourites.likes,
});

const mapDispatchToProps = (dispatch) => ({
  deleteToLikes: function (likes) {
    dispatch(deleteToLikesAction(likes));
  },
});

const Favourites = ({ favourites , deleteToLikes}) => {
  console.log(favourites);
  return (
    <>
      <Row>
        {favourites.map((like,i) => (
          <Col md={3}>
            <Card>
             
              <Card.Body>
                <Card.Title>{like.company_name}</Card.Title>
                <Button variant="primary"  onClick={() => deleteToLikes(i)}>Delete</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);
