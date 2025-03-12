import type { PropsWithChildren } from 'react'
// components
import { NavBar } from './components/nav-bar/index.jsx'

import './index.scss'

export const BaseLayout = ({ children }: PropsWithChildren) => {
    return (
        <view
            class="theme-light"
            style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            }}
        >
            {children}
            <NavBar />
        </view>
    )
}
