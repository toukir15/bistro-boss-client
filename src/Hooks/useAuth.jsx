import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
// console.log(object);
const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export default useAuth;
 