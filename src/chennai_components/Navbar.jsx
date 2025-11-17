import ITcompanies from "./ITcompanies";

const Navbar = () => {
    return (
        <>

<div>
    <h1>CHENNAI</h1>
</div>

            <div style={{ backgroundColor: "black", display: "flex", justifyContent: "space-between", padding: "5PX" }}>
                <div style={{ color: "white", fontSize: "20px" }}>
                    <h2>Navbar</h2>
                </div>


                <div style={{ padding: "30PX", display: "flex", gap: "20px", marginRight: "50px" }}>

                    <a style={{ textDecoration: "none", color: "white" }} href="#">IT companies</a>
                    <a style={{ textDecoration: "none", color: "white" }} href="#">Robitics</a>
                </div>
  
            </div>


<ITcompanies/>











        </>
    )

}
export default Navbar;