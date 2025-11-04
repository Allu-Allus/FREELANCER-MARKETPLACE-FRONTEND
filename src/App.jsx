
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './common/components/Footer'
import Home from './common/pages/Home'
import Contact from './common/pages/Contact'
import Dashboard from './client/pages/Dashboard'
import PostProject from './client/pages/PostProject'
import MyProjects from './client/pages/MyProjects'
import CPayment from './client/pages/CPayment'
import ProfileSettings from './client/pages/ProfileSettings'
import BrowseFreelancer from './client/pages/BrowseFreelancer'
import FreelancerDashboard from './freelancer/pages/FreelancerDashboard'
import ProjectDetails from './client/pages/ProjectDetails'

function App() {

  return (
    <>
      <Routes>
        {/* common path */}
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        {/* client path */}
        <Route path='/client-dashboard' element={<Dashboard />} />
        <Route path='/post-project' element={<PostProject/>}/>
        <Route path='/my-project' element={<MyProjects/>}/>
        <Route path='/client-payment' element={<CPayment/>}/>
        <Route path='/profile-settings' element={<ProfileSettings/>}/>
        <Route path='/browse-freelancer' element={<BrowseFreelancer/>}/>
        <Route path='/project-details' element={<ProjectDetails/>}/>

        {/* freelancer path */}
        <Route path='/freelancer-dashboard' element={<FreelancerDashboard/>}/>

        {/* admin path */}
      </Routes>
      <Footer />
    </>
  )
}

export default App
