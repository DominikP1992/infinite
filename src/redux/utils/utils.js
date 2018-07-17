const getImageUrl = image => `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_q.jpg`;

export const updateData = photos => photos.map(photo => ({ ...photo, url: getImageUrl(photo) }));

