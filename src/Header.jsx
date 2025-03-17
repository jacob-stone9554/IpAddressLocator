import './Header.css'
import useState from "react";


function Header () {


    return (
        <header>
            <h1>IP Address Tracker</h1>
            <form>
                <input type={"text"} name={"ipAddress"} placeholder={"Search for any IP address or domain"} />
                <button type={"submit"} onClick={() => {
                    alert("Submited");
                }}><img src={"src/assets/icon-arrow.svg"}/></button>
            </form>
            <div className={"results"}>
                <ul>
                    <li>
                        <p className={"label"}>IP ADDRESS</p>
                        <p className={"res"}>192.212.174.101</p>
                    </li>
                    <div className={"break"}/>
                    <li>
                        <p className={"label"}>LOCATION</p>
                        <p className={"res"}>Brooklyn, NY 10001</p>
                    </li>
                    <div className={"break"}/>
                    <li>
                        <p className={"label"}>TIMEZONE</p>
                        <p className={"res"}>UTC -05:00</p>
                    </li>
                    <div className={"break"}/>
                    <li>
                        <p className={"label"}>ISP</p>
                        <p className={"res"}>SpaceX Starlink</p>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;