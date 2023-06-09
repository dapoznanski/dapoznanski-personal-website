import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../static/img1.jpeg";
import img2 from "../static/img2.jpeg";
import img3 from "../static/img3.jpeg";
import img4 from "../static/img4.jpeg";
import img5 from "../static/img5.jpeg";
import img6 from "../static/img6.jpeg";

const ImageCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const containerStyles = {
        overflow: "hidden",
    };

    const imageStyles = {
        width: "100%",
        height: "auto",
        maxWidth: "100%",
    };

    return (
        <div style={containerStyles}>
            <Slider {...settings}>
                <div>
                    <img src={img1} alt="Image 1" style={imageStyles} />
                </div>
                <div>
                    <img src={img2} alt="Image 2" style={imageStyles} />
                </div>
                <div>
                    <img src={img3} alt="Image 3" style={imageStyles} />
                </div>
                <div>
                    <img src={img4} alt="Image 4" style={imageStyles} />
                </div>
                <div>
                    <img src={img5} alt="Image 5" style={imageStyles} />
                </div>
                <div>
                    <img src={img6} alt="Image 6" style={imageStyles} />
                </div>
            </Slider>
        </div>
    );
};

export default ImageCarousel;
