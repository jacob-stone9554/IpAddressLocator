import './Header.css'


function Header () {
    return (
        <header>
            <h1>IP Address Tracker</h1>
            <form>
                <input type={"text"} name={"ipAddress"} placeholder={"Search for any IP address or domain"} />
                <button type={"submit"} onClick={() => {}}>></button>
            </form>
            <div className={"results"}>
                <ul>
                    <div className={"result-group"}>
                        <li>IP Address</li>
                        <li>192.168.1.1</li>
                    </div>
                    <div className={"result-group"}>
                        <li>Location</li>
                        <li>Brooklyn, NY 10001</li>
                    </div>
                    <div className={"result-group"}>
                        <li>Timezone</li>
                        <li>UTC -05:00</li>
                    </div>
                    <div className={"result-group"}>
                        <li>ISP</li>
                        <li>SpaceX Starlink</li>
                    </div>
                </ul>
            </div>
        </header>
    );
}

export default Header;