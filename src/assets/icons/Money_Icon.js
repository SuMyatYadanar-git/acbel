import React from 'react'

const Money_icon=props=>{
    const {width,height}=props
    const vw=width===undefined  ?35 :width
    const vh=height===undefined ?35 :height
    return(
        <svg 
width={vw}
height={vh}
viewBox="0 0 48 48" >   
   
   <g id="Style-Guide" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="A-Icons" transform="translate(-463.000000, -116.000000)">
            <g id="Group-6" transform="translate(447.000000, 100.000000)">
                <g id="Total-Acc-Revenue" transform="translate(16.000000, 16.000000)">
                    <g id="Group-2">
                        <circle id="Oval" fill="#0B3D92" cx="24" cy="24" r="24"></circle>
                        <g id="dollar-symbol" transform="translate(17.000000, 10.000000)" fill="#FFFFFF" fillRule="nonzero">
                            <path d="M14.7892401,17.6553457 C14.6501036,17.1810788 14.4812929,16.768313 14.2830333,16.4177852 C14.0848863,16.0669172 13.8010952,15.7246651 13.4310969,15.3898952 C13.0615491,15.0552953 12.7291081,14.7858242 12.434337,14.5809717 C12.1397348,14.3759492 11.735051,14.146723 11.2205107,13.8930098 C10.7064208,13.6393533 10.2990905,13.4505988 9.99925171,13.326463 C9.69901875,13.2024972 9.26471701,13.0325615 8.69662804,12.8167692 C8.19295515,12.6226865 7.81794548,12.4742903 7.57120488,12.3718641 C7.32474583,12.2693245 7.00063837,12.1237625 6.5987136,11.934838 C6.19695775,11.7461969 5.8968374,11.5788686 5.69852147,11.4333066 C5.50026186,11.2877445 5.2886573,11.1097598 5.06353889,10.8994091 C4.83842047,10.6890584 4.68036459,10.4651605 4.58920233,10.2278286 C4.49826531,9.99044011 4.45265602,9.73145537 4.45265602,9.45093107 C4.45265602,8.7174527 4.7740607,8.11848316 5.4170953,7.65470264 C6.0601862,7.19092212 6.89089455,6.95891849 7.90910774,6.95891849 C8.35900673,6.95891849 8.81768972,7.02087304 9.28358011,7.14506555 C9.7494705,7.26925806 10.1487488,7.40915177 10.4810209,7.56571029 C10.8135745,7.72226881 11.1269272,7.89492531 11.4217546,8.0836231 C11.7165257,8.27249095 11.9254275,8.41533217 12.0487978,8.5124302 C12.1720555,8.6095849 12.2501543,8.67426024 12.2819682,8.70668293 C12.4214988,8.81455073 12.5658156,8.85224494 12.7158758,8.8199923 C12.8765781,8.80922252 12.9999484,8.72278091 13.0858741,8.56112092 L14.3882725,6.19834564 C14.5168231,5.98266672 14.4902459,5.77764421 14.3079213,5.5833348 C14.2435053,5.51860278 14.1634356,5.44315767 14.0663048,5.35677274 C13.9701311,5.27038781 13.7610604,5.11399934 13.4392616,4.88732392 C13.1178006,4.66081854 12.7775328,4.45851682 12.4187398,4.28047543 C12.0595526,4.1026041 11.5932117,3.92178524 11.0197735,3.73847233 C10.4466732,3.55487601 9.85437185,3.43091023 9.24332006,3.3662349 L9.24332006,0.517856131 C9.24332006,0.366909231 9.19517693,0.242773403 9.09900328,0.145618695 C9.0026044,0.0486907198 8.87929041,0 8.729005,0 L6.55856617,0 C6.41926077,0 6.29870586,0.051184773 6.19690144,0.153724368 C6.09509701,0.256263963 6.0441948,0.37756564 6.0441948,0.517856131 L6.0441948,3.43085355 C4.36149376,3.75440026 2.99501709,4.4772789 1.94470848,5.59931941 C0.894512492,6.72141661 0.369217419,8.02665666 0.369217419,9.51566308 C0.369217419,9.95796074 0.414939318,10.3787188 0.50604527,10.7777107 C0.597038607,11.1770426 0.709654123,11.5357895 0.843666587,11.854008 C0.977566435,12.1724532 1.16788666,12.4852302 1.41434571,12.7927923 C1.66080477,13.100241 1.89397519,13.3646106 2.11363176,13.5856744 C2.33340094,13.8066816 2.62012004,14.0360211 2.97367645,14.2732962 C3.3274581,14.5107981 3.63022491,14.7024434 3.88214582,14.8480054 C4.13412303,14.993114 4.46898527,15.1608957 4.88684514,15.3492534 C5.30481763,15.538178 5.63449955,15.6809625 5.87566568,15.7782873 C6.11683181,15.8752719 6.44634481,16.0102909 6.86448622,16.1825506 C7.44316104,16.4091127 7.87194462,16.58449 8.15055541,16.7086258 C8.42939142,16.8327616 8.78294783,17.0053614 9.21190033,17.2265386 C9.64045868,17.447489 9.95381135,17.6498474 10.1522399,17.8333304 C10.3504995,18.0168134 10.5299523,18.2433754 10.6908236,18.5130166 C10.8516949,18.7826577 10.9322713,19.0685669 10.9322713,19.3708008 C10.9322713,20.2231435 10.602702,20.8811201 9.94339442,21.3446738 C9.28436842,21.8087378 8.52049738,22.0406847 7.65251329,22.0406847 C7.2563319,22.0406847 6.85947483,21.9977757 6.46306821,21.9115041 C5.06978905,21.6306397 3.76767215,20.9563384 2.55660489,19.8883168 L2.52445316,19.8559508 C2.42794166,19.7375967 2.29927844,19.6889626 2.13868871,19.7106722 C1.96717528,19.7322118 1.84386129,19.7970005 1.76891566,19.905095 L0.11301712,22.0896589 C-0.0477978364,22.3053945 -0.0369304391,22.526515 0.145225158,22.753077 C0.198886451,22.8178657 0.292638868,22.9151905 0.426538716,23.0444278 C0.560776411,23.1741752 0.809994547,23.3761368 1.17419313,23.6517864 C1.53850432,23.9270392 1.93507986,24.1856271 2.36386343,24.428684 C2.7925907,24.671344 3.33641103,24.9112832 3.99566226,25.1487284 C4.65491349,25.3857769 5.3379829,25.5529351 6.04537726,25.6499764 L6.04537726,28.4820305 C6.04537726,28.622491 6.09633578,28.743736 6.1980839,28.8463323 C6.29994463,28.9489853 6.42044324,29 6.55974863,29 L8.73018747,29 C8.88047287,29 9.00378686,28.951536 9.10012944,28.8545514 C9.19647201,28.7575667 9.24444622,28.6334309 9.24444622,28.4820872 L9.24444622,25.6500331 C10.9488257,25.3695655 12.3340529,24.6331963 13.4002966,23.4409822 C14.4666529,22.2487681 15,20.8273279 15,19.1767748 C14.9994369,18.6374358 14.9298968,18.1303495 14.7892401,17.6553457 Z" id="Path"></path>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>)}
export default Money_icon;