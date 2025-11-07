import '../App.css';
import LeftPanel from '../components/login/LeftPanel';
import RightPanel from '../components/login/RightPanel';

function Login() {
  return (
    <div className="d-flex vh-100">
      <div className="col-7 p-0">
        <LeftPanel />
      </div>
      <div className="col-5 d-flex align-items-center justify-content-center p-0">
        <RightPanel />
      </div>
    </div>
  );
}

export default Login;