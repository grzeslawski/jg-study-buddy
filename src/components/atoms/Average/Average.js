import React from 'react';
import { StyledAverage } from './Average.styles';

const Average = (props) => <StyledAverage average={props.average}>{props.average}</StyledAverage>;

export default Average;
