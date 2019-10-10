import React from "react"
// import querystring from "query-string"
import { withMedia } from "react-media-query-hoc"
import * as route from "../../../config/route.config"
import KmLink from '../../../kumocom/KmLink'
import AcbelLogo from '../../../assets/icons/Acbel_Logo'
import { fsc } from "../../../helper/fontColorHelper"
import Navbar from "./Navbar"
import KmButton from '../../../kumocom/KmButton'

const MaintenanceNavbar = props => {
    const { media, location,/* history,match, */ } = props
    return (
        // <Navbar {...props}>
        //     <div className={`d-flex flex-column justify-content-center ${media.mobile ? "pl-3 pr-1" : "px-4"}`} >
        //         <a className="" style={{ borderRadius: 4, cursor: "pointer" }} href={`/${route.global}${location.search}`}>
        //             <AcbelLogo width={fsc(media, 40)} height={fsc(media, 40)} />
        //         </a>
        //     </div>
        //     <div className="d-flex justify-content-center align-items-center pl-2">
        //         <div style={{ color: "#2244aa", fontSize: fsc(media, 28) }}>Maintenance Schedule</div>
        //         <div style={{ paddingLeft: fsc(media, 10) }}><KmLink text="List View" to={`/${route.maintenance}/${route.list}${location.search}`} currentLink={location.pathname + location.search} /></div>
        //         <div style={{ paddingLeft: fsc(media, 10) }}><KmLink text="Calendar View" to={`/${route.maintenance}/${route.calendar}${location.search}`} currentLink={location.pathname + location.search} /></div>
        //     </div>
        //     <div className="pl-4 pr-2">
        //         <KmButton 
        //         noMinWidth
        //         text="ADD NEW MAINTENANCE SCHEDULE"
        //         />
        //     </div>
        //     <div style={{ flex: 1 }} />
        // </Navbar>
        <Navbar {...props}>
            <div className={`d-flex flex-column justify-content-center ${!media.mobile ? "pl-3 pr-1" : "px-1"}`} >
                <a className="" style={{ borderRadius: 4, cursor: "pointer" }} href={`/${route.global}${location.search}`}>
                    <AcbelLogo width={!media.mobile && media.tablet ? fsc(media, 40) : fsc(media, 20)} height={fsc(media, 40)} />
                </a>
            </div>
            <div className="d-flex justify-content-center align-items-center pl-2">
                <div style={{ color: "#2244aa", fontSize: !media.mobile && media.tablet ? fsc(media, 28) : fsc(media, 12) }}>Maintenance Schedule</div>
                <div style={{ paddingLeft: !media.mobile && media.tablet ? fsc(media, 10) : fsc(media, 2) }}><KmLink style={{ fontSize: !media.mobile ? fsc(media, 15) : fsc(media, 10) }} text="List View" to={`/${route.maintenance}/${route.list}${location.search}`} currentLink={location.pathname + location.search} /></div>
                <div style={{ paddingLeft: !media.mobile && media.tablet ? fsc(media, 10) : fsc(media, 2) }}><KmLink style={{ fontSize: !media.mobile ? fsc(media, 15) : fsc(media, 10) }} text="Calendar View" to={`/${route.maintenance}/${route.calendar}${location.search}`} currentLink={location.pathname + location.search} /></div>
            </div>
            <div className={`${!media.mobile && media.tablet ? "pl-4 pr-2" : "pl-1 pr-1"}`}>
                <KmButton
                    noMinWidth='20'
                    style={{ width: !media.mobile && media.tablet ? 500 : 100 }}
                    text={!media.mobile && media.tablet ? "ADD NEW MAINTENANCE SCHEDULE" : "NewSchedule"}
                />
            </div>
            <div style={{ flex: 1 }} />
        </Navbar>
    )
}

export default withMedia(MaintenanceNavbar)