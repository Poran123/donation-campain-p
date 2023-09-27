import blank from "../../assets/images/donation.svg"

const BlankDonation = () => {
    return (
        <div className='py-[50px]'>
            <div className="text-center lg:w-1/3 md:w-1/2 w-full m-auto">
                <img src={blank} className="w-full mb-3" alt="" />
                <h1 className="text-[30px] font-bold text-[#0B0B0B]">
                    No Donation Found
                </h1>
            </div>
        </div>
    )
}

export default BlankDonation