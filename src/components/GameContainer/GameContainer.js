import React from "react"
import { useNavigate } from "react-router-dom"
const GameContainer = (props) => {

    const navigate = useNavigate()

    const onLogout = () => {
        if(props.loggedIn) {
            localStorage.removeItem('user')
            props.setLoggedIn(false)
            navigate('/')
        }
    }

    const back = () => {
        navigate('/')    
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 p-3">
            <header className="max-w-6xl mx-auto mb-8">
                <div className="flex gap-4 overflow-x-auto pb-2">
                    <button onClick={onLogout} className="text-purple-300 hover:text-purple-400 font-medium">
                        Log out
                    </button>
                    <button onClick={back} className="text-purple-300 hover:text-purple-400 font-medium">
                        Back
                    </button>
                </div>
            </header>
            <div className="max-w-6xl mx-auto mb-8">
                {props.children}
            </div>
        </div>
    )
}

export default GameContainer