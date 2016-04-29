import React from "react"
import ReactDom from "react-dom"
import Search from "./components/Search"
import Navigation from "./components/Navigation"

class AppComponent extends React.Component{

	constructor() {
		super();
		this.state = {
			searchText: ''
		}
	}

	searchNavigation(searchText) {
		this.setState({searchText});
	}

	render() {
		return (
			<div>
				<Search handleChange={this.searchNavigation.bind(this)} searchText={this.state.searchText} />
				<Navigation searchText={this.state.searchText} navigations={this.props.navigations}/>
			</div>
		);
	}
};

const app = document.getElementById('app');
var navigations = [
   {
      "Id": 238,
      "Name": "Popular",
      "ParentCategoryId": 0,
      "DisplayOrder": -3,
      "Picture": {
         "Id": 13891,
         "MimeType": "image/png",
         "SeoFilename": "popular",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/13891/popular.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 2,
      "Name": "Food",
      "ParentCategoryId": 0,
      "DisplayOrder": -2,
      "Picture": {
         "Id": 13890,
         "MimeType": "image/png",
         "SeoFilename": "food",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/13890/food.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": false
   },
   {
      "Id": 81,
      "Name": "Home & Cleaning",
      "ParentCategoryId": 0,
      "DisplayOrder": -1,
      "Picture": {
         "Id": 13893,
         "MimeType": "image/png",
         "SeoFilename": "home-cleaning",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/13893/home-cleaning.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": false
   },
   {
      "Id": 93,
      "Name": "Noodles & Pasta",
      "ParentCategoryId": 49,
      "DisplayOrder": -1,
      "Picture": {
         "Id": 543,
         "MimeType": "image/jpeg",
         "SeoFilename": "noodles-pasta",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/543/noodles-pasta.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 194,
      "Name": "Soups",
      "ParentCategoryId": 49,
      "DisplayOrder": -1,
      "Picture": {
         "Id": 7843,
         "MimeType": "image/jpeg",
         "SeoFilename": "soups",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/7843/soups.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 1235,
      "Name": "Frozen Fish",
      "ParentCategoryId": 23,
      "DisplayOrder": -1,
      "Picture": {
         "Id": 7840,
         "MimeType": "image/jpeg",
         "SeoFilename": "frozen-fish",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/7840/frozen-fish.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 3,
      "Name": "Office Products",
      "ParentCategoryId": 0,
      "DisplayOrder": 0,
      "Picture": {
         "Id": 13897,
         "MimeType": "image/png",
         "SeoFilename": "office-products",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/13897/office-products.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": false
   },
   {
      "Id": 7,
      "Name": "Fruits & Vegetables",
      "ParentCategoryId": 2,
      "DisplayOrder": 0,
      "Picture": {
         "Id": 476,
         "MimeType": "image/jpeg",
         "SeoFilename": "fruits-vegetables",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/476/fruits-vegetables.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": false
   },
   {
      "Id": 8,
      "Name": "Nuts & Dried Fruits",
      "ParentCategoryId": 100,
      "DisplayOrder": 0,
      "Picture": {
         "Id": 483,
         "MimeType": "image/jpeg",
         "SeoFilename": "nuts-dried-fruits",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/483/nuts-dried-fruits.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 42,
      "Name": "Health Care",
      "ParentCategoryId": 224,
      "DisplayOrder": 0,
      "Picture": {
         "Id": 1683,
         "MimeType": "image/jpeg",
         "SeoFilename": "health-care",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/1683/health-care.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 224,
      "Name": "Beauty & Health",
      "ParentCategoryId": 0,
      "DisplayOrder": 0,
      "Picture": {
         "Id": 13899,
         "MimeType": "image/png",
         "SeoFilename": "beauty-health",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/13899/beauty-health.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": false
   },
   {
      "Id": 225,
      "Name": "Colours",
      "ParentCategoryId": 113,
      "DisplayOrder": 0,
      "Picture": {
         "Id": 1606,
         "MimeType": "image/jpeg",
         "SeoFilename": "colours",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/1606/colours.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 226,
      "Name": "Glue & Tapes",
      "ParentCategoryId": 201,
      "DisplayOrder": 0,
      "Picture": {
         "Id": 1605,
         "MimeType": "image/jpeg",
         "SeoFilename": "glue-tapes",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/1605/glue-tapes.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 227,
      "Name": "Food Supplements",
      "ParentCategoryId": 42,
      "DisplayOrder": 0,
      "Picture": {
         "Id": 1608,
         "MimeType": "image/jpeg",
         "SeoFilename": "food-supplements",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/1608/food-supplements.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 228,
      "Name": "Local Breakfast",
      "ParentCategoryId": 14,
      "DisplayOrder": 0,
      "Picture": {
         "Id": 1613,
         "MimeType": "image/jpeg",
         "SeoFilename": "local-breakfast",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/1613/local-breakfast.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 229,
      "Name": "Pet Care",
      "ParentCategoryId": 0,
      "DisplayOrder": 0,
      "Picture": {
         "Id": 13896,
         "MimeType": "image/png",
         "SeoFilename": "pet-care",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/13896/pet-care.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": false
   },
   {
      "Id": 230,
      "Name": "Batteries",
      "ParentCategoryId": 3,
      "DisplayOrder": 0,
      "Picture": {
         "Id": 1603,
         "MimeType": "image/jpeg",
         "SeoFilename": "batteries",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/1603/batteries.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 232,
      "Name": "Herbal Products",
      "ParentCategoryId": 42,
      "DisplayOrder": 0,
      "Picture": {
         "Id": 1609,
         "MimeType": "image/jpeg",
         "SeoFilename": "herbal-products",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/1609/herbal-products.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 234,
      "Name": "Feeders",
      "ParentCategoryId": 216,
      "DisplayOrder": 0,
      "Picture": {
         "Id": 1646,
         "MimeType": "image/jpeg",
         "SeoFilename": "feeders",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/1646/feeders.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 235,
      "Name": "Energy Boosters",
      "ParentCategoryId": 14,
      "DisplayOrder": 0,
      "Picture": {
         "Id": 1734,
         "MimeType": "image/jpeg",
         "SeoFilename": "energy-boosters",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/1734/energy-boosters.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 1238,
      "Name": "Dried Fish",
      "ParentCategoryId": 23,
      "DisplayOrder": 0,
      "Picture": {
         "Id": 7841,
         "MimeType": "image/jpeg",
         "SeoFilename": "dried-fish",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/7841/dried-fish.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 1240,
      "Name": "Home Appliances",
      "ParentCategoryId": 0,
      "DisplayOrder": 0,
      "Picture": {
         "Id": 21194,
         "MimeType": "image/png",
         "SeoFilename": "home-appliances",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/21194/home-appliances.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 1254,
      "Name": "Cat Food",
      "ParentCategoryId": 229,
      "DisplayOrder": 0,
      "Picture": {
         "Id": 12608,
         "MimeType": "image/jpeg",
         "SeoFilename": "cat-food",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/12608/cat-food.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 1255,
      "Name": "Dog Food",
      "ParentCategoryId": 229,
      "DisplayOrder": 0,
      "Picture": {
         "Id": 12606,
         "MimeType": "image/jpeg",
         "SeoFilename": "dog-food",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/12606/dog-food.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 1256,
      "Name": "Other Pet Foods",
      "ParentCategoryId": 229,
      "DisplayOrder": 0,
      "Picture": {
         "Id": 12792,
         "MimeType": "image/jpeg",
         "SeoFilename": "other-pet-foods",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/12792/other-pet-foods.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 1257,
      "Name": "Pet Accessories",
      "ParentCategoryId": 229,
      "DisplayOrder": 0,
      "Picture": {
         "Id": 12793,
         "MimeType": "image/jpeg",
         "SeoFilename": "pet-accessories",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/12793/pet-accessories.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 1262,
      "Name": "Fresh Fish",
      "ParentCategoryId": 23,
      "DisplayOrder": 0,
      "Picture": {
         "Id": 16637,
         "MimeType": "image/jpeg",
         "SeoFilename": "fresh-fish",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/16637/fresh-fish.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 9,
      "Name": "Tofu & Meat Alternatives",
      "ParentCategoryId": 23,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 1602,
         "MimeType": "image/jpeg",
         "SeoFilename": "tofu-meat-alternatives",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/1602/tofu-meat-alternatives.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 11,
      "Name": "Fresh Fruits",
      "ParentCategoryId": 7,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 482,
         "MimeType": "image/jpeg",
         "SeoFilename": "fresh-fruits",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/482/fresh-fruits.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 12,
      "Name": "Fresh Vegetables",
      "ParentCategoryId": 7,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 480,
         "MimeType": "image/jpeg",
         "SeoFilename": "fresh-vegetables",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/480/fresh-vegetables.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 14,
      "Name": "Breakfast",
      "ParentCategoryId": 2,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 576,
         "MimeType": "image/jpeg",
         "SeoFilename": "breakfast",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/576/breakfast.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": false
   },
   {
      "Id": 16,
      "Name": "Cereals",
      "ParentCategoryId": 14,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 500,
         "MimeType": "image/jpeg",
         "SeoFilename": "cereals",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/500/cereals.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 17,
      "Name": "Beverages",
      "ParentCategoryId": 2,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 574,
         "MimeType": "image/jpeg",
         "SeoFilename": "beverages",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/574/beverages.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": false
   },
   {
      "Id": 18,
      "Name": "Tea & Coffee",
      "ParentCategoryId": 17,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 494,
         "MimeType": "image/jpeg",
         "SeoFilename": "tea-coffee",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/494/tea-coffee.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 19,
      "Name": "Juice",
      "ParentCategoryId": 17,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 495,
         "MimeType": "image/jpeg",
         "SeoFilename": "juice",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/495/juice.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 20,
      "Name": "Soft Drinks",
      "ParentCategoryId": 17,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 496,
         "MimeType": "image/jpeg",
         "SeoFilename": "soft-drinks",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/496/soft-drinks.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 22,
      "Name": "Water",
      "ParentCategoryId": 17,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 497,
         "MimeType": "image/jpeg",
         "SeoFilename": "water",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/497/water.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 23,
      "Name": "Meat & Fish",
      "ParentCategoryId": 2,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 1601,
         "MimeType": "image/jpeg",
         "SeoFilename": "meat-fish",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/1601/meat-fish.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": false
   },
   {
      "Id": 25,
      "Name": "Meat",
      "ParentCategoryId": 23,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 489,
         "MimeType": "image/jpeg",
         "SeoFilename": "meat",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/489/meat.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 30,
      "Name": "Personal Care",
      "ParentCategoryId": 224,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 1684,
         "MimeType": "image/jpeg",
         "SeoFilename": "personal-care",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/1684/personal-care.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 31,
      "Name": "Deodorants",
      "ParentCategoryId": 30,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 596,
         "MimeType": "image/jpeg",
         "SeoFilename": "deodorants",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/596/deodorants.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 32,
      "Name": "Shaving Needs",
      "ParentCategoryId": 30,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 592,
         "MimeType": "image/jpeg",
         "SeoFilename": "shaving-needs",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/592/shaving-needs.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 33,
      "Name": "Hair Care",
      "ParentCategoryId": 30,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 593,
         "MimeType": "image/jpeg",
         "SeoFilename": "hair-care",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/593/hair-care.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 34,
      "Name": "Oral",
      "ParentCategoryId": 30,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 601,
         "MimeType": "image/jpeg",
         "SeoFilename": "oral",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/601/oral.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 35,
      "Name": "Feminine Care",
      "ParentCategoryId": 30,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 595,
         "MimeType": "image/jpeg",
         "SeoFilename": "feminine-care",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/595/feminine-care.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 37,
      "Name": "Skin Care",
      "ParentCategoryId": 30,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 597,
         "MimeType": "image/jpeg",
         "SeoFilename": "skin-care",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/597/skin-care.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 38,
      "Name": "Bath",
      "ParentCategoryId": 30,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 598,
         "MimeType": "image/jpeg",
         "SeoFilename": "bath",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/598/bath.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 39,
      "Name": "Shampoo",
      "ParentCategoryId": 30,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 599,
         "MimeType": "image/jpeg",
         "SeoFilename": "shampoo",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/599/shampoo.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 40,
      "Name": "Handwash",
      "ParentCategoryId": 30,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 539,
         "MimeType": "image/jpeg",
         "SeoFilename": "handwash",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/539/handwash.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 41,
      "Name": "Tissue & Wipes",
      "ParentCategoryId": 30,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 1610,
         "MimeType": "image/jpeg",
         "SeoFilename": "tissue-wipes",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/1610/tissue-wipes.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 43,
      "Name": "Antacids & Digestive Aids",
      "ParentCategoryId": 42,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 1607,
         "MimeType": "image/jpeg",
         "SeoFilename": "antacids-digestive-aids",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/1607/antacids-digestive-aids.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 46,
      "Name": "First Aid",
      "ParentCategoryId": 42,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 1621,
         "MimeType": "image/jpeg",
         "SeoFilename": "first-aid",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/1621/first-aid.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 47,
      "Name": "Family Planning",
      "ParentCategoryId": 42,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 1598,
         "MimeType": "image/jpeg",
         "SeoFilename": "family-planning",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/1598/family-planning.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 49,
      "Name": "Snacks",
      "ParentCategoryId": 2,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 544,
         "MimeType": "image/jpeg",
         "SeoFilename": "snacks",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/544/snacks.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 50,
      "Name": "Cookies",
      "ParentCategoryId": 72,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 1617,
         "MimeType": "image/jpeg",
         "SeoFilename": "cookies",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/1617/cookies.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 51,
      "Name": "Candy & Chocolate",
      "ParentCategoryId": 49,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 7842,
         "MimeType": "image/jpeg",
         "SeoFilename": "candy-chocolate",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/7842/candy-chocolate.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 52,
      "Name": "Local Snacks",
      "ParentCategoryId": 49,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 1611,
         "MimeType": "image/jpeg",
         "SeoFilename": "local-snacks",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/1611/local-snacks.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 53,
      "Name": "Chips & Pretzels",
      "ParentCategoryId": 49,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 502,
         "MimeType": "image/jpeg",
         "SeoFilename": "chips-pretzels",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/502/chips-pretzels.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 54,
      "Name": "Jam & Spreads",
      "ParentCategoryId": 14,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 503,
         "MimeType": "image/jpeg",
         "SeoFilename": "jam-spreads",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/503/jam-spreads.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 56,
      "Name": "Popcorn & Nuts",
      "ParentCategoryId": 49,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 505,
         "MimeType": "image/jpeg",
         "SeoFilename": "popcorn-nuts",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/505/popcorn-nuts.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 58,
      "Name": "Dairy",
      "ParentCategoryId": 2,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 508,
         "MimeType": "image/jpeg",
         "SeoFilename": "dairy",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/508/dairy.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": false
   },
   {
      "Id": 59,
      "Name": "Butter & Sour Cream",
      "ParentCategoryId": 58,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 509,
         "MimeType": "image/jpeg",
         "SeoFilename": "butter-sour-cream",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/509/butter-sour-cream.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 60,
      "Name": "Cheese",
      "ParentCategoryId": 58,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 510,
         "MimeType": "image/jpeg",
         "SeoFilename": "cheese",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/510/cheese.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 61,
      "Name": "Eggs",
      "ParentCategoryId": 58,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 512,
         "MimeType": "image/jpeg",
         "SeoFilename": "eggs",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/512/eggs.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 62,
      "Name": "Milk & Cream",
      "ParentCategoryId": 58,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 511,
         "MimeType": "image/jpeg",
         "SeoFilename": "milk-cream",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/511/milk-cream.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 64,
      "Name": "Yogurt",
      "ParentCategoryId": 58,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 513,
         "MimeType": "image/jpeg",
         "SeoFilename": "yogurt",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/513/yogurt.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 65,
      "Name": "Frozen & Canned",
      "ParentCategoryId": 2,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 1600,
         "MimeType": "image/jpeg",
         "SeoFilename": "frozen-canned",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/1600/frozen-canned.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 72,
      "Name": "Bread & Bakery",
      "ParentCategoryId": 2,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 530,
         "MimeType": "image/jpeg",
         "SeoFilename": "bread-bakery",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/530/bread-bakery.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": false
   },
   {
      "Id": 73,
      "Name": "Bakery Snacks",
      "ParentCategoryId": 72,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 1618,
         "MimeType": "image/jpeg",
         "SeoFilename": "bakery-snacks",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/1618/bakery-snacks.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 74,
      "Name": "Breads",
      "ParentCategoryId": 72,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 560,
         "MimeType": "image/jpeg",
         "SeoFilename": "breads",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/560/breads.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 75,
      "Name": "Biscuits",
      "ParentCategoryId": 49,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 577,
         "MimeType": "image/jpeg",
         "SeoFilename": "biscuits",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/577/biscuits.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 76,
      "Name": "Dips & Spreads",
      "ParentCategoryId": 72,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 559,
         "MimeType": "image/jpeg",
         "SeoFilename": "dips-spreads",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/559/dips-spreads.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 77,
      "Name": "Honey",
      "ParentCategoryId": 72,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 528,
         "MimeType": "image/jpeg",
         "SeoFilename": "honey",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/528/honey.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 78,
      "Name": "Pickels",
      "ParentCategoryId": 104,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 580,
         "MimeType": "image/jpeg",
         "SeoFilename": "pickels",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/580/pickels.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 79,
      "Name": "Salad Dressing",
      "ParentCategoryId": 49,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 529,
         "MimeType": "image/jpeg",
         "SeoFilename": "salad-dressing",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/529/salad-dressing.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 80,
      "Name": "Rice",
      "ParentCategoryId": 104,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 588,
         "MimeType": "image/jpeg",
         "SeoFilename": "rice",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/588/rice.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 82,
      "Name": "Air Freshners",
      "ParentCategoryId": 81,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 583,
         "MimeType": "image/jpeg",
         "SeoFilename": "air-freshners",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/583/air-freshners.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 83,
      "Name": "Dish Detergents",
      "ParentCategoryId": 81,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 587,
         "MimeType": "image/jpeg",
         "SeoFilename": "dish-detergents",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/587/dish-detergents.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 84,
      "Name": "Cleaning Supplies",
      "ParentCategoryId": 81,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 515,
         "MimeType": "image/jpeg",
         "SeoFilename": "cleaning-supplies",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/515/cleaning-supplies.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 85,
      "Name": "Kitchen Accessories",
      "ParentCategoryId": 81,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 516,
         "MimeType": "image/jpeg",
         "SeoFilename": "kitchen-accessories",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/516/kitchen-accessories.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 86,
      "Name": "Laundry",
      "ParentCategoryId": 81,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 584,
         "MimeType": "image/jpeg",
         "SeoFilename": "laundry",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/584/laundry.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 87,
      "Name": "Napkins & Paper Products",
      "ParentCategoryId": 81,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 1654,
         "MimeType": "image/jpeg",
         "SeoFilename": "napkins-paper-products",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/1654/napkins-paper-products.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 88,
      "Name": "Pest Control",
      "ParentCategoryId": 81,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 585,
         "MimeType": "image/jpeg",
         "SeoFilename": "pest-control",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/585/pest-control.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 89,
      "Name": "Shoe Care",
      "ParentCategoryId": 81,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 520,
         "MimeType": "image/jpeg",
         "SeoFilename": "shoe-care",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/520/shoe-care.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 90,
      "Name": "Tableware & Trash Bags",
      "ParentCategoryId": 81,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 522,
         "MimeType": "image/jpeg",
         "SeoFilename": "tableware-trash-bags",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/522/tableware-trash-bags.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 91,
      "Name": "Food Storage",
      "ParentCategoryId": 81,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 521,
         "MimeType": "image/jpeg",
         "SeoFilename": "food-storage",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/521/food-storage.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 100,
      "Name": "Baking Needs",
      "ParentCategoryId": 2,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 523,
         "MimeType": "image/jpeg",
         "SeoFilename": "baking-needs",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/523/baking-needs.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 101,
      "Name": "Baking & Dessert Mixes",
      "ParentCategoryId": 100,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 1614,
         "MimeType": "image/jpeg",
         "SeoFilename": "baking-dessert-mixes",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/1614/baking-dessert-mixes.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 102,
      "Name": "Baking Ingredients",
      "ParentCategoryId": 100,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 524,
         "MimeType": "image/jpeg",
         "SeoFilename": "baking-ingredients",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/524/baking-ingredients.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 103,
      "Name": "Flour",
      "ParentCategoryId": 100,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 525,
         "MimeType": "image/jpeg",
         "SeoFilename": "flour",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/525/flour.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 104,
      "Name": "Cooking",
      "ParentCategoryId": 2,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 573,
         "MimeType": "image/jpeg",
         "SeoFilename": "cooking",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/573/cooking.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": false
   },
   {
      "Id": 107,
      "Name": "Spices",
      "ParentCategoryId": 104,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 562,
         "MimeType": "image/jpeg",
         "SeoFilename": "spices",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/562/spices.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 108,
      "Name": "Oil",
      "ParentCategoryId": 104,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 563,
         "MimeType": "image/jpeg",
         "SeoFilename": "oil",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/563/oil.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 109,
      "Name": "Ghee",
      "ParentCategoryId": 104,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 1615,
         "MimeType": "image/jpeg",
         "SeoFilename": "ghee",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/1615/ghee.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 110,
      "Name": "Ready Mix",
      "ParentCategoryId": 104,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 561,
         "MimeType": "image/jpeg",
         "SeoFilename": "ready-mix",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/561/ready-mix.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 111,
      "Name": "Salt & Sugar",
      "ParentCategoryId": 104,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 589,
         "MimeType": "image/jpeg",
         "SeoFilename": "salt-sugar",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/589/salt-sugar.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 113,
      "Name": "Writing & Drawing",
      "ParentCategoryId": 3,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 1599,
         "MimeType": "image/jpeg",
         "SeoFilename": "writing-drawing",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/1599/writing-drawing.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 114,
      "Name": "Pens",
      "ParentCategoryId": 113,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 565,
         "MimeType": "image/jpeg",
         "SeoFilename": "pens",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/565/pens.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 115,
      "Name": "Pencils",
      "ParentCategoryId": 113,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 566,
         "MimeType": "image/jpeg",
         "SeoFilename": "pencils",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/566/pencils.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 116,
      "Name": "Highlighters & Markers",
      "ParentCategoryId": 113,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 567,
         "MimeType": "image/jpeg",
         "SeoFilename": "highlighters-markers",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/567/highlighters-markers.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 117,
      "Name": "Erasers & Correction Fluid",
      "ParentCategoryId": 113,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 568,
         "MimeType": "image/jpeg",
         "SeoFilename": "erasers-correction-fluid",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/568/erasers-correction-fluid.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 119,
      "Name": "Notebooks",
      "ParentCategoryId": 113,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 591,
         "MimeType": "image/jpeg",
         "SeoFilename": "notebooks",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/591/notebooks.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 189,
      "Name": "Syrups & Powder Drinks",
      "ParentCategoryId": 17,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 498,
         "MimeType": "image/jpeg",
         "SeoFilename": "syrups-powder-drinks",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/498/syrups-powder-drinks.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 190,
      "Name": "Talcom Powder",
      "ParentCategoryId": 30,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 1620,
         "MimeType": "image/jpeg",
         "SeoFilename": "talcom-powder",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/1620/talcom-powder.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 191,
      "Name": "Diabetic Sugar",
      "ParentCategoryId": 42,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 590,
         "MimeType": "image/jpeg",
         "SeoFilename": "diabetic-sugar",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/590/diabetic-sugar.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 192,
      "Name": "Antiseptics",
      "ParentCategoryId": 42,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 602,
         "MimeType": "image/jpeg",
         "SeoFilename": "antiseptics",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/602/antiseptics.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 193,
      "Name": "Sauces",
      "ParentCategoryId": 49,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 586,
         "MimeType": "image/jpeg",
         "SeoFilename": "sauces",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/586/sauces.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 195,
      "Name": "Frozen Snacks",
      "ParentCategoryId": 65,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 1616,
         "MimeType": "image/jpeg",
         "SeoFilename": "frozen-snacks",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/1616/frozen-snacks.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 196,
      "Name": "Cakes",
      "ParentCategoryId": 72,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 579,
         "MimeType": "image/jpeg",
         "SeoFilename": "cakes",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/579/cakes.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 197,
      "Name": "Canned Food",
      "ParentCategoryId": 65,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 558,
         "MimeType": "image/jpeg",
         "SeoFilename": "canned-food",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/558/canned-food.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 198,
      "Name": "Dal or Lentil",
      "ParentCategoryId": 104,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 564,
         "MimeType": "image/jpeg",
         "SeoFilename": "dal-or-lentil",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/564/dal-or-lentil.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 200,
      "Name": "Miscellaneous",
      "ParentCategoryId": 104,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 1619,
         "MimeType": "image/jpeg",
         "SeoFilename": "miscellaneous",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/1619/miscellaneous.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 201,
      "Name": "Organizing",
      "ParentCategoryId": 3,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 531,
         "MimeType": "image/jpeg",
         "SeoFilename": "organizing",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/531/organizing.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 202,
      "Name": "Hardware",
      "ParentCategoryId": 201,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 569,
         "MimeType": "image/jpeg",
         "SeoFilename": "hardware",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/569/hardware.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 203,
      "Name": "Files & Folders",
      "ParentCategoryId": 201,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 570,
         "MimeType": "image/jpeg",
         "SeoFilename": "files-folders",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/570/files-folders.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 204,
      "Name": "Cutting",
      "ParentCategoryId": 201,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 571,
         "MimeType": "image/jpeg",
         "SeoFilename": "cutting",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/571/cutting.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 205,
      "Name": "Envelopes & Stickers",
      "ParentCategoryId": 201,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 572,
         "MimeType": "image/jpeg",
         "SeoFilename": "envelopes-stickers",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/572/envelopes-stickers.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 206,
      "Name": "Printing",
      "ParentCategoryId": 3,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 532,
         "MimeType": "image/jpeg",
         "SeoFilename": "printing",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/532/printing.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": false
   },
   {
      "Id": 207,
      "Name": "Paper",
      "ParentCategoryId": 206,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 533,
         "MimeType": "image/jpeg",
         "SeoFilename": "paper",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/533/paper.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 208,
      "Name": "Toner & Ink",
      "ParentCategoryId": 206,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 1604,
         "MimeType": "image/jpeg",
         "SeoFilename": "toner-ink",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/1604/toner-ink.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 209,
      "Name": "Baby Care",
      "ParentCategoryId": 0,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 13895,
         "MimeType": "image/png",
         "SeoFilename": "baby-care",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/13895/baby-care.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": false
   },
   {
      "Id": 210,
      "Name": "Diapering",
      "ParentCategoryId": 209,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 546,
         "MimeType": "image/jpeg",
         "SeoFilename": "diapering",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/546/diapering.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 211,
      "Name": "Diapers",
      "ParentCategoryId": 210,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 1651,
         "MimeType": "image/jpeg",
         "SeoFilename": "diapers",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/1651/diapers.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 212,
      "Name": "Wipes",
      "ParentCategoryId": 210,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 1649,
         "MimeType": "image/jpeg",
         "SeoFilename": "wipes",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/1649/wipes.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 216,
      "Name": "Fooding",
      "ParentCategoryId": 209,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 1653,
         "MimeType": "image/jpeg",
         "SeoFilename": "fooding",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/1653/fooding.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": false
   },
   {
      "Id": 217,
      "Name": "Formula",
      "ParentCategoryId": 216,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 552,
         "MimeType": "image/jpeg",
         "SeoFilename": "formula",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/552/formula.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 219,
      "Name": "Baby & Toddler Food",
      "ParentCategoryId": 216,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 1647,
         "MimeType": "image/jpeg",
         "SeoFilename": "baby-toddler-food",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/1647/baby-toddler-food.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 221,
      "Name": "Milk, Juice & Drinks",
      "ParentCategoryId": 216,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 556,
         "MimeType": "image/jpeg",
         "SeoFilename": "milk-juice-drinks",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/556/milk-juice-drinks.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 223,
      "Name": "Bath & Skincare",
      "ParentCategoryId": 209,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 1648,
         "MimeType": "image/jpeg",
         "SeoFilename": "bath-skincare",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/1648/bath-skincare.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   },
   {
      "Id": 1261,
      "Name": "Adult Diapers",
      "ParentCategoryId": 42,
      "DisplayOrder": 1,
      "Picture": {
         "Id": 17871,
         "MimeType": "image/jpeg",
         "SeoFilename": "adult-diapers",
         "ImageUrl": "https://d21jn5nyp06yex.cloudfront.net/cdn/p/17871/adult-diapers.jpeg",
         "PictureBinary": null
      },
      "ContainsProducts": true
   }
];

ReactDom.render(
	<AppComponent navigations={navigations} />,
	app
)