import FeatureCard from "./FeatureCard"

const FeatureList = () => {
  return (
    <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-7">
      {
        new Array(10).fill(0).map((item,i)=>(<FeatureCard key={i}/>))
      }
    </div>
  )
}

export default FeatureList