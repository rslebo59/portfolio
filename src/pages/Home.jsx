import OvalGreen from "../components/fx/OvalGreen.jsx";
import HomeFeatured from "../components/layouts/HomeFeatured.jsx";
import FeaturedProjects from "../components/layouts/FeaturedProjects.jsx";
import Group from "../components/layouts/Group.jsx";
import Contact from "../components/layouts/Contact.jsx";

export default function Home() {
  return (
    <div className="wrapper wrapper--xlg">
      <OvalGreen/>
      <HomeFeatured/>
      <FeaturedProjects/>
      <Group/>
      <Contact/>
    </div>
  )
}