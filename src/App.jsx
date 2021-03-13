import { Counter } from './components/counter';
import { RepositoryList } from './components/RepositoryList';
import './style/global.scss'

export default function App() {
    return (
        <>
            <RepositoryList />
            <Counter />
        </>
    )
}