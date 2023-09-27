import error from "../../assets/images/failed.svg"
const Failed = () => {
    return (
        <div className="error pb-[40px]">
            <div className="container">
                <img src={error} className="md:w-1/4 mx-auto" alt="" />
                <h2 className="text-center mt-5 text-3xl font-bold">Nothing Here!!</h2>
            </div>
        </div>
    )
}

export default Failed