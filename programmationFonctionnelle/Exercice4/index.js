function convertionGris(image) {
    const imageGris = [];

    for (let i = 0; i < image.length; i++) {
        const row = [];
        for (let j = 0; j < image[i].length; j++) {
            const pixel = image[i][j];
            const average = (pixel[0] + pixel[1] + pixel[2]) / 3;
            row.push([average, average, average]);
        }
        imageGris.push(row);
    }

    return imageGris;
}

const image = [
    [[123, 231, 12], [56, 43, 124]],
    [[78, 152, 76], [64, 132, 200]]
];

const imageGris = convertionGris(image);
console.log(imageGris);
