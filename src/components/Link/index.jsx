import Link from 'next/link';

function NextLink({ children, href, ...props }) {
    return (
        <Link href={ href }>
            <a { ...props }>{ children }</a>
        </Link>
    )
}

export { NextLink };