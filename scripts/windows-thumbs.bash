#!/bin/bash
echo "Creating thumb images"
rm -rf public/thumbs
mkdir public/thumbs
count=0
for file in `find public/images/ -type f -name "*.png" -or -name "*.jpg"`
do
	filename=$(basename -- "$file")
	extension="${filename##*.}"
	filename="${filename%.*}"
	"C:\Program Files\ImageMagick-7.1.0-Q16-HDRI\convert.exe" ${file} -resize 240x public/thumbs/${filename}.${extension}
	let "count += 1"
done
echo "Total prepared ${count} image(s)"