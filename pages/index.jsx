import { NextLink } from '../src/components/Link';

export default function HomePage() {
    return (
        <div>
            <h1>Alura cases</h1>
            <NextLink href='/faq'>
                ir para o faq
            </NextLink>
        </div>
    )
}