import { useEffect, useState } from 'react';
import axios from 'axios';

export const useStudents = ({ groupId = '' } = {}) => {
  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    axios
      .get('/groups')
      .then(({ data }) => setGroups(.data.groups))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (!groupId) return;
    (async () => {
      try {
        const result = await axios.get(`/students/${groupId}`);
        setStudents(result.data.students);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [groupId]);

  const findStudents = async (searchPhrase) => {
    try {
      const { data } = await axios.post(`/students/search`, {
        searchPhrase,
      });
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  return {
    students,
    groups,
    findStudents,
  };
};
