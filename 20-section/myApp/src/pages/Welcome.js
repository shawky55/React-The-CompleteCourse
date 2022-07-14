import { Route, Switch, Redirect } from 'react-router-dom';
const Welcome = () => {
  return (
    <>
      <Switch>
        {/* <Route path="/" exact>
          <Redirect to="/welcome"></Redirect>
        </Route> */}
        <Route path="/welcome" exact>
          <h1>Welcome page 🙋‍♂️</h1>
        </Route>
        <Route path="/welcome/newuser">
          <h1>Welcome new user 🙋‍♂️</h1>
        </Route>
      </Switch>
    </>
  );
};

export default Welcome;
