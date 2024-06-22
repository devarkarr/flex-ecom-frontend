import { DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { MdHome } from "react-icons/md"

const AddAddress = () => {
    return (
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Address</DialogTitle>
            </DialogHeader>
            <div>
                <form>
                    <div>
                        <label htmlFor="" className=" font-bold">Apartment & Flat No</label>
                        <Textarea placeholder="335, Gulshan 2" className="mt-2" />
                    </div>
                    <div className="mt-3 lg:mt-4">
                        <label htmlFor="" className=" font-bold">Add Label</label>
                        <ul className="flex gap-2 mt-2">
                            <li className="py-1.5 flex text-gray-600 items-center gap-1 px-3 border border-body rounded-lg">
                                <MdHome size={20} />
                                <h1 className="text-sm font-bold">Home</h1>
                            </li>
                            <li className="py-1.5 flex text-gray-600 items-center gap-1 px-3 border  rounded-lg">
                                <MdHome size={20} />
                                <h1 className="text-sm font-bold">Home</h1>
                            </li>
                        </ul>
                    </div>
                    <button className="bg-body mt-5 text-center text-white py-1.5 lg:py-2 font-bold px-4 w-full  rounded-full">Confirm Location</button>
                </form>
            </div>
        </DialogContent>
    )
}

export default AddAddress