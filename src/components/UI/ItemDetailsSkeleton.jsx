import React from 'react'

const ItemDetailsSkeleton = () => {
    return (
        <div id="wrapper">
            <div className="no-bottom no-top" id="content">
                <div id="top"></div>
                <section aria-label="section" className="mt90 sm-mt-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 text-center">
                                <div
                                    className="img-fluid img-rounded mb-sm-30 nft-image skeleton"
                                />
                            </div>
                            <div className="col-md-6">
                                <div className="item_info">
                                    <div className={"skeleton"} style={{height: 50, marginBottom: 10}}></div>
                                    <div className="item_info_counts">
                                        <div className="item_info_views skeleton">
                                        </div>
                                        <div className="item_info_like skeleton">
                                            <i></i>
                                        </div>
                                    </div>
                                    <div className={"skeleton"} style={{height: 50, marginBottom: 10}}></div>
                                    <div className="d-flex flex-row">
                                        <div className="mr40">
                                            <h6 className={"skeleton"} style={{height: 30, width: 165}}></h6>
                                            <div className="item_author">
                                                <div className="author_list_pp">
                                                    <div>
                                                        <div className="skeleton" style={{height: 50, borderRadius: 50}}></div>
                                                    </div>
                                                </div>
                                                <div className="author_list_info">
                                                    <div className={"skeleton"} style={{height: 30, width: 150}}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div></div>
                                    </div>
                                    <div className="de_tab tab_simple">
                                        <div className="de_tab_content">
                                            <h6 className={"skeleton"} style={{height: 30, width: 165}}></h6>
                                            <div className="item_author">
                                                <div className="author_list_pp">
                                                    <div>
                                                        <div className="skeleton" style={{height: 50, borderRadius: 50}}/>
                                                    </div>
                                                </div>
                                                <div className="author_list_info">
                                                    <div className={"skeleton"} style={{height: 30, width: 150}}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="spacer-40"></div>
                                        <h6 className={"skeleton"} style={{height: 30}}></h6>
                                        <div className="nft-item-price">
                                            <div className={"skeleton"} style={{height: 30, width: 150}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
export default ItemDetailsSkeleton
