import { useEffect, useState } from 'react';
import axios from 'axios';

export const useStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get('/groups')
      .then(({ data }) => setGroups(data.groups))
      .catch((err) => console.log(err));
  }, []);
};
