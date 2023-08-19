import {Link} from 'react-router-dom'
const Layout = ({children}: {children : React.ReactNode}) => {
  return (
    <div>
      {children}
      <Link to={'/add-notes'}>
        <div className="text-5xl  bg-zinc-600 fixed hover:bg-zinc-700 hover:text-white duration-300 pt-0 bottom-3 text-gray-400  px-3 py-2 right-5 rounded-full">
          +
        </div>
      </Link>
    </div>
  );
};

export default Layout;
