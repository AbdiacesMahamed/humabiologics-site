
import styles from './News.module.css'

import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Appbar from './components/appBar';
import Footer from './components/footer'


export default function Home({ posts }) {
  const router = useRouter();
  const [mappedPosts, setMappedPosts] = useState([]);
  

  useEffect(() => {
    if (posts.length) {
      const imgBuilder = imageUrlBuilder({
        projectId: 'wfnkzjb8',
        dataset: 'production',
      });
      
      setMappedPosts(
        
        posts.map(p => {
          return {
            ...p,
            mainImage: imgBuilder.image(p.mainImage).width(500).height(250),
          }
        })
      );
      
    } else {
      setMappedPosts([]);
    }
  }, [posts]);

  return (
    <div>
      <Appbar></Appbar>
      <div className={styles.main}>
        <h1>Humabiologics News</h1>

        <h3>Recent Posts:</h3>

        <div className={styles.feed}>
          {mappedPosts.length ? mappedPosts.map((p, index) => (
            <div onClick={() => router.push(`/post/${p.slug.current}`)} key={index} className={styles.post}>
              <h3>{p.title}</h3>
              <img className={styles.mainImage} src={p.mainImage} alt={'mainimage'} />
            </div>
          )) : <>No Posts Yet</>}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export const getServerSideProps = async pageContext => {
  const pageSlug = pageContext.query.slug;
  
  if (!pageSlug) {
    return {
      notFound: true
    }
  }
  const query = encodeURIComponent('*[ _type == "post" ]');
  const url = `https://wfnkzjb8.api.sanity.io/v1/data/query/production?query=${query}`;
  const result = await fetch(url).then(res => res.json());

  if (!result.result || !result.result.length) {
    return {
      props: {
        posts: [],
      }
    }
  } else {
    return {
      props: {
        posts: result.result,
      }
    }
  }
};



