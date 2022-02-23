import { useEffect, useState } from "react"

type Repository = {
  name: string;
}

export default function Home () {
  const [repositories, setRepositories] = useState<string[]>([])

  useEffect(() => {
    fetch('https://api.github.com/users/alanjhonatan/repos')
      .then(response => response.json())
      .then(data => {
        const repositoryNames = data.map((repo: Repository) => repo.name);

        setRepositories(repositoryNames);
      })
  }, [])
  
  return (
    <ul>
      {repositories.map(repo => (
        <li key={repo}>{repo}</li>
      ))}
    </ul>
  )
}
