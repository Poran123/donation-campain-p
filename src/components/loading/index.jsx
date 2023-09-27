import loading from '../../assets/images/loading.gif'

const Loading = () => {
    return (
        <div className='loading py-[100px]'>
           <div className="container">
                <img src={loading} className="m-auto w-[150px]" alt="" />
           </div>
        </div>
    )
}

export default Loading