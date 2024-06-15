import MenuCard from "@/components/shared/home/MenuCard"

const PopularItem = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 lg:gap-6">
        {
            new Array(9).fill(0).map((item,i)=>(
                <MenuCard key={i}/>
            ))
        }
    </div>
  )
}

export default PopularItem