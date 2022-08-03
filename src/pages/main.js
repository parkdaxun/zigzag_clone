import './main.css';


function main() {
    return (
        <div>
            <div>
                <img className="picture1" src={require("../image/picture1.png")} />
                <a href="https://apps.apple.com/KR/app/id976131101?mt=8">
                    <img className="appstore" src={require("../image/app_store.png")} />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.croquis.zigzag&referrer=af_tranid%3Dx8qDlPq9-TEjlPdkZop1QQ%26shortlink%3D189189a0%26pid%3Dzigzag_website_aos%26af_click_lookback%3D1d%26af_web_id%3D6332b30f-22ab-4221-8322-80e06e8c4f97-p%26utm_source%3Dzigzag_website_aos">
                    <img className="google" src={require("../image/google_play.png")} />
                </a>
                <img className="picture" src={require("../image/picture2.png")} />
                <img className="picture" src={require("../image/picture3.png")} />
                <img className="picture" src={require("../image/picture4.png")} />
                <img className="picture" src={require("../image/picture5.png")} />
            </div>

        </div>
    );
}

export default main;
