import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { updateProjectAPI } from "../../service/allAPI";

function EDModal({project, onUpdate}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const mainColor = "#7A8797"; 

  const[updateData,setUpdateData]=useState({
      title: "",
    description: "",
    minbudget: "",
    maxbudget: "",
    deadline: "",
  })

  // input changes
  const handleChange =(e)=>{
    const{id,value}=e.target
    setUpdateData({...updateData,[id]:value})
  }

  // update function
  const handleUpdate = async()=>{
    try {
     const result = await updateProjectAPI(project._id,updateData)
      if (result.status==200) {
        
        alert("Project updated successfully!");
        onUpdate()
        handleClose();
      } else {
        alert("Failed to update Project")
      } 
    } catch (error) {
      console.error("Error updating project:", error);
      alert("Something went wrong while updating")
    }
  }

  useEffect(()=>{
    if (project) {
      setUpdateData({
         title: project.title || "",
        description: project.description || "",
        minbudget: project.minbudget || "",
        maxbudget: project.maxbudget || "",
        deadline: project.deadline || "",
      })
    }
  }, [project, show])
  return (
    <>
     <Button
  variant="outline-success"
  size="sm"
  className="no-hover-btn"
  style={{
    fontWeight: "500",
    borderRadius: "6px",
    marginRight: "8px",
  }}
  onClick={handleShow}
>
  Edit
</Button>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{ borderBottomColor: mainColor }}>
          <Modal.Title style={{ color: mainColor }}>Edit Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label
                htmlFor="projectTitle"
                className="form-label"
                style={{ color: mainColor }}
              >
                Project Title
              </label>
              <input value={updateData.title} onChange={handleChange}
                type="text"
                className="form-control"
                id="title"
                placeholder="Enter project title"
                style={{ borderColor: mainColor }}
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="description"
                className="form-label"
                style={{ color: mainColor }}
              >
                Description
              </label>
              <textarea value={updateData.description} onChange={handleChange}
                className="form-control"
                id="description"
                placeholder="Enter project description"
                style={{ borderColor: mainColor }}
              ></textarea>
            </div>

           

            <div className="mb-3">
              <label
                htmlFor="minBudget"
                className="form-label"
                style={{ color: mainColor }}
              >
                Minimum Budget (₹)
              </label>
              <input value={updateData.minbudget} onChange={handleChange}
                type="number"
                className="form-control"
                id="minbudget"
                placeholder="Enter minimum budget"
                style={{ borderColor: mainColor }}
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="maxbudget"
                className="form-label"
                style={{ color: mainColor }}
              >
                Maximum Budget (₹)
              </label>
              <input value={updateData.maxbudget} onChange={handleChange}
                type="number"
                className="form-control"
                id="maxbudget"
                placeholder="Enter maximum budget"
                style={{ borderColor: mainColor }}
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="deadline"
                className="form-label"
                style={{ color: mainColor }}
              >
                Date
              </label>
              <input value={updateData.deadline} onChange={handleChange}
                type="text"
                className="form-control"
                id="deadline"
                placeholder="Enter deadline or duration"
                style={{ borderColor: mainColor }}
              />
            </div>

            {/* <div className="mb-3">
              <label
                htmlFor="fileUpload"
                className="form-label"
                style={{ color: mainColor }}
              >
                File Upload (optional)
              </label>
              <input
                type="file"
                className="form-control"
                id="fileUpload"
                style={{ borderColor: mainColor }}
              />
            </div> */}
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
            style={{ backgroundColor: "#ccc", borderColor: mainColor, color: mainColor }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleUpdate}
            style={{
              backgroundColor: mainColor,
              borderColor: mainColor,
              color: "white",
            }}
          >
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EDModal;
