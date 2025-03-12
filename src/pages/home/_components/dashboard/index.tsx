import "./style.scss";

export const Dashboard = () => {
    return (
        <view class="dashboard">
            <Calories calories={620} />
            <view class="nutrients">
                <Protein protein={20} />
                <Carbs carbs={20} />
                <Fats fats={20} />
            </view>
        </view>
    )
}

export const Calories = ({ calories }: { calories: number }) => {
    return (
        <view class="calories dashboard-card">
            <view class="dashboard-card-data">
                <text class="dashboard-card-data-text">{calories}</text>
                <text class="unit">Kcal</text>
            </view>
            <text class="description">Calories left</text>
            <AmountIndicator amount={calories / 1500 * 100} />
        </view>
    )
}

export const Protein = ({ protein }: { protein: number }) => {
    return (
        <view class="protein dashboard-card">
            <text class="dashboard-card-title">Protein left</text>
            <view class="dashboard-card-data">
                <text class="dashboard-card-data-text">{protein}</text>
                <text class="unit">g</text>
            </view>
            <AmountIndicator amount={protein / 120 * 100} position="left" />
        </view>
    )
}

export const Carbs = ({ carbs }: { carbs: number }) => {
    return (
        <view class="carbs dashboard-card">
            <text class="dashboard-card-title">Carbs left</text>
            <view class="dashboard-card-data">
                <text class="dashboard-card-data-text">{carbs}</text>
                <text class="unit">g</text>
            </view>
            <AmountIndicator amount={carbs / 50 * 100} position="left" />
        </view>
    )
}

export const Fats = ({ fats }: { fats: number }) => {
    return (
        <view class="fats dashboard-card">
            <text class="dashboard-card-title">Fats left</text>
            <view class="dashboard-card-data">
                <text class="dashboard-card-data-text">{fats}</text>
                <text class="unit">g</text>
            </view>
            <AmountIndicator amount={fats / 40 * 100} position="left" />
        </view>
    )
}

export const AmountIndicator = ({
    amount,
    position = "bottom"
}: {
    amount: number,
    position?: "bottom" | "left"
}) => {
    return (
        <view
            class="amount-indicator"
            style={
                position === "bottom"
                    ? {
                        height: `${amount}%`,
                        width: "100%"
                    }
                    : {
                        width: `${amount}%`,
                        height: "100%"
                    }
            }
        />
    )
}
