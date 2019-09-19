import React, { useState } from "react"
import { Route, Link, Switch, Redirect } from "react-router-dom"
import * as route from "../../../config/route.config"
import { withMedia } from "react-media-query-hoc"
import { fsc } from "../../../helper/fontColorHelper"
import GlobalMapContainer from "./GlobalMapContainer"
import GlobalListContainer from "./GlobalListContainer"
import GlobalNavbar from "../../app/components/GlobalNavbar"
import { enc } from "../../../network-sec/cypher"
import HomeStatusView from "../components/HomeStatusView";
import LeftSidebar from "../../app/components/LeftSidebar";
import HomefilterView from "../components/HomeFilterView";

import { useSelector, useDispatch } from 'react-redux'
import * as Action from '../../../action'

import { useCookies } from 'react-cookie';

const GlobalContainer = props => {

    const { match, location, media } = props
    const [cookies] = useCookies(['user']);
    const queryData = {
        siteId: 1,
        siteName: "Organic Farmer's Association",
        city: "Hualien City",
        country: "Taiwan"
    }

    const queryDataEnc = enc(queryData)

    const vendorState = useSelector(state => state.vendorReducer)
    const globalHomeStatusDataState = useSelector(state => state.globalReducer)

    const {
        vendorNameList,
        siteNameList,
        countryNameList,
        cityNameList,
        selectedVendor,
        selectedCountry,
        selectedCity,
        selectedSite,
    } = vendorState

    const vendor_id = selectedVendor !== null ? selectedVendor.id : cookies.user === undefined ? undefined : cookies.user.vendor_id
    const site_id = selectedSite !== null ? selectedSite.hid : null

    vendor_id === undefined && props.history.replace(`/${route.login}`)
    const dispatch = useDispatch()

    // if (selectedVendor === null) {
    if (vendorState.isLoading  /* || globalHomeStatusDataState.isLoading */) {
        dispatch(Action.getvendorfromapi(vendor_id))
        dispatch(Action.getSiteListFromApi({ vendor_id, site_id }))
        dispatch(Action.getGlobalHomeStatusData({ vendor_id, site_id }))
        // return null
    }
    // }

    /*
    if (selectedVendor === null) {
        if (vendorState.isLoading || globalHomeStatusDataState.isLoading) {
            dispatch(Action.getvendorfromapi(vendor_id))
            dispatch(Action.getSiteListFromApi(vendor_id))
            dispatch(Action.getGlobalHomeStatusData(vendor_id))
            // return null
        }
    } else {
        if (vendorState.isLoading || globalHomeStatusDataState.isLoading) {
            dispatch(Action.getvendorfromapi(vendor_id))
            dispatch(Action.getSiteListFromApi(vendor_id))
            dispatch(Action.getGlobalHomeStatusData(bodyData))
            // return null
        }
    }*/

    if (globalHomeStatusDataState.globalHomeStatusData.length === 0) return null

    return (
        <div className={`container-fluid py-2 ${media.mobile ? "px-1" : "px-4"}`}>
            <GlobalNavbar {...props} />
            <div className="d-flex flex-row flex-wrap flex-md-nowrap">
                <div className="flex-grow-1">
                    <LeftSidebar
                        online={218}
                        offline={12}
                        siteChoose={true}
                        active={true}
                        efficiency={100}
                        capacity={170.00}
                    />
                </div>
                <div className="w-100 pb-2">
                    <HomeStatusView data={globalHomeStatusDataState.globalHomeStatusData} />
                    <HomefilterView
                        vendorNameList={vendorNameList}
                        siteNameList={siteNameList}
                        countryNameList={countryNameList}
                        cityNameList={cityNameList}
                        selectedVendor={selectedVendor}
                        selectedCountry={selectedCountry}
                        selectedCity={selectedCity}
                        selectedSite={selectedSite}
                        onVendorChange={d => dispatch(Action.globalHandleSelectFilter({ selectedVendor: d }))}
                        onCountryChange={d => dispatch(Action.globalHandleSelectFilter({ selectedCountry: d }))}
                        onCityChange={d => dispatch(Action.globalHandleSelectFilter({ selectedCity: d }))}
                        onSiteChange={d => dispatch(Action.globalHandleSelectFilter({ selectedSite: d }))}
                    />
                    <Switch>
                        <Route path={`${match.path}/:pageName`} component={GlobalPage} />
                        <Redirect to={`${match.path}/${route.map}`} />
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default withMedia(GlobalContainer)

const GlobalPage = props => {

    const pageName = props.match.params.pageName

    switch (pageName) {
        case route.map:
            return <GlobalMapContainer {...props} />
        case route.list:
            return <GlobalListContainer {...props} />
        default:
            return <GlobalMapContainer {...props} />
    }
}
