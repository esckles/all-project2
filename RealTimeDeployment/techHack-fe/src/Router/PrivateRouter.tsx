import { Navigate } from "react-router-dom";
import { FC, useContext } from "react";
import { GlobalContext } from "../global/globalProvider";

const PrivateRoute: FC<any> = ({ children }) => {
  const { user }: any = useContext(GlobalContext);
  return <div>{user ? children : <Navigate to={"/auth/"} />}</div>;
};

export default PrivateRoute;
