import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import NewItemsSkeleton from "../UI/NewItemsSkeleton";

const AuthorItems = () => {
    const [isLoading, setIsLoading] = useState(true)
    const {id} = useParams()
    const [authorHTML, setAuthorHTML] = useState({nftCollection: []})


    useEffect(() => {
        async function renderAuthor() {
            try {
                const {data} = await axios.get(`https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author=${id}`);
                setAuthorHTML(data)
            } catch (error) {
                console.log("Error in function renderAuthor.", error)
            } finally {
                setIsLoading(false)
            }
        }

        renderAuthor()
    }, [id]);


    return (
        <div className="de_tab_content">
            <div className="tab-1">
                <div className="row">

                    {isLoading ? (

                        <NewItemsSkeleton/>

                    ) : (

                        authorHTML.nftCollection.map((item, index) => (
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
                                <div className="nft__item">
                                    <div className="author_list_pp">
                                        <Link to="">
                                            <img className="lazy" src={authorHTML.authorImage} alt=""/>
                                            <i className="fa fa-check"></i>
                                        </Link>
                                    </div>
                                    <div className="nft__item_wrap">
                                        <div className="nft__item_extra">
                                            <div className="nft__item_buttons">
                                                <button>Buy Now</button>
                                                <div className="nft__item_share">
                                                    <h4>Share</h4>
                                                    <a href="" target="_blank" rel="noreferrer">
                                                        <i className="fa fa-facebook fa-lg"></i>
                                                    </a>
                                                    <a href="" target="_blank" rel="noreferrer">
                                                        <i className="fa fa-twitter fa-lg"></i>
                                                    </a>
                                                    <a href="">
                                                        <i className="fa fa-envelope fa-lg"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <Link to={`/item-details/${item.nftId}`}>
                                            <img
                                                src={item.nftImage}
                                                className="lazy nft__item_preview"
                                                alt=""
                                            />
                                        </Link>
                                    </div>
                                    <div className="nft__item_info">
                                        <Link to="/item-details">
                                            <h4>{item.title}</h4>
                                        </Link>
                                        <div className="nft__item_price">{item.price} ETH</div>
                                        <div className="nft__item_like">
                                            <i className="fa fa-heart"></i>
                                            <span>{item.likes}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))

                    )}
                </div>
            </div>
        </div>
    );
};

export default AuthorItems;
