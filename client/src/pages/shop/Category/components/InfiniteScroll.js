import React from 'react';
import { FlexLayout, Divider } from "@deity/falcon-ui";
import { Loader, CategoryArea } from "@deity/falcon-ecommerce-uikit";

const InfiniteScroll = ({pagination}) => {
    return <FlexLayout gridArea={CategoryArea.footer} flexDirection="column" alignItems="center">
        {pagination.nextPage && <Divider />}
        {pagination.nextPage && (
            // <ShowMore onClick={fetchMore} loading={networkStatus === NetworkStatus.fetchMore} />
            <Loader />
        )}
    </FlexLayout>
}

export default InfiniteScroll;