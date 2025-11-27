import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Container, Form, Button, Card, Row, Col } from "react-bootstrap";
import { toast } from 'react-toastify';
import { addProjectAPI } from '../../service/allAPI';
import { MdOutlineCancel } from "react-icons/md";
function PostProject() {
  // const[preview,setPreview] = useState("")
  const[token,setToken] = useState("")
 
  const [postProject, setPostProject] = useState({
    title: "",
    description: "",
    minbudget: "",
    maxbudget: "",
    deadline: "",
    // uploadfile: []
  })
  console.log(postProject);
  console.log(token);
  

  // const handleUpload = (e) => {
  //   console.log(e.target.files);
  //   const fileUpload = postProject.uploadfile
  //   fileUpload.push(e.target.files[0])
  //   setPostProject({...postProject,uploadfile:fileUpload})
  //   const url = URL.createObjectURL(e.target.files[0])
  //   setPreview(url)
  //   console.log(preview);
    
  // }

  const handleSubmit = async () =>{
    const{ title,description, minbudget, maxbudget,deadline} = postProject
    console.log(title,
    description,
    minbudget,
    maxbudget,
    deadline);
    if (!title || !description || !minbudget || !maxbudget ||!deadline) {
      toast.info("Please complete the form properly")
    } else {
      toast.success("Project posted Successfully")
      setPostProject({
      title: "",
      description: "",
      minbudget: "",
      maxbudget: "",
      deadline: "",
     
    });
    }
    // create reqHeader
    const reqHeader = {
      "Authorization" : `Bearer ${token}`
    }
    const result = await addProjectAPI(postProject,reqHeader)
    console.log(result);
    // if (result.status == 200) {
    //   toast.success("Project added successfully")
    // } else {
    //   toast.error("Error in adding project")
    // }
    
  }

  // skills section
//   const[skills,setSkills]=useState([])
//   const[skillInput,setSkillInput]=useState("")
//   const addSkill = () => {
// if (skillInput.trim() !== "" && !skills.includes(skillInput.trim())) {
//   setSkills([...skills,skillInput.trim()])
//   setSkillInput("")
// }
//   }

//   const removeSkill = (skillToRemove)=>{
//     setSkills(skills.filter((s) => s !== skillToRemove))
//   }

  useEffect(()=>{
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"))
    }
  })
  return (
    <>
      <Header />
      <div
        style={{
          backgroundColor: "#f8f9fa",
          minHeight: "100vh",
          paddingTop: "100px",
          paddingBottom: "60px",
        }}
      >
        <Container>
          <Card
            className="shadow-sm border-0 p-5 mx-auto"
            style={{
              maxWidth: "700px",
              borderRadius: "16px",
              backgroundColor: "#fff",
            }}
          >
            {/* Page Header */}
            <div className="text-center mb-4">
              <h2 style={{ fontWeight: "700", color: "#2d2f33" }}>
                Post a New Project
              </h2>
              <p style={{ color: "#7A8797" }}>
                Share your project details and find the best freelancers to work with.
              </p>
            </div>

            {/* Form Starts */}
            <form>
              {/* Project Title */}
              <div className="mb-4">
                <label
                  htmlFor="projectTitle"
                  style={{ fontWeight: "500", color: "#2d2f33", display: "block", marginBottom: "6px" }}
                >
                  Project Title
                </label>
                <input value={postProject.title} onChange={(e)=>setPostProject({...postProject,title:e.target.value})}
                  type="text"
                  id="projectTitle"
                  placeholder="Enter a brief title for your project"
                  style={{
                    width: "100%",
                    borderRadius: "8px",
                    border: "1px solid #d1d5db",
                    padding: "10px 12px",
                  }}
                />
              </div>

              {/* Description */}
              <div className="mb-4">
                <label
                  htmlFor="description"
                  style={{ fontWeight: "500", color: "#2d2f33", display: "block", marginBottom: "6px" }}
                >
                  Description
                </label>
                <textarea value={postProject.description} onChange={(e)=>setPostProject({...postProject,description:e.target.value})}
                  id="description"
                  rows={4}
                  placeholder="Describe your project, goals, and requirements"
                  style={{
                    width: "100%",
                    borderRadius: "8px",
                    border: "1px solid #d1d5db",
                    padding: "10px 12px",
                  }}
                />
              </div>

              {/* Skills Required */}
              {/* <div className="mb-4">
          <label style={{ fontWeight: "500", color: "#2d2f33", display: "block", marginBottom: "6px" }}>
            Skills Required
          </label>
          <div style={{ display: "flex", gap: "10px", marginBottom:"12px" }}>
        <input type="text" placeholder='Add a skill..' value={skillInput} onChange={(e)=>setSkillInput(e.target.value)} style={{flexGrow:1, padding:"10px",borderRadius:"8px", border:"1px solid #ccc"}} />
        <button type='button' onClick={addSkill} style={{ padding: "10px 16px",
        borderRadius: "8px",
        border: "none",
        backgroundColor: "#9AAFC2",
        color: "white",
        fontWeight: "500",
        cursor: "pointer",}}>Add</button>
          </div>
          <div className="" style={{display: "flex", flexWrap: "wrap", gap: "10px"}}>{skills.map((skill)=>(
            <span    key={skill}
        onClick={() => removeSkill(skill)}
        className="px-3 py-2"
        style={{
          borderRadius: "20px",
          border: "1px solid #9AAFC2",
          color: "#9AAFC2",
          fontWeight: "500",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }} >skill </span>
          ))}</div>
        </div> */}

              {/* Budget Range */}
              <div className="row mb-4">
                <div className="col-md-6 mb-3 mb-md-0">
                  <label
                    htmlFor="minBudget"
                    style={{ fontWeight: "500", color: "#2d2f33", display: "block", marginBottom: "6px" }}
                  >
                    Minimum Budget (₹)
                  </label>
                  <input value={postProject.minbudget} onChange={(e)=>setPostProject({...postProject,minbudget:e.target.value})}
                    type="number"
                    id="minBudget"
                    placeholder="e.g. 5000"
                    style={{
                      width: "100%",
                      borderRadius: "8px",
                      border: "1px solid #d1d5db",
                      padding: "10px 12px",
                    }}
                  />
                </div>
                <div className="col-md-6">
                  <label
                    htmlFor="maxBudget"
                    style={{ fontWeight: "500", color: "#2d2f33", display: "block", marginBottom: "6px" }}
                  >
                    Maximum Budget (₹)
                  </label>
                  <input value={postProject.maxbudget} onChange={(e)=>setPostProject({...postProject,maxbudget:e.target.value})}
                    type="number"
                    id="maxBudget"
                    placeholder="e.g. 20000"
                    style={{
                      width: "100%",
                      borderRadius: "8px",
                      border: "1px solid #d1d5db",
                      padding: "10px 12px",
                    }}
                  />
                </div>
              </div>

              {/* Deadline / Duration */}
              <div className="mb-4">
                <label
                  htmlFor="deadline"
                  style={{ fontWeight: "500", color: "#2d2f33", display: "block", marginBottom: "6px" }}
                >
                  Date Posted
                </label>
                <input value={postProject.deadline} onChange={(e)=>setPostProject({...postProject,deadline:e.target.value})}
                  type="date"
                  id="deadline"
                  style={{
                    width: "100%",
                    borderRadius: "8px",
                    border: "1px solid #d1d5db",
                    padding: "10px 12px",
                  }}
                />
              </div>

              {/* File Upload */}
              {/* <div className="mb-4">
                <label
                  htmlFor="fileUpload"
                  style={{ fontWeight: "500", color: "#2d2f33", display: "block", marginBottom: "6px" }}
                >
                  File Upload (optional)
                </label>
                <input onChange={(e)=>handleUpload(e)}
                  type="file"
                  id="fileUpload"
                  style={{
                    width: "100%",
                    borderRadius: "8px",
                    border: "1px solid #d1d5db",
                    padding: "10px 12px",
                  }}
                />
              </div> */}

              {/* Button */}
              <div className="text-center mt-4">
                <button onClick={handleSubmit}
                  type="button"
                  style={{
                    backgroundColor: "#9AAFC2",
                    border: "none",
                    padding: "10px 30px",
                    borderRadius: "8px",
                    fontWeight: "600",
                    color: "#fff",
                  }}
                >
                  Post Project
                </button>
              </div>
            </form>
          </Card>
        </Container>
      </div>

    </>
  )
}

export default PostProject