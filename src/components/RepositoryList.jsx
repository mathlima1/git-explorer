import { RepositoryItem } from "./RepositoryItem";

export function RepositoryList() {
    const repository = {
        name: "Unform",
        description: "Descrição do repositorio",
        link: "https://github.com"
    }

    return (
        <section className="repository-list">
            <h1>Listagem de repositorios</h1>
            <ul>
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />

            </ul>
        </section>
    )
}