const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const makeListImagesMarkup = ({ url, alt }) => {
  return `
  <li class="list-img">
  <img src=${url} alt=${alt} width="820">
</li>
`
};

const makeListImg = images.map(makeListImagesMarkup).join(" ");
const galleryEl = document.querySelector(".gallery")
console.log(galleryEl);
galleryEl.insertAdjacentHTML('beforeend', makeListImg);

const imageItemEl = document.querySelector(".gallery");
imageItemEl.style.cssText = `
    display: flex;
    list-style-type: none;
    flex-direction: column;
    align-items: center;
    gap: 50px;
`;


