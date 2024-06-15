import OurMenuCard from "./OurMenuCard"

const OurMenuList = () => {
    return (
        <div className="flex  gap-4  overflow-hidden  w-full">
            {
                new Array(10).fill(0).map((item, i) => (
                    <OurMenuCard key={i}/>
                ))
            }
        </div>
    )
}

export default OurMenuList