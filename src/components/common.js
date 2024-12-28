import { BounceLoader } from "react-spinners"

const Spinner = (props) => {
    return (
        <>


            <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500">
                <div className='spinner-center'>
                    <BounceLoader loading={props.loading} size={50} color="#123abc" speedMultiplier={1.5} />
                </div>
            </div>
        </>
    )
}


export default Spinner;