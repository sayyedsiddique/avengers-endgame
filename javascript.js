const polygonAmerica = document.getElementsByTagName("polygon");
const svgImageEle = document.querySelector("svg image");
const characterNameEle = document.querySelector(
  ".text-container .character-name"
);
const characterTitleEle = document.querySelector(
  ".text-container .character-title"
);
const characterDescEle = document.querySelector(
  ".text-container .character-description"
);

const captainAmericaImageSrc = "./assets/captain-america.jpg";
const tonyStarkImageSrc = "./assets/tony-stark.jpg";
const thorImageSrc = "./assets/thor.jpg";
const captainMarvelImageSrc = "./assets/captain-marvel.jpg";
const hulkImageSrc = "./assets/hulk.jpg";
const blackWidowImageSrc = "./assets/black-widow.jpg";
const okoyeImageSrc = "./assets/okoye.jpg";
const hawkEyeImageSrc = "./assets/hawk-eye.jpg";
const racoonImageSrc = "./assets/racoon.jpg";
const antManImageSrc = "./assets/ant-man.jpg";
const nebullaImageSrc = "./assets/nebulla.jpg";
const warMachineImageSrc = "./assets/war-machine.jpg";
const thanosImageSrc = "./assets/thanos.jpg";

console.log("polygon ", polygonAmerica);

