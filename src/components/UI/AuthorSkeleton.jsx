import React from 'react';
import NewItemsSkeleton from "./NewItemsSkeleton";

const AuthorSkeleton = () => {
    return (
        <div className="author-skeleton">
            <div className="skeleton-profile">
                <div className="skeleton skeleton-avatar"></div>
                <div className="skeleton-info">
                    <div className="skeleton skeleton-name"></div>
                    <div className="skeleton skeleton-username"></div>
                    <div className="skeleton skeleton-url"></div>
                </div>
                    <div className="skeleton skeleton-followers"></div>
            </div>
            <div>
                <NewItemsSkeleton/>
            </div>
        </div>
    );
};

export default AuthorSkeleton;