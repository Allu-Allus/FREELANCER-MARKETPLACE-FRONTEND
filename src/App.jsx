
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
import FindProject from './freelancer/pages/FindProject'
import ViewProjectDetails from './freelancer/pages/ViewProjectDetails'
import FreelancerMyProjects from './freelancer/pages/FreelancerMyProjects'
import FreelancerMyProjectView from './freelancer/pages/FreelancerMyProjectView'
import FreelancerSettings from './freelancer/pages/FreelancerSettings'
import AdminDashboard from './admin/pages/AdminDashboard'
import AdminUserManagement from './admin/pages/AdminUserManagement'
import AdminProjectManagement from './admin/pages/AdminProjectManagement'
import Transaction from './admin/pages/Transaction'
import AdminSettings from './admin/pages/AdminSettings'
import FreelancersProfile from './freelancer/pages/FreelancersProfile'
import AdminProjectManagementModal from './admin/components/AdminProjectManagementModal'
import PageNOtFound from './common/pages/PageNOtFound'
import Auth from './common/pages/Auth'
import BrowseCategoryCommon from './common/pages/BrowseCategoryCommon'
  import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <>
      <Routes>
        {/* common path */}
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<PageNOtFound />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth register= {true}/>} />

        <Route path='/category' element={<BrowseCategoryCommon />} />

        {/* client path */}
        <Route path='/client-dashboard' element={<Dashboard />} />
        <Route path='/post-project' element={<PostProject />} />
        <Route path='/my-project' element={<MyProjects />} />
        <Route path='/client-payment' element={<CPayment />} />
        <Route path='/profile-settings' element={<ProfileSettings />} />
        <Route path='/browse-freelancer' element={<BrowseFreelancer />} />
        <Route path='/project-details' element={<ProjectDetails />} />

        {/* freelancer path */}
        <Route path='/freelancer-dashboard' element={<FreelancerDashboard />} />
        <Route path='/find-project' element={<FindProject />} />
        <Route path='/view-projectdetails' element={<ViewProjectDetails />} />
        <Route path='/freelancer-myprojects' element={<FreelancerMyProjects />} />
        <Route path='/freelancer-projectview' element={<FreelancerMyProjectView />} />
        <Route path='/freelancer-profile' element={<FreelancersProfile />} />
        <Route path='/freelancer-settings' element={<FreelancerSettings />} />

        {/* admin path */}
        <Route path='/admin-dashboard' element={<AdminDashboard />} />
        <Route path='/admin-usermanagement' element={<AdminUserManagement />} />
        <Route path='/admin-projectmanagement' element={<AdminProjectManagement />} />
        <Route path='/admin-transactions' element={<Transaction />} />
        <Route path='/admin-settings' element={<AdminSettings />} />

      </Routes>
      <Footer />
       <ToastContainer  position="top-center" autoClose={2000} theme="colored"


/>
    </>
  )
}

export default App
