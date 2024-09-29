import React, {useState} from 'react';

// router
import { useNavigate } from 'react-router-dom';

// styling
import './menu.scss';

const Menu = props => {
    // conditionally render dropdown affect based on this boolean
    const [openMenu, setOpenMenu] = useState(false);
    const navigate = useNavigate();

    // parameter num corresponds to .open-# classes
    // is assigned when Menu clicked triggering animated dropdown
    const setClassNames = num => {
        const classArr = ["m-item"];
        if (openMenu) classArr.push(`open-${num}`)
        return classArr.join(' ')
    }

    // takes route string as parameter
    const pushToRoute = route => {
        navigate(route);
        setOpenMenu(false);
    };

    return (
        <div className="Menu">
            <div className={"m-item m-logo"}
                onClick={() => setOpenMenu(!openMenu)}>
                Menu
            </div>
            <div className={setClassNames(1)}
                onClick={() => pushToRoute("/")}>
                Home
            </div>
            <div className={setClassNames(3)}
                onClick={() => pushToRoute("/about")}>
                About
            </div>
        </div>
  );
}

export default Menu;