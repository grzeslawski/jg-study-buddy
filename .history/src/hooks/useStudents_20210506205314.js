import { useEffect, useState } from 'react';
import axios from 'axios';

export const useStudents = ({ groupId = '' } = {}) => {
  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get('/groups');
        setGroups(result.data.groups);
      } catch (e) {
        console.log(e);
      }
    })();
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
};
