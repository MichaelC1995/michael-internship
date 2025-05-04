import React from 'react'
import Slider from "react-slick";

const NewItemsSkeleton = () => {
    const settings = {
        arrows: true,
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    }

    function SamplePrevArrow(props) {
        const {className, style, onClick} = props;
        return (
            <div
                className={className}
                style={{...style, display: "block", background: "gray", borderRadius: "50%"}}
                onClick={onClick}
            />
        );
    }

    function SampleNextArrow(props) {
        const {className, style, onClick} = props;
        return (
            <div
                className={className}
                style={{...style, display: "block", background: "gray", borderRadius: "50%"}}
                onClick={onClick}
            />
        );
    }

    return (
        <div className={"slider-container"}>
            <Slider {...settings}>
                <div>
                    <div className="nft__item" style={{height: "441px"}}>
                        <div className="nft__item_wrap skeleton">
                            <div className="nft__item_extra">
                            </div>
                            <div className="lazy nft__item_preview skeleton" alt=""/>
                        </div>
                        <div className="nft__item_info skeleton"
                             style={{marginTop: "10px", width: "70%"}}>
                            <div className="nft__item_price skeleton-text"></div>
                            <div className="nft__item_price skeleton-text"></div>
                            <div className="nft__item_like">
                                <span className={"skeleton-text"}></span>
                            </div>
                        </div>
                        <div className="nft__item_info skeleton"
                             style={{marginTop: "10px", width: "50%", position: "relative"}}>
                            <div className="nft__item_price skeleton-text"></div>
                            <div className="nft__item_price skeleton-text"></div>
                            <span className={"skeleton-text"}></span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="nft__item" style={{height: "441px"}}>
                        <div className="nft__item_wrap skeleton">
                            <div className="nft__item_extra">
                            </div>
                            <div className="lazy nft__item_preview skeleton" alt=""/>
                        </div>
                        <div className="nft__item_info skeleton"
                             style={{marginTop: "10px", width: "70%"}}>
                            <div className="nft__item_price skeleton-text"></div>
                            <div className="nft__item_price skeleton-text"></div>
                            <div className="nft__item_like">
                                <span className={"skeleton-text"}></span>
                            </div>
                        </div>
                        <div className="nft__item_info skeleton"
                             style={{marginTop: "10px", width: "50%", position: "relative"}}>
                            <div className="nft__item_price skeleton-text"></div>
                            <div className="nft__item_price skeleton-text"></div>
                            <span className={"skeleton-text"}></span>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    )
}
export default NewItemsSkeleton
