import { NavBar } from '../components/navbar/NavBar';
import { HomeContainer } from './HomeContainer';

export const MainContainer = (props) => {

    return(
        <>
            <NavBar />
            {props.children}            
        </>
    )
}