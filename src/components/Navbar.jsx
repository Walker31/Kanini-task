import Button from "@mui/material/Button";
import Logo from '/kanini_logo.png';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <nav className="bg-indigo-200 flex items-center justify-between px-6 py-3">
            <div className="flex items-center space-x-2">
                <img src={Logo} alt="Kanini" width={40} height={40} />
            </div>
            <div className="flex space-x-4">
                <Button variant="text" className="!text-gray-800" onClick={() => navigate('/')}>Mortgage</Button>
                <Button variant="text" className="!text-gray-800" onClick={() => navigate('/product')}>Products</Button>
                <Button variant="text" className="!text-gray-800" onClick={() => navigate('/multi')}>MultiStep</Button>
            </div>
        </nav>
    );
};

export default Navbar;
