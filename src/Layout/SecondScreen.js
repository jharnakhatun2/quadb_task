import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";

function SecondScreen() {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  console.log(location);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  // Modal Form Data save on LocalStorage
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save form data to local storage
    localStorage.setItem("modalFormData", JSON.stringify(formData));
    // Clear form fields
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    // Close the modal
    handleCloseModal();
  };

  return (
    <div className="container mx-auto py-5">
      <div className="w-10">
        <img
          src={location.state.image.original}
          alt=""
          className="img-fluid"
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
        />
      </div>
      <div className="pt-4">
        <div className="d-block d-sm-flex justify-content-between align-items-center">
          <h2 className="text-uppercase f">
            Show Name :{" "}
            <span style={{ color: "red" }}>{location.state.name}</span>
          </h2>
          <p>
            Ratings :{" "}
            <span style={{ color: "red", fontWeight: "bold" }}>
              {location.state.rating.average}
            </span>
          </p>
        </div>
        <p className="card-text">{location.state.summary}</p>
        <div className="d-block d-md-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-between align-items-center">
            <p className="mr-3">
              Movie Type :{" "}
              <span style={{ color: "red", fontWeight: "bold" }}>
                {location.state.type}
              </span>
            </p>
            <p className="mx-3">
              Language :
              <span style={{ color: "red", fontWeight: "bold" }}>
                {location.state.language}
              </span>
            </p>
            <p className="mx-3">
              Status :{" "}
              <span style={{ color: "red", fontWeight: "bold" }}>
                {location.state.status}
              </span>
            </p>
            <p className="mx-3">
              Total Runtime :{" "}
              <span style={{ color: "red", fontWeight: "bold" }}>
                {location.state.averageRuntime}
              </span>
            </p>
          </div>
          <Button
            className="btn btn-danger"
            variant="primary"
            onClick={handleOpenModal}
          >
            BOOK TICKET
          </Button>
        </div>
      </div>

      {/* <!-- Modal --> */}
      <div>
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Movie Ticket Booking</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* ===========Form============== */}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary mt-2"
                data-dismiss="modal"
              >
                BOOK NOW
              </button>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}

export default SecondScreen;
