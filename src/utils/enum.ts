export const getEnumKeys = <T>(enumObject: T) => {
	return Object.keys(enumObject).filter((key) => isNaN(Number(key)));
};

export const enumToObject = <T>(enumType: T) => {
	const keys = getEnumKeys<T>(enumType);
	return keys.reduce((obj, key) => {
		obj[key] = enumType[key];
		return obj;
	}, {} as T);
};
