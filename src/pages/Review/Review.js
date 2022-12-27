import React, { useContext, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import toast from "react-hot-toast";
import { AuthContext } from "../../Assets/contexts/AuthProvider";
import UseTitle from "../../Assets/Hooks/UseTitle";
import CommentBox from "./CommentBox";
import ReviewCard from "./ReviewCard";

const Review = ({ id }) => {
  UseTitle('review')
  const [comment, setComment] = useState([]);
  const { user } = useContext(AuthContext);

  const handleComment = (e) => {
    e.preventDefault();
    const commentSingle = e.target.comment.value;
    const ratings = e.target.ratings.value;
    const name = user?.displayName;
    const photo = user?.photoURL;
    const uid = user?.uid;
    

    const review = {
      commentSingle,
      name,
      uid,
      id,
      photo,
      ratings
    };
    

    fetch(`https://service-review-server-woad.vercel.app/review`, {
      method: 'POST',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(review),
    })
    .then(res => res.json())
    .then(data => 
      
      {
        if(data.acknowledged){
            toast.success('User added successfully');
           
        }
    })
    
    const totalComment = [...comment, review];
    setComment(totalComment);
  };

  useEffect(() => {
    fetch(`https://service-review-server-woad.vercel.app/review?id=${id}`,
    {
      headers: {
        authorization: `Bearer ${localStorage.getItem('service-token')}`
    }
    }
    )
      .then((res) => res.json())
      .then((data) => setComment(data));
      
  }, [id]);




  return (
    <div>
      <div>
        <h2 className="text-center my-3 ">What Client Say </h2>
        <hr />
      </div>
      <Row className="sticky-top">
        <Col md="8">
          <h1>Comments</h1>

          {
 


    comment.map(cm=> {
     
      if (cm) {
        return <ReviewCard 
        key={cm._id}
      comment={cm}
      />
      }

     
     else{

      return <h2>no data found</h2>

    
     }
        
       
        
        })
}
        </Col>
        <Col md="4">
          <CommentBox handleComment={handleComment} />
        </Col>
      </Row>
    </div>
  );
};

export default Review;
