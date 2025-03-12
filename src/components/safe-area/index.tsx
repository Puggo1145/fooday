import type { ReactNode } from "@lynx-js/react";
import type { CSSProperties } from "@lynx-js/types";

import "./style.scss";

interface ISafeAreaProps {
    children: ReactNode;
    style?: CSSProperties;
    paddingX?: boolean;
}

export const SafeArea = ({ 
    children, 
    style,
    paddingX = true,
}: ISafeAreaProps) => {
    const isIOS = SystemInfo.platform === "iOS";

    return (
        <view 
            class={`safe-area ${isIOS ? "ios" : "android"} ${paddingX ? "padding-x" : ""}`} 
            style={style}
        >
            {children}
        </view>
    )
}
