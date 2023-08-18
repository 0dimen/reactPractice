export default function getImagerUrl(imageId, size = 's'){
    let Size = size < 90 ? 's' : 'b';
    return(
        'https://i.imgur.com/' +
        imageId +
        size +
        '.jpg'
    );
}