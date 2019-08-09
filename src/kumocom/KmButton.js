import React from 'react'
import {withMedia} from 'react-media-query-hoc'
import {fsc} from '../helper/fontColorHelper'

const KmButton = props => {
    const { text, type, onClick, icon, style, className, iconPlace ,media} = props
    const defaultStyle = { background: '#006CF7', padding: 8, }
    const userStyle = style === undefined ? {} : style

    return (
        <div style={{ minWidth: 200 }}>
        <button
            onClick={onClick}
            type={type === undefined ? "button" : type}
            className={`btn btn-block ${className} text-center`}
            style={{ ...defaultStyle, ...userStyle }}>
            {
                iconPlace !== undefined || iconPlace ?
                    <div className="d-flex justify-content-center"> <span style={{ color: '#ffffff', fontSize: fsc(media,13), fontWeight: 'bold' }}>{text}</span><span>{icon} </span></div> :
                    <div className="d-flex justify-content-center"> <span >{icon}</span><span style={{ color: '#ffffff', fontSize:fsc(media,15), fontWeight: 'bold' }}>{text} </span></div>
            }
        </button>
        </div>
    )
}

export default withMedia(KmButton);