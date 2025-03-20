import archiveIcon from "/src/assets/sidebar/archive.svg"
import chatIcon from "/src/assets/sidebar/chat.svg"
import statusIcon from "/src/assets/sidebar/status.svg"
import settingsIcon from "/src/assets/sidebar/settings.svg"
import logoutIcon from "/src/assets/sidebar/logout.svg"


export function Sidebar() {
    return (
            <div id="sidebar">
                <div id="center-icon-group">
                    <div className="icon">
                        <img src={archiveIcon}></img>
                    </div>
                    <div className="icon">
                        <img src={chatIcon}></img>
                    </div>
                    <div className="icon">
                        <img src={statusIcon}></img>
                    </div>
                </div>
                <div id="bottom-icon-group">
                    <div className="icon">
                        <img src={settingsIcon}></img>
                    </div>
                    <div className="icon">
                        <img src={logoutIcon}></img>
                    </div>
                </div>
            </div>
    )
}