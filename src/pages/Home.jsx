import {NavBar,Slidebar,Customers,Orders} from '../components/index.js';

function Home(){
    return(
        <>
            <NavBar />
            <Slidebar/>
            <Customers/>
            <Orders/>
        </>
    )
}

export default Home;