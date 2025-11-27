import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteProjectAPI } from '../../service/allAPI';
function DeleteModal({ projectId ,onDelete }) {
  const[deletePostProjects,setDeletePostProjects]=useState("")
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteProject = async(id)=>{
    const result = await deleteProjectAPI(projectId)
    console.log(result);
    setDeletePostProjects(result)
    
  }
    useEffect(() => {
    if (deletePostProjects && deletePostProjects.status === 200) {
      onDelete()
      handleClose()
    }
  }, [deletePostProjects])

  return (
    <>
 <Button variant="outline-danger" size="sm"  onClick={handleShow}>
        Delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete ?</Modal.Body>
        <Modal.Footer>
          <Button variant="outline-success" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="outline-danger" onClick={deleteProject}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default DeleteModal