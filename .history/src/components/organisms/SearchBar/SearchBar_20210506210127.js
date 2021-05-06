import React, { useState, useEffect } from 'react';
import { Input } from 'components/atoms/Input/Input';
import debounce from 'lodash.debounce';
import { SearchBarWrapper, StatusInfo } from './SearchBar.styles';
import { useStudents } from 'hooks/useStudents';

export const SearchBar = () => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [matchingStudents, setMatchingStudents] = useState('');
  const { findStudents } = useStudents();

  const getMatchingStudents = debounce(async (e) => {
    const { students } = await findStudents(searchPhrase);
    setMatchingStudents(students);
  }, 500);

  useEffect(() => {
    if (!searchPhrase) return;
    getMatchingStudents(searchPhrase);
  }, [searchPhrase, getMatchingStudents]);

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <Input />
    </SearchBarWrapper>
  );
};
