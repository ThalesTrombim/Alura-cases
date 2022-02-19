import FAQScreen from '../src/screens/FAQScreen';

export default FAQScreen;

export async function getStaticProps() {
    const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';
    const faq = await fetch(FAQ_API_URL)
        .then((res) => {
            return res.json()
        })
        .then(res => {
            return res;
        })

    return {
        props: { faq }, 
    }
}

// export default function FaqPage({ faq }) {
//     return (
//         <div>
//             <Head>
//                 <title>FAQ Alura Cases</title>
//                 <meta name="viewport" content="initial-scale=1.0, width=device-width" />
//             </Head>
//             <h1>Alura Cases - Página de Perguntas FAQ</h1>
//             <NextLink href='/'>
//                 ir para a home
//             </NextLink>
//             <ul>
//                 {faq.map(({ question, answer }) => (
//                    <li key={question}>
//                     <article>
//                         <h2>{question}</h2>
//                         <p>{answer}</p>
//                     </article>
//                    </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }