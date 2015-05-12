'use strict';

module.exports = function(lat1, lon1, lat2, lon2) {

	var degreesToRadians = function (deg) {
		return deg * (Math.PI/180);
	};

	var earthRadius = 6371; // Radius of the earth in km
	
	var latitudeDifference = degreesToRadians(lat2 - lat1);
	var logitudeDifference = degreesToRadians(lon2 - lon1);

	var haversine = 
		Math.sin(latitudeDifference/2) * Math.sin(latitudeDifference/2) +
		Math.cos(degreesToRadians(lat1)) * Math.cos(degreesToRadians(lat2)) * 
		Math.sin(logitudeDifference/2) * Math.sin(logitudeDifference/2); 
	
	var distanceInRadians = 2 * Math.atan2(Math.sqrt(haversine), Math.sqrt(1-haversine)); 

	return earthRadius * distanceInRadians; // Distance in km

};