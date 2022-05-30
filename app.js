const pages = document.getElementsByTagName("p");
 Array.from(pages).forEach(page => {
    page.style.opacity= "0.2";
    page.style.transition="all 0 ease-in-out";
}
);
const  Options ={
    threshold:1,
    }
    

const backfunction =(entries,Observer)=>{
    entries.forEach(entry=>{
    
        if( entry.isIntersecting ){
            entry.target.style.opacity="1";
        }
        else{
            return "";
        

    }
})};
 Observer = new IntersectionObserver(backfunction, Options)
Array.from(pages).forEach(page => {
    Observer.observe(page);
});

/* observ images*/
const images = document.getElementsByTagName("img");
Array.from(images).forEach(image => {
    image.style.opacity="0.4";
    image.style.transition="all 0.5s ease-in-out";
});
const option ={
    threshold:0.7,
    };

    imgFunc=(entries,ObserverImg)=>{
        entries.forEach(entry=>{

        if( entry.isIntersecting ){
            entry.target.style.opacity="1";
        }
        else{
            return "";
        }
        })
    };
    ObserverImg = new IntersectionObserver(imgFunc, option);
    
    Array.from(images).forEach((image) => {
        ObserverImg.observe(image)
    })
    