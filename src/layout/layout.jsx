const Layout = (props) => {
    return (
        <div className="flex flex-col min-h-screen gap-10 items-center justify-around">
            {props.children}
        </div>
    )
}

export default Layout;