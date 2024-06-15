import OurMenuList from "@/components/shared/home/OurMenuList"
import Carousel from "./components/Carousel"
import FeatureList from "./components/FeatureList"
import PopularItem from "./components/PopularItem"

const Home = () => {
  return (
    <div>
      <Carousel />
      <div className="mb-10">
        <div className="mb-7 flex justify-between items-center">
          <h1 className="text-2xl  tracking-tight font-semibold">Our Menu</h1>
          <button className="button text-sm">View All</button>
        </div>
        <OurMenuList />
      </div>
      <div className="mb-10">
        <div className="mb-7 flex justify-between items-center">
          <h1 className="text-2xl  tracking-tight font-semibold">Feature Items</h1>
        </div>
        <FeatureList />
      </div>
      <div className="mb-10">
        <div className="mb-7 flex justify-between items-center">
          <h1 className="text-2xl  tracking-tight font-semibold">Most Popular Items</h1>
        </div>
        <PopularItem/>
      </div>
    </div>
  )
}

export default Home