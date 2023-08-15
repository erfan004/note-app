
type myProps ={
  children: JSX.Element[] | JSX.Element
}
const  Layout = (props: myProps)=>{
  return (
    <div>
      {props.children}
    </div>
  )
}

export default Layout
