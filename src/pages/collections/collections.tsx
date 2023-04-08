import { useQuery } from 'react-query';

export function Collections() {

    // Fetch collection data (response will be mocked)
    const fetchCollections = async () => {
        const res = await fetch('http://mock-server/collections');
        return res.json();
    };
    const collection = useQuery('collections', fetchCollections);

    // Collection data will be accessible 
    // here, using the mock server.
    // To manipulate this reponse object,
    // change ./src/mocks/handlers/collection.ts
    console.log('#############');
    console.log(collection.data);
    console.log('#############');

    return (
        <section className='container container-md'>
            Collections page
        </section>
    );
}
