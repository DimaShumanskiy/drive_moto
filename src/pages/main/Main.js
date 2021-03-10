import './Main.css';
import Search from "../../components/Search/Search";



function Main(){
    return(
        <div>
            <section className="ad container">
                <div className="slider">слайдер</div>
                <div className="baner">бенер</div>
            </section>

            <Search />

            <section className="categories container">
                
            </section>
        </div>
    )
}

export default Main;