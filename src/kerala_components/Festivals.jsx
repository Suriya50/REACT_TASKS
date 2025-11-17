import Tourism from "./Tourism";

const Festivals = () => {
    return (
        <>
            <div>
                <h1>KERALA</h1>
            </div>

            <div>
                <h2>Kerala festivals</h2>
            </div>

            <div>
                <p>Kerala is a land of diverse and colourful festivals that showcase its rich cultural heritage and deep-rooted traditions. Onam, the biggest festival of the state, is celebrated with great enthusiasm through flower carpets (Pookalam), the grand Vallam Kali snake boat races, traditional Onasadya feast, and folk dances like Thiruvathira. Vishu, marking the Malayalam New Year, is observed with the auspicious Vishu Kani and fireworks. Thrissur Pooram, famous for its majestic procession of caparisoned elephants, traditional percussion (Chenda Melam), and spectacular fireworks, attracts thousands of visitors every year. Temple festivals like Attukal Pongala, where millions of women gather to offer pongala, highlight the devotion and unity of the people. Theyyam, a ritual dance form in North Kerala, is another unique festival celebrated with vibrant costumes and spiritual performances. Along with these, Kerala also celebrates Christmas, Easter, Eid, and Muharram with equal joy, reflecting the harmony among different communities. Together, these festivals make Kerala a lively and culturally rich state.</p>
            </div>
            <div style={{display:"grid", alignItems:"center", textAlign:"center"}}>
                <center>
                <button style={{borderRadius: "10PX", width: "140px", height: "40px",marginTop:"10px"}}>Onam</button><br />
                <button style={{borderRadius: "10PX", width: "140px", height: "40px",marginTop:"10px"}}>Vishu</button><br />
                <button style={{borderRadius: "10PX", width: "140px", height: "40px",marginTop:"10px"}}>Thrissur Pooram</button><br />
                <button style={{borderRadius: "10PX", width: "140px", height: "40px",marginTop:"10px"}}>Theyyam</button><br />
                <button style={{borderRadius: "10PX", width: "140px", height: "40px", marginTop:"10px"}}>Attukal Pongala</button><br />
                <button style={{borderRadius: "10PX", width: "140px", height: "40px", marginTop:"10px"}}>Vishukkani</button><br />
                <button style={{borderRadius: "10PX", width: "140px", height: "40px", marginTop:"10px"}}>Navarathri</button> <br />
                </center>
            </div>


            <Tourism/>











        </>
    )

}
export default Festivals;