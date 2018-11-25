export const checkQuery = () => { 
	let currentLink = window.location.href;
	return currentLink[currentLink.length - 1] == "_" || currentLink.includes("bit.ly");
};

export const getTrackIds = (url) => {

	//spltitting string in an array:
	let res = url.split("_");
	//As the string should be something like "_da33sd2a1sda_a4s4mmn_" remove the first and last one
	res = res.slice(1,res.length -1);

  return res
}