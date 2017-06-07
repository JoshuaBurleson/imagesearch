<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"/> 
<div class="text-center fluid-container">

# Image Search API

## How to use this API

### Retrieving JSON results for an image search

`https://imgsrchapi.herokuapp.com/freecodecamp`

#### Will retrieve a 10 item JSON object such as [this](https://imgsrchapi.herokuapp.com/freecodecamp)

#### Each item will have the following format:

`{"url":The URL of the image itself,"altText":The alternative text for the image,"thumbnail": URL to a thumbnail of the image as used by Google Image Search results,"context":The URL wherein the image was located by Google on the web}`  

### Paginating through results

#### Each search will yield up to 10 pages of results which may be paginated through

#### Utilize the "offset" query in your search URL as follows:

`https://imgsrchapi.herokuapp.com/freecodecamp?offset=3`

##### Note that entering an offset value greater than 10 or less than one will return the first page of results

### Browsing recent searches

#### The search term and time of the 10 most recent searches is viewable by via:

`https://imgsrchapi.herokuapp.com/api/latest`  

##### This API is a [freeCodeCamp](https://freecodecamp.com) project. Input is welcome and appeciated [click here to contact me](mailto:shojukempo@gmail.com)

</div>