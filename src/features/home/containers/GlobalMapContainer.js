import React from "react"
import { Link } from "react-router-dom"
import * as route from "../../../config/route.config"
import { enc } from "../../../network-sec/cypher"
import MapView from './Map';

import { getvendorfromapi } from '../../../action'
import { useSelector, useDispatch } from 'react-redux'
import * as Action from '../../../action'

const GlobalMapContainer = props => {
    const state = useSelector(state => state.vendorReducer)
    const { vendorListRaw, siteNameList, siteListRaw, selectedSite } = state

    const selectedSiteList = selectedSite === null
        ? siteNameList.map(v => v.id === 32 ? { ...v, latitude: "24.2522784", longitude: "120.5190892" } : v)
        : siteNameList
            .filter(d => d.id === selectedSite.id)
            .map(v => v.id === 32 ? { ...v, latitude: "24.2522784", longitude: "120.5190892" } : v)

    const clientLists = selectedSiteList.reduce((r, c) => {
        const index = r.reduce((r1, c1, i1) => c1.country === c.country && c1.city === c.city ? i1 : r1, -1)
        if (r.length === 0 || index === -1) {
            const sites = selectedSiteList.filter(site => site.country === c.country && site.city === c.city)
                .map(site => ({
                    ...site,
                    name: site.site_name,
                    lat: site.latitude.trim() === "" ? 0 : parseFloat(site.latitude),
                    lng: site.longitude.trim() === "" ? 0 : parseFloat(site.longitude)
                })) // provide the site format to use in Map
            const latList = sites.map(s => s.lat)
            const lngList = sites.map(s => s.lng)
            latList.sort()
            lngList.sort()

            const client = ({
                country: c.country,
                city: c.city,
                lat: latList[latList.length / 2] === 0 ? 0 : latList[0], //: latList[latList.length/2], //first get median and another mean
                lng: latList[latList.length / 2] === 0 ? 0 : lngList[0], //: lngList[lngList.length/2] , //first get median and another mean,
                sites
            })

            return [...r, client]
        } else return r
    }, [])

    if (selectedSiteList.length === 0) return null
    console.log(selectedSiteList)
    return (
        <div className="mt-3">
            <MapView clientLists={clientLists} siteNameList={selectedSiteList} siteListRawLength={siteListRaw.length} />
        </div>
    )
}

export default GlobalMapContainer;