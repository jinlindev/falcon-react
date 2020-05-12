import React, { useEffect, useState } from 'react';
import { FlexLayout } from "@deity/falcon-ui";
import { Loader, CategoryArea } from "@deity/falcon-ecommerce-uikit";
import { NetworkStatus } from 'apollo-client';

const InfiniteScroll = ({pagination, networkStatus, fetchMore, isCallFinished}) => {
    const scrollPage = (event) => {
        if (event.target.scrollingElement.scrollTop + window.innerHeight > event.target.scrollingElement.scrollHeight - 300
            && networkStatus !== NetworkStatus.fetchMore && isCallFinished) {
            fetchMore();
        };
    };

    useEffect(() => {
        document.addEventListener('scroll', scrollPage);

        return function removeListener() {
            document.removeEventListener('scroll', scrollPage);
        };
    }, []);

    return (<FlexLayout gridArea={CategoryArea.footer} flexDirection="column" alignItems="center">
        {pagination.nextPage && (
            networkStatus === NetworkStatus.fetchMore && <Loader height="xxl" />
        )}
    </FlexLayout>);
};

export default InfiniteScroll;