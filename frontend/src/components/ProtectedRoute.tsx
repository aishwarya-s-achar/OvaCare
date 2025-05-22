import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }: any) => {
  const user = localStorage.getItem('user'); // Check if user is in localStorage or any other state

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      }
    />
  );
};

export default ProtectedRoute;
