import React from 'react';

import ArrowLeft from './ArrowLeft'

export const iconsList = {
    arrowLeft: (size) => <ArrowLeft size={size} />,
};

export function getIcon(type, size) {
    return iconsList[type](size)
}