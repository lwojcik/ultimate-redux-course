import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadBugs, getUnresolvedBugs, resolveBug } from '../store/bugs';

const BugsList = () => {
  const dispatch = useDispatch();

  const bugs = useSelector(getUnresolvedBugs);

  useEffect(() => {
    dispatch(loadBugs());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ul>
      {bugs.map(bug => (
        <li key={bug.id}>
          {bug.description}
          <button onClick={() => dispatch(resolveBug())}>
            Resolve
          </button>
        </li>
      ))}
    </ul>
  );
}

export default BugsList;