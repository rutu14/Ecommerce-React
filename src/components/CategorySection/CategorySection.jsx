
import { Link } from "react-router-dom";
import { useCategoryActions } from "../../context";
import { SpinLoader } from "../index";

const CategorySection = () => {
    const { category } = useCategoryActions();   
    return (
      <>
        <h3 id="category" className="heading2 medium text-center m20 font-color">Category</h3>
        { category.loader && <SpinLoader/>}
        <section className="grid-3-cols below-hero">
            {category.info && category.info.map((item) => (
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