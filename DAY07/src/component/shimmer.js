

const Shimmer =()=>{
   return (<div className="restaurant-list">
    {Array(10).fill("").map((e,index)=><div key={index} className="shimmer-card">
        <div className="card-img"></div>
        <div shimmer_name></div>
        <h4 Shimmer-special></h4>
    </div>)}
   </div>
   )
}

export default Shimmer;