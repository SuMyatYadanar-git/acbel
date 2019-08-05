import React from 'react'

const formatNumber = (num) => num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')


const FourItemBox = props => {
    const { value, unit, desc, active, icon } = props
    const data = formatNumber(value)
    return (
        <div className="d-flex align-items-center">
            <div className="d-flex">
                {icon}
                {
                    active !== undefined ?
                        <div style={{ background: 'white', borderRadius: '50%', width: 9, height: 9, paddingTop: 1, paddingLeft: 1, marginLeft: '-20%' }}>
                            <div style={{ borderRadius: '50%', width: 7, height: 7, background: active ? 'green' : 'grey' }} />
                        </div>
                        : null
                }
            </div>
            <div className={`${active === undefined ? 'pl-2' : ''}`}>
                <div className="d-flex align-items-baseline">
                    <div style={{ color: '#153784', fontSize: 20, fontWeight: 'bold' }}>
                        {unit === 'NT$' ? unit + data : data}
                    </div>
                    <div className="pl-1" style={{ fontSize: 13, fontWeight: 100 }}>{unit === 'NT$' ? null : unit}</div>
                </div>
                <div style={{ fontSize: 10, color: '#aaaaaa' }}>{desc}</div>
            </div>
        </div >
    )
}

export { FourItemBox }
