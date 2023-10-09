import Navbar from "@/components/common/Navbar";
import Sidebar from "@/components/common/Sidebar";
import Profile from "@/components/profile/Profile";

const ProfilePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Profile />
    </>
  )
}

module.exports = ProfilePage;