

const NewsTab = ({title,description,src,url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-3 py-3" style={{maxWidth:"345px"}}>
  <img src={src} style={{height:"150px", width:"250px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):`Please click on the read more button to read more about this`}</p>
    <a href={url} className="btn btn-primary">और पढ़ें</a>
  </div>
</div>
  )
}

export default NewsTab