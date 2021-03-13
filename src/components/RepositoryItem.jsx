export function RepositoryItem(props) {
    return (
        <li>
            <strong>{props.repository?.name ?? 'default'}</strong>
            <p>{props.repository.description}</p>
            <a target="_blank" rel="noopener" href={props.repository.link}>Acessar repositorio</a>
        </li>
    )
}