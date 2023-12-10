import { useState } from "react";
import "./DescriptionsBox.css";

export const DescriptionsBox = (props) => {
  console.log(props, "from  props ");
  const [showDescription, setShowDescription] = useState(true);
  const [newComment, setNewComment] = useState("");
  // const comments = [
  //   { username: "User1", comment: "This product is amazing!" },
  //   { username: "User2", comment: "very nice ." },
  //   { username: "User3", comment: "my kids really like it." },
  //   { username: "User4", comment: "love it." },
  //   { username: "User5", comment: "love it." },
  //   { username: "User6", comment: "love it." },
  //   { username: "User7", comment: "love it." },
  //   { username: "User7", comment: "love it." },
  //   { username: "User9", comment: "love it." },
  //   { username: "User10", comment: "love it." },
  //   { username: "User10", comment: "love it." },
  //   { username: "User10", comment: "love it." },
  //   { username: "User10", comment: "love it." },
  //   // Add more comments as needed...
  // ];
  const handleInputChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleAddcomment = () => {
    console.log("from handleAddcomment");
  };
  const handleTabClick = (tab) => {
    console.log(tab, "tab");
    if (tab === "description") {
      setShowDescription(true);
    } else if (tab === "reviews") {
      console.log("reviews");
      setShowDescription(false);
    }
  };
  return (
    <div className="description-box">
      <div className="block-tabs">
        <div
          className={showDescription ? "tabs active-tabs" : "tabs"}
          onClick={() => handleTabClick("description")}
        >
          Description
        </div>
        <div
          className={!showDescription ? "tabs active-tabs" : "tabs"}
          onClick={() => handleTabClick("reviews")}
        >
          Reviews(122)
        </div>
      </div>
      <div className="content-tab">
        {showDescription ? (
          <div className="content active-content">
            <h2>Description</h2>
            <hr />
            <p>{props.product.description}</p>
          </div>
        ) : (
          <div className="content">
            <h2>Reviews</h2>
            <hr />
            <div className="comments-container">
              <div className="comments">
                {props.product.comments.map((comment) => (
                  <div key={comment.comment_id} className="comment">
                    <strong>{comment.user.name}: </strong>
                    {comment.comment_text}
                  </div>
                ))}
                {/* {comments.map((comment, index) => (
                  <div key={index} className="comment">
                    <strong>{comment.username}: </strong>
                    {comment.comment}
                  </div>
                ))} */}
              </div>
              <div className="add-comment">
                <input
                  type="text"
                  value={newComment}
                  onChange={handleInputChange}
                />
                <button onClick={handleAddcomment}>Add comment</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
