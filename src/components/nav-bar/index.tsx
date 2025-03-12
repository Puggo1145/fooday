import "./styles.scss";
import scanFood from "../../assets/icons/scan-food.png";

export const NavBar = () => {
    const isAndroid = SystemInfo.platform === "Android";

    return (
        <view class={`navbar-container ${isAndroid ? "android" : ""}`}>
            <NavBarButton text="主页" />
            <NavBarButton icon={scanFood} />
            <NavBarButton text="设置" />
        </view>
    )
}

export const NavBarButton = ({
    text,
    icon
}: {
    text?: string,
    icon?: string
}) => {
    return (
        <view
            class={`button ${icon ? "button-main" : "button-default"}`}
        >
            {text &&
                <text class={`button-text ${icon ? "button-main-text" : "button-default-text"}`}>
                    {text}
                </text>}
            {icon &&
                <image
                    src={icon}
                    mode="aspectFit"
                    class="button-main-icon"
                />
            }
        </view>
    )
}
