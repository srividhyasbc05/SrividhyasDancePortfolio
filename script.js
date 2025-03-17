

function gallery (){
    let imgfilenames= "galleryimages/EA2A5386.JPG galleryimages/EA2A5395.JPG galleryimages/EA2A5396.JPG galleryimages/EA2A5409.JPG galleryimages/EA2A5427.JPG galleryimages/EA2A5435.JPG galleryimages/EA2A5436.JPG galleryimages/EA2A5437.JPG galleryimages/EA2A5443.JPG galleryimages/EA2A5447.JPG galleryimages/EA2A5456.JPG galleryimages/EA2A5466.JPG galleryimages/EA2A5467.JPG galleryimages/EA2A5472.JPG galleryimages/EA2A5482.JPG galleryimages/EA2A5483.JPG galleryimages/EA2A5494.JPG galleryimages/EA2A5516.JPG galleryimages/EA2A5520.JPG galleryimages/EA2A5525.JPG galleryimages/EA2A5527.JPG galleryimages/EA2A5543.JPG galleryimages/EA2A5544.JPG galleryimages/EA2A5554.JPG galleryimages/EA2A5572.JPG galleryimages/EA2A5573.JPG galleryimages/EA2A5610.JPG galleryimages/EA2A5612.JPG galleryimages/EA2A5613.JPG galleryimages/EA2A5617.JPG galleryimages/EA2A5623.JPG galleryimages/EA2A5634.JPG galleryimages/EA2A5638.JPG galleryimages/EA2A5649.JPG galleryimages/EA2A5655.JPG galleryimages/EA2A5657.JPG galleryimages/EA2A5675.JPG galleryimages/EA2A5677.JPG";
    filearray= imgfilenames.split(" ");
    console.log(filearray); 

    

    for (let i = 0; i < filearray.length; i++) {
        var column=document.getElementById("gallerydivparent")
        var img = document.createElement("img");
        img.src = filearray[i]
        
        
        if (imgElement.naturalHeight > imgElement.naturalWidth){
            img.classList.add("vertgalimg")
        }else if (img.height < img.width){
            img.classList.add("horizgalimg")
        }
        column.appendChild(img);

    }

    
}

gallery();