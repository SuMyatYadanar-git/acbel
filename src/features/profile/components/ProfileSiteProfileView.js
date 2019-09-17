import React from 'react'
import { withMedia } from 'react-media-query-hoc'
import { fsc } from '../../../helper/fontColorHelper'
import FourItemBox from '../../app/components/FourItemBox'

import moment from 'moment'

const ProfileSiteProfileView = props => {
    const { media,startDate,priceSetup,capacity } = props
    
    return (
        <div className="p-4 h-100" style={{ backgroundColor: '#FFFFFF', borderRadius: 4 }}>

            <div className='py-2' style={{ color: '#FF8902', fontSize: fsc(media, 14) }}>{"SITE PROFILE"}</div>

            <div className="d-flex pt-2 pb-4 flex-wrap">
                <div className="py-2">
                    <FourItemBox value={startDate} desc={"START DATE"} useNumberFormat={false} />
                    {/* "Apr 25, 2017" */}
                    {/* moment(d.dt_txt).format('YYYY-MM-DD') */}
                </div>
                <div className={`px-${media.mobile ? '3' : '5'} py-2`}>
                    <FourItemBox value={priceSetup} unit={'NT$'} desc={"PRICE SET-UP"} />
                </div>
                <div className="py-2">
                    <FourItemBox value={capacity} unit={"kW"} desc={"CAPACITY"} />
                </div>
            </div>

            <div className="d-flex">
                <img src={require('./panelpic1.jpg')} alt="panel" className="img rounded w-100" style={{ height: media.mobile ? 300 : 400 }} />
            </div>

            <div className="container-fluid p-1">
                <div className="row px-2">
                    {
                        // 8 => to 4
                        new Array(4).fill(null).map((v, k) =>
                            <div key={k} className="col-6 col-sm-3 p-1">
                                <img src={require('./panelpic1.jpg')} alt="panel" className="img rounded" width={'100%'} height={160} />
                            </div>)
                    }
                </div>
            </div>

        </div>
    )
}

export default withMedia(ProfileSiteProfileView)
