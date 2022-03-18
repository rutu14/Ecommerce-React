import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loader } from "../index";

const CategorySection = () => {
    const [ loader, setLoader ] = useState(false);
    const [ categoryData, setCategoryData] = useState(null);
    const [ categoryError, setCategoryError ] = useState(null);

    const getCategories = async() => {
        try{
            setLoader(true)
            const { data } = await axios.get("/api/categories");
            setCategoryData( data.categories )
            setLoader(false)
        }
        catch(error){
            setCategoryError(error)
        }
    }  
      
    useEffect( () => { getCategories() },[ ]);

    return (
      <>
        <h3 id="category" className="heading2 medium text-center m20">Category</h3>
        { loader && <Loader/>}
        <section className="grid-3-cols below-hero">
            {categoryData && categoryData.map((item) => (
                <Link to={`product/${item.categoryName}`} className="card card-box-shadow cp category-card" key={item._id}>
                    <div className="card-title-box middle-overlay title-color">
                        <h2 className="heading3 text-center medium">{item.categoryName}</h2>
                    </div>
                    <img className="card-img card-img-all-borders category-card-img" src={item.image}/>
                </Link>
            ))}
        </section>
      </>
    );
  }

export { CategorySection }