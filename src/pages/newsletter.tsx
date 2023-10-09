import Newsletter from "@/components/newsletter/Newsletter";
import Navbar from "@/components/common/Navbar";
import Sidebar from "@/components/common/Sidebar";

const NewsletterPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Newsletter />
    </>
  );
}

module.exports = NewsletterPage;