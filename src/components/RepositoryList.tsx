import { RepositoryItem } from "./RepositoryItem";
import "../style/repository.scss"
import { useState, useEffect } from "react";

interface Repository {
    name: string,
    description: string,
    html_url: string
}

export function RepositoryList() {
    //https://api.github.com/users/mathlima1/repos
    const [repositories, setRepositories] = useState<Repository[]>([])

    useEffect(() => {
        fetch('https://api.github.com/users/mathlima1/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, [])

    return (
        <section className="repository-list">
            <div className="repository-list-header">
                <h1>Listagem de repositorios</h1>
            </div>
            <ul>
                {repositories.map(repository => {
                    return (<RepositoryItem key={repository.name} repository={repository} />)
                })}
            </ul>
        </section>
    )
}