for (const element of polygonAmerica) {
  element.addEventListener("click", function () {
    const currentImageSrc = svgImageEle.getAttribute("xlink:href");
    console.log("Element clicked:", element.classList.value);
    switch (element.classList.value) {
      case "captain-america":
        if (currentImageSrc !== captainAmericaImageSrc) {
          // Example: Changing the src attribute
          svgImageEle.setAttributeNS(
            "http://www.w3.org/1999/xlink",
            "xlink:href",
            captainAmericaImageSrc
          );

          //   Changing all text of character
          characterNameEle.innerHTML = "Steve Rogers";
          characterTitleEle.innerHTML = "Captain America";
          characterDescEle.innerHTML =
            "Recipient of the Super-Soldier serum, World War II hero Steve Rogers fights for American ideals as one of the world’s mightiest heroes and the leader of the Avengers.";
        } else {
          console.log("Image source is already set to the new value.");
        }
        break;
      case "tony-stark":
        if (currentImageSrc !== tonyStarkImageSrc) {
          // Example: Changing the src attribute
          svgImageEle.setAttributeNS(
            "http://www.w3.org/1999/xlink",
            "xlink:href",
            tonyStarkImageSrc
          );

          //   Changing all text of character
          characterNameEle.innerHTML = "Tony Stark";
          characterTitleEle.innerHTML = "Iron Man";
          characterDescEle.innerHTML =
            "Genius. Billionaire. Playboy. Philanthropist. Tony Stark's confidence is only matched by his high-flying abilities as the hero called Iron Man.";
        } else {
          console.log("Image source is already set to the new value.");
        }
        break;
      case "thor":
        if (currentImageSrc !== thorImageSrc) {
          // Example: Changing the src attribute
          svgImageEle.setAttributeNS(
            "http://www.w3.org/1999/xlink",
            "xlink:href",
            thorImageSrc
          );

          //   Changing all text of character
          characterNameEle.innerHTML = "Thor Odinson";
          characterTitleEle.innerHTML = "Thor";
          characterDescEle.innerHTML =
            "The son of Odin uses his mighty abilities as the God of Thunder to protect his home Asgard and planet Earth alike.";
        } else {
          console.log("Image source is already set to the new value.");
        }
        break;
      case "captain-marvel":
        if (currentImageSrc !== captainMarvelImageSrc) {
          // Example: Changing the src attribute
          svgImageEle.setAttributeNS(
            "http://www.w3.org/1999/xlink",
            "xlink:href",
            captainMarvelImageSrc
          );

          //   Changing all text of character
          characterNameEle.innerHTML = "Carol Danvers";
          characterTitleEle.innerHTML = "Captain Marvel";
          characterDescEle.innerHTML =
            "Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.";
        } else {
          console.log("Image source is already set to the new value.");
        }
        break;
      case "hulk":
        if (currentImageSrc !== hulkImageSrc) {
          // Example: Changing the src attribute
          svgImageEle.setAttributeNS(
            "http://www.w3.org/1999/xlink",
            "xlink:href",
            hulkImageSrc
          );

          //   Changing all text of character
          characterNameEle.innerHTML = "Bruce Banner";
          characterTitleEle.innerHTML = "Hulk";
          characterDescEle.innerHTML =
            "Dr. Bruce Banner lives a life caught between the soft-spoken scientist he’s always been and the uncontrollable green monster powered by his rage.";
        } else {
          console.log("Image source is already set to the new value.");
        }
        break;
      case "black-widow":
        if (currentImageSrc !== blackWidowImageSrc) {
          // Example: Changing the src attribute
          svgImageEle.setAttributeNS(
            "http://www.w3.org/1999/xlink",
            "xlink:href",
            blackWidowImageSrc
          );

          //   Changing all text of character
          characterNameEle.innerHTML = "Natasha Romanoff";
          characterTitleEle.innerHTML = "Black Widow";
          characterDescEle.innerHTML =
            "Military veteran James Rhodes is ready for combat in his advanced armor, adding a formidable arsenal to Tony Stark-created designs.";
        } else {
          console.log("Image source is already set to the new value.");
        }
        break;
      case "okoye":
        if (currentImageSrc !== okoyeImageSrc) {
          // Example: Changing the src attribute
          svgImageEle.setAttributeNS(
            "http://www.w3.org/1999/xlink",
            "xlink:href",
            okoyeImageSrc
          );

          //   Changing all text of character
          characterNameEle.innerHTML = "Okoye";
          characterTitleEle.innerHTML = "Okoye";
          characterDescEle.innerHTML =
            "Okoye is the General of the Dora Milaje and the head of Wakandan armed forces and intel. Witnessing T'Challa's coronation, she joins him in tracking down Ulysses Klaue.";
        } else {
          console.log("Image source is already set to the new value.");
        }
        break;
      case "hawk-eye":
        if (currentImageSrc !== hawkEyeImageSrc) {
          // Example: Changing the src attribute
          svgImageEle.setAttributeNS(
            "http://www.w3.org/1999/xlink",
            "xlink:href",
            hawkEyeImageSrc
          );

          //   Changing all text of character
          characterNameEle.innerHTML = "Clint Barton";
          characterTitleEle.innerHTML = "Hawkeye";
          characterDescEle.innerHTML =
            "A master marksman and longtime friend of Black Widow, Clint Barton serves as the Avengers’ amazing archer.";
        } else {
          console.log("Image source is already set to the new value.");
        }
        break;
      case "racoon":
        if (currentImageSrc !== racoonImageSrc) {
          // Example: Changing the src attribute
          svgImageEle.setAttributeNS(
            "http://www.w3.org/1999/xlink",
            "xlink:href",
            racoonImageSrc
          );

          //   Changing all text of character
          characterNameEle.innerHTML = "89P13";
          characterTitleEle.innerHTML = "Rocket";
          characterDescEle.innerHTML =
            "89P13 is a genetically enhanced creature turned freelance criminal, calling himself Rocket. Alongside his friend and partner Groot, Rocket travels the galaxy picking up bounties.";
        } else {
          console.log("Image source is already set to the new value.");
        }
        break;
      case "ant-man":
        if (currentImageSrc !== antManImageSrc) {
          // Example: Changing the src attribute
          svgImageEle.setAttributeNS(
            "http://www.w3.org/1999/xlink",
            "xlink:href",
            antManImageSrc
          );

          //   Changing all text of character
          characterNameEle.innerHTML = "Scott Lang";
          characterTitleEle.innerHTML = "Ant-Man";
          characterDescEle.innerHTML =
            "Scott Edward Harris Lang is a former criminal who was convinced by Hank Pym to take up his mantle as the new Ant-Man.";
        } else {
          console.log("Image source is already set to the new value.");
        }
        break;
      case "nebulla":
        if (currentImageSrc !== nebullaImageSrc) {
          // Example: Changing the src attribute
          svgImageEle.setAttributeNS(
            "http://www.w3.org/1999/xlink",
            "xlink:href",
            nebullaImageSrc
          );

          //   Changing all text of character
          characterNameEle.innerHTML = "Nebula";
          characterTitleEle.innerHTML = "Nebula";
          characterDescEle.innerHTML =
            "Nebula is a Luphomoid assassin, an adopted daughter of the intergalactic warlord Thanos and adopted sister of Gamora. As the right-hand woman of Ronan the Accuser during his and Thanos' quest to retrieve the Orb, she helped him fight the Guardians of the Galaxy during the Battle of Xandar.";
        } else {
          console.log("Image source is already set to the new value.");
        }
        break;
      case "war-machine":
        if (currentImageSrc !== warMachineImageSrc) {
          // Example: Changing the src attribute
          svgImageEle.setAttributeNS(
            "http://www.w3.org/1999/xlink",
            "xlink:href",
            warMachineImageSrc
          );

          //   Changing all text of character
          characterNameEle.innerHTML = "James Rhodes";
          characterTitleEle.innerHTML = "War Machine";
          characterDescEle.innerHTML =
            "Military veteran James Rhodes is ready for combat in his advanced armor, adding a formidable arsenal to Tony Stark-created designs.";
        } else {
          console.log("Image source is already set to the new value.");
        }
        break;
      case "thanos":
        if (currentImageSrc !== thanosImageSrc) {
          // Example: Changing the src attribute
          svgImageEle.setAttributeNS(
            "http://www.w3.org/1999/xlink",
            "xlink:href",
            thanosImageSrc
          );

          //   Changing all text of character
          characterNameEle.innerHTML = "Thanos";
          characterTitleEle.innerHTML = "Thanos";
          characterDescEle.innerHTML =
            "The Mad Titan Thanos quests across the universe in search of the Infinity Stones, intending to use their limitless power for shocking purposes.";
        } else {
          console.log("Image source is already set to the new value.");
        }
        break;
      default:
    }
  });
}
// polygonAmerica.addEventListener("click", () => {
//   const currentImageSrc = svgImageEle.getAttribute("xlink:href");

//   if (currentImageSrc !== captainAmericaImageSrc) {
//     // Example: Changing the src attribute
//     svgImageEle.setAttributeNS(
//       "http://www.w3.org/1999/xlink",
//       "xlink:href",
//       "./assets/captain-america.jpg"
//     );
//   } else {
//     console.log("Image source is already set to the new value.");
//   }

// });
