import { GetServerSideProps, GetStaticProps, InferGetServerSidePropsType } from "next";
import { useEffect, useState } from "react"

type Respository = {
  name: string;
};

export default function Home ({ repositories, date }: InferGetServerSidePropsType<GetServerSideProps>) {
  return (
    <>
      <h1>{date}</h1>
      <ul>
        {repositories.map((repository: string) => (
          <li key={repository}>{repository}</li>
          
        ))}
      </ul>
    </>
  )
}

// export const getServerSideProps: GetServerSideProps = async () => { 
//   const response = await fetch('https://api.github.com/users/alanjhonatan/repos');

//   const data = await response.json();
//   const repositoryNames = data.map((repo) => repo.name);

//   return {
//     props: {
//       repositories: repositoryNames,
//       date: new Date().toISOString(),
//     }
//   }
// }

export const getStaticProps: GetStaticProps = async () => { 
  const response = await fetch('https://api.github.com/users/alanjhonatan/repos');

  const data: Respository[] = await response.json();
  const repositories: string[] = data.map((repo) => repo.name);

  return {
    props: {
      repositories: repositories,
      date: new Date().toISOString(),
    },
    revalidate: 5,
  }
}