import React from 'react';

import classes from './Paginator.module.scss';

export interface IPaginatorProps {
    totalPages: number;
    currentPage: number;
    pageChangeHandler: (page: number) => any;
}

export default function Paginator(props: IPaginatorProps) {
    const pages: (JSX.Element | string)[] = [];

    const pageLow = props.currentPage - 2;
    const pageHigh = props.currentPage + 2;

    for (let i = 0; i < props.totalPages; ) {
        const i_ = i;
        pages.push(
            <button
                onClick={() => props.pageChangeHandler(i_)}
                disabled={i === props.currentPage}
                key={i}
            >
                {i + 1}
            </button>
        );

        if (i === 0) {
            if (pageLow > 1) {
                pages.push(<Spacer key='spacer_1' />);
            }

            i = Math.max(pageLow, 1);
        } else if (i === pageHigh && i !== props.totalPages - 1) {
            if (pageHigh < props.totalPages - 2) {
                pages.push(<Spacer key='spacer_2' />);
            }

            i = props.totalPages - 1;
        } else {
            i++;
        }
    }

    return <div className={classes.Paginator}>{pages}</div>;
}

function Spacer() {
    return <div className={classes.Spacer}>...</div>;
}
