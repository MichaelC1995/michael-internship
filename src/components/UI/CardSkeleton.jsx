import React from 'react'

const CardSkeleton = ({data}) => {
    return (
        <div className={"card-skeleton"}>
            <div className={"skeleton-top skeleton"}></div>
            <div className={"skeleton-middle skeleton"}></div>
            <div className={"skeleton-bottom"}>
                <div className={"skeleton skeleton-text"}></div>
                <div className={"skeleton skeleton-text"}></div>
            </div>
        </div>
    )
}
export default CardSkeleton
