import { useEffect, useState } from "react";
import "./Model.css";

export const Model = ({ onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, []);
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("from Model component");
    //onSubmit({ address, contact });
  };

  return (
    <>
      <div className="modal-wrapper"></div>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Update your Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>
              Address:
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </label>
            <label>
              Contact:
              <input
                type="text"
                value={address}
                onChange={(e) => setContact(e.target.value)}
              />
            </label>
            <button type="submit">submit</button>
          </div>
        </form>
      </div>
    </>
  );
};
