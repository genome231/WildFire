//Functions created to simplify image handling in WildFire
//Notice that 

//Liked image, shows a liked image from the category liked imaged, notice 1 is most liked and 5 is least (but still) liked image
function imageL(input) {
  if (input === "1") {
    showImage();
  } else if (input === "2") {
    showImage();         
  } else if (input === "3") {
    showImage();         
  } else if (input === "4") {
    showImage();         
  } else if (input === "5") {
    showImage();         
  } else {}
}

//disliked image, shows a disliked image from the category disliked imaged, notice 1 is most disliked and 5 is least (but still) disliked image
function imageH(input) {
  if (input === "1") {
    showImage("/GNMImages/");
  } else if (input === "2") {
    showImage();         
  } else if (input === "3") {
    showImage();         
  } else if (input === "4") {
    showImage();         
  } else if (input === "5") {
    showImage();         
  } else {}
}

function imageC(input,x) {
  if (input === "ge") {
    showCategoryImage("GENERAL",x);
  } else if (input === "bu") {
    showCategoryImage("BUTTS" ,x);
  } else if (input === "bo") {
    showCategoryImage("BOOBS",x);
  } else if (input === "ga") {
    showCategoryImage("GAY",x);
  } else if (input === "he") {
    showCategoryImage("HENTAI",x);
  } else if (input === "fe") {
    showCategoryImage("FEMDOM",x);
  } else if (input === "lez") {
    showCategoryImage("LEZDOM",x);
  } else if (input === "bl") {
    showCategoryImage("BLOWJOB",x);
  } else if (input === "les") {
    showCategoryImage("LESBIAN",x);
  } else if (input === "ca") {
    showCategoryImage("CAPTIONS",x);
  } else {}
}

function getImagePath() {
    return currentPicturePath;
}

function sortPicture(file, sortPlace=2)
{
    var taggedPicture = Java.type("me.goddragon.teaseai.api.picture.TaggedPicture"); //What does this do? You create a var containing what and why?
    DMessage("Moving file" + file, 0);
    var myFile;
    var taggedFile;
    if (file instanceof java.io.File) { //This one I dont understand either? 
        myFile = file;
        taggedFile = new taggedPicture(myFile);
    }
    else if (file.search(teasePath) != -1) {
        myFile = new java.io.File(file);
        taggedFile = new taggedPicture(myFile);
    }
    else if (file instanceof taggedPicture)
    {
        taggedFile = file;
    }
    else {
        myFile = new java.io.File(teasePath + separator + file);
        taggedFile = new taggedPicture(myFile);
    }
    var localpath = "";
    //Here you introduce a switch.
    switch (sortPlace) {
        case 1:
        case "dislike":
            localpath = "delete";
            break;
        case 2:
        case "normal":
            localpath = "images" + separator + "normal" + separator;
            break;
        case 3:
        case "liked":
            localpath = "images" + separator + "liked" + separator;
            break;
        case 4:
        case "loved":
            localpath = "images" + separator + "loved" + separator;
            break;
        default:
            localpath = null;
    }
    if (localpath == null)
    {
        EMessage("sortPicture called with invalid args!");
    }
    else if (localpath == "delete")
    {
        myFile.delete();
        return true;
    }
    else
    {
        return taggedFile.move(getAppPath() + localpath + myFile.getName());
    }
    return false;
}