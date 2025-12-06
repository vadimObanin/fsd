import {Counter} from "./components/Counter";
import './index.scss';

export const App = () => {
    return (
        <>
            <h1 className={'app'}>App Component</h1>
            <Counter/>
        </>
    )
}