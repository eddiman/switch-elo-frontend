

const size = {
    mobileS: '320px',
        mobileM: '375px',
        mobileL: '425px',
        tablet: '768px',
        laptop: '1024px',
        laptopL: '1440px',
        desktop: '2560px'
};
let constants = {
      device : {
        mobileS: `(max-width: ${size.mobileS})`,
        mobileM: `(max-width: ${size.mobileM})`,
        mobileL: `(max-width: ${size.mobileL})`,
        tablet: `(max-width: ${size.tablet})`,
        laptop: `(max-width: ${size.laptop})`,
        laptopL: `(max-width: ${size.laptopL})`,
        desktop: `(max-width: ${size.desktop})`,
        desktopL: `(max-width: ${size.desktop})`
    },
    
    cardRadius: "18px",
    boxShadow: "0 2px 10px 0 rgba(0,0,0,0.15), 0 2px 10px 0 rgba(0,0,0,0.1)",
    boxShadowHover: "0 9px 10px 1px rgba(0,0,0,0.2), 0 9px 10px 0 rgba(0,0,0,0.1)",
};

export default constants;