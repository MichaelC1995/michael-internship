import React, {useEffect, useState} from "react";
import EthImage from "../images/ethereum.svg";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import ItemDetailsSkeleton from "../components/UI/ItemDetailsSkeleton";

const ItemDetails = () => {
    const [isLoading, setIsLoading] = useState(true)
    const {id} = useParams()
    const [itemDetailsHTML, setItemDetailsHTML] = useState({})

    useEffect(() => {
        window.scrollTo(0, 0);

        async function renderItemDetails() {
            try {
                const {data} = await axios.get(`https://us-central1-nft-cloud-functions.cloudfunctions.net/itemDetails?nftId=${id}`)
                setItemDetailsHTML(data)
            } catch (error) {
                console.error("Error in function renderItemDetails.", error);
            } finally {
                setIsLoading(false)
            }
        }
        renderItemDetails();
    }, [id]);


    return (
        <div id="wrapper">
            <div className="no-bottom no-top" id="content">
                <div id="top"></div>
                {isLoading ? (

                    <ItemDetailsSkeleton/>

                ) : (

                    <section aria-label="section" className="mt90 sm-mt-0">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 text-center">
                                    <img
                                        src={itemDetailsHTML.nftImage}
                                        className="img-fluid img-rounded mb-sm-30 nft-image"
                                        alt=""
                                    />
                                </div>
                                <div className="col-md-6">
                                    <div className="item_info">
                                        <h2>{itemDetailsHTML.title} #{itemDetailsHTML.tag}</h2>

                                        <div className="item_info_counts">
                                            <div className="item_info_views">
                                                <i className="fa fa-eye"></i>
                                                {itemDetailsHTML.views}
                                            </div>
                                            <div className="item_info_like">
                                                <i className="fa fa-heart"></i>
                                                {itemDetailsHTML.likes}
                                            </div>
                                        </div>
                                        <p>
                                            {itemDetailsHTML.description}
                                        </p>
                                        <div className="d-flex flex-row">
                                            <div className="mr40">
                                                <h6>Owner</h6>
                                                <div className="item_author">
                                                    <div className="author_list_pp">
                                                        <Link to={`/author/${itemDetailsHTML.ownerId}`}>
                                                            <img className="lazy" src={itemDetailsHTML.ownerImage}
                                                                 alt=""/>
                                                            <i className="fa fa-check"></i>
                                                        </Link>
                                                    </div>
                                                    <div className="author_list_info">
                                                        <Link
                                                            to={`/author/${itemDetailsHTML.ownerId}`}>{itemDetailsHTML.ownerName}</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div></div>
                                        </div>
                                        <div className="de_tab tab_simple">
                                            <div className="de_tab_content">
                                                <h6>Creator</h6>
                                                <div className="item_author">
                                                    <div className="author_list_pp">
                                                        <Link to={`/author/${itemDetailsHTML.creatorId}`}>
                                                            <img className="lazy" src={itemDetailsHTML.creatorImage}
                                                                 alt=""/>
                                                            <i className="fa fa-check"></i>
                                                        </Link>
                                                    </div>
                                                    <div className="author_list_info">
                                                        <Link
                                                            to={`/author/${itemDetailsHTML.creatorId}`}>{itemDetailsHTML.creatorName}</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="spacer-40"></div>
                                            <h6>Price</h6>
                                            <div className="nft-item-price">
                                                <img src={EthImage} alt=""/>
                                                <span>{itemDetailsHTML.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                )}
            </div>
        </div>
    );
};

export default ItemDetails;
