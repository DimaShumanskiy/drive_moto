import './Main.css';
import Search from "../../components/Search/Search";
import CategoryCard from '../../components/СategoryСard/СategoryСard';
// imageCategory
import imageCategoryATV from '../../assets/images/categories/CFMOTO-X6-EPS_blue 1.png';
import imageCategoryJetski from '../../assets/images/categories/jet_ski_PNG90 1.png';
import imageCategoryBoat from '../../assets/images/categories/boat_PNG36 1.png';
import imageCategorySnowmobile from '../../assets/images/categories/rmvector551 1.png';
import imageCategoryAllterrainvehicle from '../../assets/images/categories/2018-Maverick-X3-X-rc-TURBO-R-Carbon-Black-and-Octane-Blue_3-4-front4072 1.png';
import imageCategoryEngine from '../../assets/images/categories/images 1.png';


function Main(){
    return(
        <div>
            <section className="ad container">
                <div className="slider">слайдер</div>
                <div className="baner">бенер</div>
            </section>

            <Search />

            <section className="categories container">
                <CategoryCard title="Квадроциклы" src={imageCategoryATV} categoryLink={'#'}/>
                <CategoryCard title="Квадроциклы" src={imageCategoryJetski} categoryLink={'#'}/>
                <CategoryCard title="Квадроциклы" src={imageCategoryBoat} categoryLink={'#'}/>
                <CategoryCard title="Квадроциклы" src={imageCategorySnowmobile} categoryLink={'#'}/>
                <CategoryCard title="Квадроциклы" src={imageCategoryAllterrainvehicle} categoryLink={'#'}/>
                <CategoryCard title="Квадроциклы" src={imageCategoryEngine} categoryLink={'#'}/>
            </section>
        </div>
    )
}

export default Main;