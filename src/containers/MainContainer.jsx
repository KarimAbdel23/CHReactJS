import { NavBar } from '../components/navbar/NavBar';

export const MainContainer = (props) => {

    return(
        <>
            <NavBar />
            {props.children}            
        </>
    )
}