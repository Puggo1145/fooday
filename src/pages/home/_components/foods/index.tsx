import "./style.scss";

export const Foods = () => {
  return (
    <view class="foods">
        <FoodsHeader />
    </view>
  )
}

export const FoodsHeader = () => {
    return (
        <view class="foods-header">
            <text class="foods-header-title">Foods</text>
        </view>
    )
}

export const FoodsList = () => {
    return (
        <view class="foods-list">
            <FoodsItem />
        </view>
    )
}

export const FoodsItem = () => {
    return (
        <view class="foods-item">
            <text class="foods-item-title">Foods</text>
        </view>
    )
}