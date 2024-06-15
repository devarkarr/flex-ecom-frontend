import MenuCard from "@/components/shared/home/MenuCard"
import MenuList from "./components/MenuList"


const Menu = () => {
    return (
        <div className="mb-10">
            <div className="flex mt-10 mb-8 md:my-10 gap-3 md:gap-5">
                <MenuList />
            </div>
            <div>
                <div className="mb-7 flex justify-between items-center">
                    <h1 className="text-2xl  tracking-tight text-body font-semibold">Appetizers</h1>
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 lg:gap-6">
                    {
                        new Array(9).fill(0).map((item, i) => (
                            <MenuCard key={i} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Menu