import React from "react";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

export default class LocationService {
	static getLocation = async () => {
		let coordinates = {};

		let { status } = await Permissions.askAsync(Permissions.LOCATION);

		if (status === "granted") {
			try {
				let location = await Location.getCurrentPositionAsync({
					enableHighAccuracy: false
				});

				if (location && location.coords) {
					coordinates = {
						latitude: location.coords.latitude,
						longitude: location.coords.longitude
					};
				}
			} catch (e) {}
		}

		return coordinates;
	};
}
