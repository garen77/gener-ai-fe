import { BounceLoader } from "react-spinners"

const Spinner = (props) => {
    return (
        <div className={'mainContainer'}>
        <div className={'titleContainer'}>
            <div>
                <div className='spinner-center'>
                    <BounceLoader loading={props.loading} size={50} color="#123abc" speedMultiplier={1.5} />
                </div>
            </div>
        </div>
    </div>
    )
}

export default Spinner;