import React from 'react';
import { Container} from 'react-bootstrap';
import { useLoaderData } from "react-router-dom";


const Blogs = () => {
    const blogs = useLoaderData();
    return (
        <Container>
         
            <h1 className="text-center my-5">Some Question</h1>

         

            {blogs.map((blog) => (
          <>
            <div className="blogs">
              <div class="card mb-3">
                <div class="row g-0">
                  <div class="col-md-3">
                    <img
                      style={{ height: "100%" }}
                      src={blog.img}
                      class="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-9">
                    <div class="card-body">
                      <h5 class="card-title">{blog.question}</h5>
                      <p class="card-text">{blog.ans}</p>
                      <p class="card-text">
                        <small class="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
        </Container>
    );
};

export default Blogs;