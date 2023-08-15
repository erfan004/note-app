type myProps = {
  children: JSX.Element[] | JSX.Element;
};
const Layout = (props: myProps) => {
  return (
    <div>
      {props.children}
      <a href="#">
        <div className="text-5xl  bg-zinc-600 fixed hover:bg-zinc-700 hover:text-white duration-300 pt-0 bottom-3 text-gray-400  px-3 py-2 right-5 rounded-full">
          +
        </div>
      </a>
    </div>
  );
};

export default Layout;
