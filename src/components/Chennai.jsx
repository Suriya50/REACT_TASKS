


const Chennai = () => {
    return (
        <>
            <Navbar />
            <ITcompanys />

        </>
    )
}
export default Chennai;


export const Navbar = () => {


    return (
        <>
            <div className="chennai">
                <div style={{ textAlign: "center", marginBottom:"20px" }}>
                    <h1>Task2</h1>
                </div>
                <hr />

                <div style={{ backgroundColor: "RGB(152, 180, 212)", display: "flex", justifyContent: "space-between", padding: "5PX" }}>
                    <div style={{ color: "white", fontSize: "20px" }}>
                        <h2>Chennai</h2>
                    </div>


                    <div style={{ padding: "30PX", display: "flex", gap: "40px", marginRight: "50px", fontSize: "large", }}>

                        <a style={{ textDecoration: "none", color: "white" }} href="#">IT companies</a>
                        <a style={{ textDecoration: "none", color: "white" }} href="#roboes">Robitics</a>
                        <a style={{ textDecoration: "none", color: "white" }} href="#malayalam">Kerala</a>
                        <a style={{ textDecoration: "none", color: "white" }} href="#andhra">Karnataka</a>
                       
                    </div>

                </div>
            </div>
        </>
    )

}

export const ITcompanys = () => {


    return (
        <>
            <div className="first">
                <div className="companies">
                    <div>
                        <h2 className="one">IT companies</h2>
                    </div>
                    <div>
                        <div className="types" >


                            <ul>ZOHO</ul>
                            <ul>TCS</ul>
                            <ul>INFOSYS</ul>
                            <ul>ACCENTURE</ul>
                            <ul>HCL</ul>
                            <ul>CAPGEMINI</ul>
                            <ul>COGNIZANT etc....</ul>


                        </div>
                    </div>
                </div>
            </div>

            <div className="images">

                <h3>Company images</h3>
            </div>
            <div className="logo">
                <div className="one">
                    <img src="public/images/zoho.png" alt="images" />
                </div>
                <div className="one">
                    <img src="public/images/tcs2.png" alt="images" />
                </div>
                <div className="one">
                    <img src="public/images/cog.png" alt="images" />
                </div>
                <div className="one">
                    <img src="public/images/info.png" alt="images" />
                </div>

            </div>

            <Robitics />











        </>
    )

}

export const Robitics = () => {

    return (
        <>


<section id="roboes">
            <div className="parentrobo">
                <div className="robotics">

                    <h2>ROBOTICS</h2>
                </div>

                <div>
                    <p>Robotics is a branch of science and engineering that focuses on designing, building, and operating robots. It combines mechanical engineering, electronics, computer programming, and artificial intelligence to create machines that can perform tasks automatically or with minimal human help. Robots are used in many fields such as manufacturing, medicine, space exploration, defence, and everyday home activities. The main goal of robotics is to make machines that can work efficiently, safely, and accurately like humans—or even better.</p>
                </div>

                <div>

                    <div className="robo">
                        <img src="public/images/robotics.jpg" alt="images" />
                    </div>
                </div>
            </div>

</section>





        </>
    )

}



