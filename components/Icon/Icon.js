import React from 'react';
import { Image } from 'react-native';
import personFullIcon from '../../assets/icons/personFull.png';
import calendarIcon from '../../assets/icons/calendar.png';
import cautionIcon from '../../assets/icons/caution.png';
import checkIcon from '../../assets/icons/check.png';
import closeIcon from '../../assets/icons/close.png';
import dollarIcon from '../../assets/icons/dollarSign.png';
import keyIcon from '../../assets/icons/key.png';
import locationIcon from '../../assets/icons/location.png';
import mailIcon from '../../assets/icons/mail.png';
import personIcon from '../../assets/icons/person.png';
import phoneIcon from '../../assets/icons/phone.png';
import plusIcon from '../../assets/icons/plus.png';
import searchIcon from '../../assets/icons/search.png';
import shirtIcon from '../../assets/icons/shirt.png';
import starIcon from '../../assets/icons/star.png';
import ball1Icon from '../../assets/icons/tennisBall.png';
import ball2Icon from '../../assets/icons/tennisBall2.png';
import tickerIcon from '../../assets/icons/ticket.png';

export const TickerIcon = ({ style }) => (
    <Image
        style={[{width: 22, height: 22}, style ? style : {}]}
        source={tickerIcon}
    />
);
export const Ball2Icon = ({ style }) => (
    <Image
        style={[{width: 22, height: 22}, style ? style : {}]}
        source={ball2Icon}
    />
);
export const Ball1Icon = ({ style }) => (
    <Image
        style={[{width: 22, height: 22}, style ? style : {}]}
        source={ball1Icon}
    />
);
export const StarIcon = ({ style }) => (
    <Image
        style={[{width: 22, height: 22}, style ? style : {}]}
        source={starIcon}
    />
);
export const ShirtIcon = ({ style }) => (
    <Image
        style={[{width: 22, height: 22}, style ? style : {}]}
        source={shirtIcon}
    />
);
export const PlusIcon = ({ style }) => (
    <Image
        style={[{width: 22, height: 22}, style ? style : {}]}
        source={plusIcon}
    />
);

export const PhoneIcon = ({ style }) => (
    <Image
        style={[{width: 22, height: 22}, style ? style : {}]}
        source={phoneIcon}
    />
);
export const PersonIcon = ({ style }) => (
    <Image
        style={[{width: 20, height: 25}, style ? style : {}]}
        source={personIcon}
    />
);
export const MailIcon = ({ style }) => (
    <Image
        style={[{width: 22, height: 25}, style ? style : {}]}
        source={mailIcon}
    />
);
export const LocationIcon = ({ style }) => (
    <Image
        style={[{width: 22, height: 22}, style ? style : {}]}
        source={locationIcon}
    />
);
export const KeyIcon = ({ style }) => (
    <Image
        style={[{width: 22, height: 22}, style ? style : {}]}
        source={keyIcon}
    />
);
export const DollarIcon = ({ style }) => (
    <Image
        style={[{width: 22, height: 22}, style ? style : {}]}
        source={dollarIcon}
    />
);
export const CheckIcon = ({ style }) => (
    <Image
        style={[{width: 20, height: 25}, style ? style : {}]}
        source={checkIcon}
    />
);
export const CautionIcon = ({ style }) => (
    <Image
        style={[{width: 22, height: 22}, style ? style : {}]}
        source={cautionIcon}
    />
);
export const CalendarIcon = ({ style }) => (
    <Image
        style={[{width: 22, height: 22}, style ? style : {}]}
        source={calendarIcon}
    />
);

export const PersonFullIcon = ({ style }) => (
    <Image
        style={[{width: 22, height: 22}, style ? style : {}]}
        source={personFullIcon}
    />
);

export const SearchIcon = ({ style }) => (
    <Image
        style={[{width: 27, height: 27}, style ? style : {}]}
        source={searchIcon}
    />
);

export const CloseIcon = ({ style, type }) => (
    <Image
        style={[{width: 20, height: 20}, style ? style : {}]}
        source={closeIcon}
    />
);