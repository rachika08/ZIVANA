const Listing=require("../models/listing.js");
const axios = require("axios");

module.exports.index=async (req,res)=>{
    let allListings=await Listing.find();
    res.render("listings/index.ejs",{allListings})
}

module.exports.renderNewForm=async (req,res)=>{
  
    res.render("listings/new.ejs");
}

module.exports.showListing=async (req,res)=>{
    let {id}=req.params;
    let allInformation=await Listing.findById(id).populate({path:"reviews",
        populate:{path:"author"},
    }).populate("owner");
    if(!allInformation){
        req.flash("error","Property you requested for does not exist");
        return res.redirect("/listings");
    }
    res.render("listings/show.ejs",{allInformation});
}

module.exports.createListing=async (req,res,next)=>{
        // let url=req.file.path;
        // let filename=req.file.filename;
        // console.log(url,"..",filename);
        let url;
        let filename;

        if (req.file) {
            url = req.file.path;
            filename = req.file.filename;
        } else {
            url = req.body.listing.image;
            filename = "custom";
        }

        console.log(url, "..", filename);
        let newlisting= new Listing(req.body.listing);
        newlisting.owner=req.user._id;
        newlisting.image={url,filename};

        // 📍 Geocoding
        const location = `${req.body.listing.location}, ${req.body.listing.country}`;

        const geoResponse = await axios.get(
            "https://nominatim.openstreetmap.org/search",
            {
            params: {
                q: location,
                format: "json",
                limit: 1
            },
            headers:{
                "User-Agent": "ZIVANA/1.0"
            }
            }
        )   ;

        if (geoResponse.data.length > 0) {
            const { lat, lon } = geoResponse.data[0];

            newlisting.geometry = {
            type: "Point",
            coordinates: [parseFloat(lon), parseFloat(lat)]
            };
        } else {
            req.flash("error", "Location not found");
            return res.redirect("/listings/new");
        }

        await newlisting.save();
        req.flash("success","New Stay created!");
        res.redirect("/listings");    
    }

module.exports.renderEditForm=async (req,res)=>{
    let {id}=req.params;
    let listing=await Listing.findById(id);
    if(!listing){
        req.flash("error","Property you requested for does not exist");
        return res.redirect("/listings");
    }
    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace(
        "/upload",
        "/upload/w_250"
    );

    res.render("listings/edit.ejs", { listing, originalImageUrl });
}

module.exports.updateListing=async (req,res)=>{
    let {id}=req.params;
    let listing=await Listing.findByIdAndUpdate(id,{...req.body.listing});
    if(typeof req.file!="undefined")
    {
        let url=req.file.path;
        let filename=req.file.filename;
        listing.image={url,filename};
        await listing.save();}
    
    req.flash("success","Your Stay Updated!");
    res.redirect(`/listings/${id}`);

}

module.exports.destroyListing=async (req,res)=>{
    let {id}=req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success","Property Deleted!");
    res.redirect("/listings");
}