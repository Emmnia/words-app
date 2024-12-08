import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceGrinBeamSweat } from '@fortawesome/free-regular-svg-icons'
import { HelmetProvider, Helmet } from "react-helmet-async"
import classes from './NotFound.module.css'

export const NotFound = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <link rel="icon" type="image/svg+xml" href="/assets/images/owl_green.png" />
                <title>Duowlingo</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link href="https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,100..900;1,100..900&display=swap"
                    rel="stylesheet" />
            </Helmet>
            <div className={classes.notfound}>
                <div className={classes.maincontent}>
                    <img className={classes.image} src="/assets/images/owl_green.png" />
                    <h1 className={classes.heading}>Got you!</h1>
                </div>
                <div className={classes.text}>
                    <p>Just kidding. There's no such page here</p>
                    <NavLink className={classes.link} to='/'>Back home, to Peaceful Owl</NavLink> <FontAwesomeIcon icon={faFaceGrinBeamSweat} />
                </div>
            </div >
        </HelmetProvider>
    )
}