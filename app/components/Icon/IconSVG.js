import React from 'react';
import SvgIcon from 'react-native-svg-icon';
import svgs from '../../assets/icons/svgs'; // point to your svgs.js wherever that may be
import PropTypes from 'prop-types'

const IconSVG = (props) => <SvgIcon {...props} svgs={svgs} />;

IconSVG.defaultProps = {
    fill: PropTypes.string, // Inoffensive, but probably inappropriate for most
    height: PropTypes.string, // iOS HIGs' recommended size for touchable icons
    width: PropTypes.string,
    viewBox: '0 0 100 100' // It's a nice canvas size to work with
};

export default IconSVG;