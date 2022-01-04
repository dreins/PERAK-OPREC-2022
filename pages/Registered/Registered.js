import Image from "next/image"
import React from 'react'
import useFetch from "../../Function/useFetch"
import { Link } from 'react-router-dom'


function Registered(){
    return (
        <main className="w-full h-full bg-bg-styles bg-fixed">
            <div className="flex px-20 py-5">
              <Image
                  src="/img/Registered-Title-1.png"
                  alt="Registered-Title-1"
                  width={600}
                  height={40}   
              />
            </div>
            <div>
            <Image
                  src="/img/Registered-Title-2.png"
                  alt="Registered-Title-2"
                  width={600}
                  height={40}   
              />
            </div>
            <h1>Latest News</h1>
              {User.map((item) => (
                <Registered key={item.NamaLengkap} news={item} />
              ))}
              {User.length > 0 && (
                <Link href="/news">
                  <a className="btn-secondary">View All News</a>
                </Link>
              )}
          </main>
    )
}

export default Registered

export const getStaticProps = async () => {
  const res = await fetch('localhost:3000/api/user');
  const data = await res.json();

  return {
    props: { data }
  }
}

export default function Homepage() {
  const { loading, error, data } = useFetch('http://localhost:1337/api/registration-detail')

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  console.log(data)

  return (
    <div>
      {data.map(review => (
        <div key={review.id} className="review-card">
          <div className="rating">{review.rating}</div>
          <h2>{review.title}</h2>
          
          <small>console list</small>

          <p>{review.body.substring(0, 200)}...</p>
          <Link to={'/details/${review.id}'}>Read more</Link>
        </div>
      ))}
    </div>
  )
}

