import { GetServerSideProps } from "next";
import { useEffect, useState } from "react"

type Repository = {
  name: string;
}

export default function Home ({ repositories }) {

  return (
    <ul>
      {repositories.map(repo => (
        <li key={repo}>{repo}</li>
      ))}
    </ul>
  )
}

export const getServerSideProps: GetServerSideProps = async () => { 
  const response = await fetch('https://api.github.com/users/alanjhonatan/repos');

  const data = await response.json();
  const repositoryNames = data.map((repo: Repository) => repo.name);

  return {
    props: {
      repositories: repositoryNames
    }
  }
}