import Reactfrom 'react';
import PropTypes from 'prop-types';
import { Wrapper, StyledAverage, StyledName, StyledAttendance } from './StudentsListItem.styles';
import { UserShape } from 'types';

const StudentsListItem = ({ userData: { average, name, attendance = '0%' } }) => {

  return (
    <Wrapper>
      <StyledAverage average={average}>{average}</StyledAverage>
      <div>
        <StyledName>{name}</StyledName>
        <StyledAttendance>attendance: {attendance}</StyledAttendance>
      </div>
    </Wrapper>
  );
};

StudentsListItem.propTypes = {
  userData: PropTypes.shape(UserShape),
};

export default StudentsListItem;
