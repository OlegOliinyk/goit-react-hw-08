import Layout from "../../../../temp_2/goit-react-hw-08/src/components/Layout/Layout";
import AppBar from "../AppBar/AppBar";
import { Toaster } from "react-hot-toast";

const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      {children}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Layout;
