import dynamic from 'next/dynamic';
import Header from "@/components/header";

const CategoryList = dynamic(() => import('product_app/Category'), {
    loading: () => <p>Loading...</p>,
});

const BookList = dynamic(() => import('product_app/Book'), {
    loading: () => <p>Loading...</p>,
});

const ProductsList = dynamic(() => import('product_app/SectionBody'), {
    loading: () => <p>Loading...</p>,
    ssr: false,
});

function Products({ books }) {
    return (
        <main className='flex flex-col bg-white'>
            <Header />
            <BookList books={books} />
            <CategoryList />
            <ProductsList />
        </main>
    );
}

Products.getInitialProps = async (ctx: any) => {
    const books = await fetch(
      'https://www.googleapis.com/books/v1/volumes?q=crime'
    ).then((res) => res.json());
  
    return {
      books: books.items ?? [],
    };
  };

export default Products;