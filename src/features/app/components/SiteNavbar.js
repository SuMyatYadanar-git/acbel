import React from "react"
import { Link } from "react-router-dom"
import * as route from "../../../config/route.config"
import KmLink from '../../../kumocom/KmLink'

import AcbelLogo from '../../../assets/icons/Acbel_Logo'

const SiteNavbar = props => {
    const { match, location } = props
    const waring = 0
    const good = 14
    const bad = 35

    return (
        <div className="container-fluid px-0 pb-2 pt-3">
            <div className="d-flex">
                <div className="d-flex flex-column justify-content-center p-0">
                    <div className="px-3 py-2" style={{ backgroundColor: "#ffffff", borderRadius: 4, cursor: "pointer" }}>
                        <i className="fas fa-bars text-primary" />
                    </div>
                </div>
                <div className="d-flex flex-column justify-content-center px-4">
                    <a className="" style={{ borderRadius: 4, cursor: "pointer" }} href={`/${route.global}${location.search}`}>
                        <AcbelLogo width={40} height={40} />
                    </a>
                </div>
                <div className="d-flex flex-column justify-content-center" style={{ lineHeight: '1.3' }}>
                    <div style={{ color: "#2244aa", fontSize: 28 }}>{"Organic Farmer's Association"}</div>
                    <div className="" style={{ color: "gray", fontSize: 16 }}>{"Hualien City, Taiwan"}</div>
                </div>
            </div>

            <div className="d-flex flex-row flex-wrap align-items-baseline">
                <div className="py-1 d-flex flex-direction-row" style={{ overflowX: 'auto' }}>
                    <div className="pr-2"><KmLink text="Dashboard" to={`${match.url}/${route.dashboard}${location.search}`} currentLink={location.pathname + location.search} /></div>
                    <div className="pr-2"><KmLink text="Site Forecast" to={`${match.url}/${route.forecast}${location.search}`} currentLink={location.pathname + location.search} /></div>
                    <div className="pr-2"><KmLink text="Site Revenue" to={`${match.url}/${route.revenue}${location.search}`} currentLink={location.pathname + location.search} /></div>
                    <div className="pr-2"><KmLink text="Site Maintenance" to={`${match.url}/${route.maintenance}${location.search}`} currentLink={location.pathname + location.search} /></div>
                    <div className="pr-2"><KmLink text="Profile" to={`${match.url}/${route.profile}${location.search}`} currentLink={location.pathname + location.search} /></div>
                    <div className="pr-2"><KmLink text="Inverters" to={`${match.url}/${route.inverter}${location.search}`} currentLink={location.pathname + location.search} /></div>
                    <div className="pr-2"><KmLink text="Panels" to={`${match.url}/${route.panel}${location.search}`} currentLink={location.pathname + location.search} /></div>
                    <div className="pr-2"><KmLink text="Report" to={`${match.url}/${route.report}${location.search}`} currentLink={location.pathname + location.search} /></div>
                </div>
                <div style={{ flex: 1 }} />
                <div className="d-flex">
                    <div style={{ fontSize: 16, color: 'gray' }}>{"Alerts"}</div>
                    <div className="d-flex align-items-center px-3 mx-1" style={{ backgroundColor: '#FDEDB2', borderRadius: 40, fontSize: 1 }}><i className="fa fa-circle pr-1" style={{ color: 'orange', fontSize: 10 }} />{waring}</div>
                    <div className="d-flex align-items-center px-3 mx-1" style={{ backgroundColor: '#FBD2B3', borderRadius: 40, fontSize: 1 }}><i className="fa fa-circle pr-1" style={{ color: 'red', fontSize: 10 }} />{bad}</div>
                    <div className="d-flex align-items-center px-3 mx-1" style={{ backgroundColor: '#DCEF93', borderRadius: 40, fontSize: 1 }}><i className="fa fa-circle pr-1" style={{ color: 'green', fontSize: 10 }} />{good}</div>
                    <i className="fa fa-caret-down pt-1 pl-1" />
                </div>
            </div>
        </div>
    )
}

export default SiteNavbar