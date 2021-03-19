interface RepositoryItemProps {
    repository: {
        name: string,
        description: string,
        html_url: string
    }
}

export function RepositoryItem(props: RepositoryItemProps) {
    return (
        <li>
            <div>
                <h3>{props.repository.name}</h3>
                <p>{props.repository.description}</p>
            </div>
            <a target="_blank" rel="noopener" href={props.repository.html_url}>Acessar repositorio</a>
        </li>
    )
}