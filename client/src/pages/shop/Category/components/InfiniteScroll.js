import React from 'react';
import { FlexLayout } from "@deity/falcon-ui";
import { Loader, CategoryArea } from "@deity/falcon-ecommerce-uikit";
import { NetworkStatus } from 'apollo-client';

export default class InfiniteScroll extends React.Component {
    componentDidMount() {
        document.addEventListener('scroll', (event) => this.onScroll(event));
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', (event) => this.onScroll(event));
    }

    onScroll(event) {
        const { pagination, networkStatus, isCallFinished, fetchMore } = this.props;

        if (pagination.nextPage && event.target.scrollingElement.scrollTop + window.innerHeight > event.target.scrollingElement.scrollHeight - 300
            && networkStatus !== NetworkStatus.fetchMore && isCallFinished) {
            fetchMore();
        };
    }

    render() {
        const { pagination, networkStatus } = this.props;

        return (<FlexLayout gridArea={CategoryArea.footer} flexDirection="column" alignItems="center">
            {pagination.nextPage && networkStatus === NetworkStatus.fetchMore && <Loader height="xxl" />}
        </FlexLayout>);
    }
}