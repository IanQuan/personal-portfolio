import { useEffect } from 'react';
import { withRouter } from 'react-router-dom'; // if using React Router v5
// For React Router v6, use useLocation hook directly in your component without withRouter

const ScrollToTop = ({ history }) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, [history]);

  return null;
};

export default withRouter(ScrollToTop); // only necessary if using React Router v5
