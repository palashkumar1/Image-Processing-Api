Image processing API

It is an express server which is able to take images located in a folder and create a resized thumb version of it and save it on the disk. Once created a thumb version it just serves the processed image through the api endpoint.

List available images which can be accessed through the endpoint:
http://localhost:3000/api/listImages

Create thumb version of image
http://localhost:3000/api/images/?filename={filename}&height={height}&width={height}}
For eg = http://localhost:3000/api/images/?filename=fjord&height=100&width=100
