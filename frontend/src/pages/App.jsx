
import '../css/App.css';
import Headers from '../components/Headers.jsx';
import QuoteCard from '../components/QuoteCard.jsx';
import ToolsStack from '../components/ToolsStack.jsx';
import RadialSocialMenu from '../components/RadialSocialMenu.jsx';
import ProjectGrid from '../components/ProjectGrid.jsx';
import SocialVideoCarousel from '../components/SocialVideoCarousel.jsx';
import ProductShowcase from '../components/ProductShowcase.jsx';
import GithubContributions from '../components/GithubContributions.jsx';





function App() {

  return (
    <>
      {/* Place your testing component here. */}
      <Headers />
      <QuoteCard />
      <ToolsStack />

       <GithubContributions />
      <SocialVideoCarousel />
       <ProjectGrid preview/>
       <ProductShowcase preview/>
      <RadialSocialMenu />
    </>
  )
}

export default App
