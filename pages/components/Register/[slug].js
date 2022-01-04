import Link from "next/link";
import Image from "next/image";

export default function SingleInfo({ user }) {
  const router = useRouter();
  console.log("router===>", router);
  return (
      <div className=''>
        <span>
          {user.NamaLengkap} {user.NamaPanggilan}
        </span>

        <h1>{user.Npm}</h1>
        {user.ProfilePicture && (
          <div className=''>
            <Image src={user.ProfilePicture} width={900} height={600} />
          </div>
        )}
        <p>{user.IdLine}</p>
        <Link href="/">
          <a className=''>Go Back</a>
        </Link>
      </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/api/user');
  const user = await res.json();
  const paths = user.map((item) => ({
    params: { slug: item.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch('http://localhost:3000/api/user/${slug}');
  const SingleInfo = await res.json();
  return {
    props: {
      user: SingleInfo[0],
    },
    revalidate: 1,
  };
}