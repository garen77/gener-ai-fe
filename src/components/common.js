import { BounceLoader } from "react-spinners"

/*
            <div className={'mainContainer'}>
                <div className={'titleContainer'}>
                    <div>
                        <div className='spinner-center'>
                            <BounceLoader loading={props.loading} size={50} color="#123abc" speedMultiplier={1.5} />
                        </div>
                    </div>
                </div>
            </div>
*/
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