import sharp from 'sharp';
await sharp('public/images/hero-source.png').webp({quality:88}).toFile('public/images/hero.webp');
const source='public/images/collection-source.png';
const {width,height}=await sharp(source).metadata();
for(let i=0;i<6;i++){
 const left=Math.round((i%3)*width/3), top=Math.round(Math.floor(i/3)*height/2);
 const right=Math.round((i%3+1)*width/3), bottom=Math.round((Math.floor(i/3)+1)*height/2);
 await sharp(source).extract({left,top,width:right-left,height:bottom-top}).webp({quality:90}).toFile(`public/images/product-${i+1}.webp`);
}
console.log('Optimized hero and six product assets.');
