import React from 'react'
import { withMedia } from 'react-media-query-hoc'
import { fsc } from '../helper/fontColorHelper'

const KmToggleButton = (props) => {
    const { text, btnNumber, selected, onClick, media,style, className } = props
    const defaultStyle = {
        outline: 'none',
        boxShadow: 'none',
        border: 'none',
        borderRadius: 4,
        border: `1px solid ${selected ? "#416AAC" : "#88A2CD"}`,
        color: selected ? "#416AAC" : "#88A2CD",
        opacity: selected ? 1 : 0.6,
        fontSize: fsc(media, 13),
    }
    const userStyle = style === undefined ? {} : style
    return (
        <button
            onClick={() => onClick(btnNumber)}
            type="button"
            className={`btn px-2 py-1 ${className}`}
            style={{ ...defaultStyle, ...userStyle }}
        >
            <b>{text}</b>
        </button>
    )
}

export default withMedia(KmToggleButton)