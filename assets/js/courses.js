const coursesSectionContent = document.querySelector(".section-content");
const categoriesContaier = document.querySelector(".filter-items");
const categories = document.querySelectorAll(".filter-item");
const categoriesList = {
  all: { title: "All", id: "0" },
  one: { title: "Category One", id: "1" },
  two: { title: "Category Two", id: "2" },
  three: { title: "Category Three", id: "3" },
};

const courses = {
  0: {
    id: '0',
    category: "category-one",
    title: "Lorem ipsum dolor sit amet consectetur.",
    imgSrc: "https://picsum.photos/id/123/260/115",
  },
  1: {
    id: '1',
    category: "category-one",
    title: "Lorem ipsum dolor sit amet consectetur.",
    imgSrc: "https://picsum.photos/id/124/260/115",
  },
  2: {
    id: '2',
    category: "category-two",
    title: "Lorem ipsum dolor sit amet consectetur.",
    imgSrc: "https://picsum.photos/id/125/260/115",
  },
  3: {
    id: '3',
    category: "category-two",
    title: "Lorem ipsum dolor sit amet consectetur.",
    imgSrc: "https://picsum.photos/id/126/260/115",
  },
  4: {
    id: '4',
    category: "category-two",
    title: "Lorem ipsum dolor sit amet consectetur.",
    imgSrc: "https://picsum.photos/id/127/260/115",
  },
  5: {
    id: '5',
    category: "category-three",
    title: "Lorem ipsum dolor sit amet consectetur.",
    imgSrc: "https://picsum.photos/id/128/260/115",
  },
};

const AddCoursesContent = ({ id, category, title, imgSrc }) => {
  coursesSectionContent.innerHTML += `
    <div class="course-content my-3" id="${id}" data-category="${category}">
      <a href="">
        <div class="course-card">
          <img src="${imgSrc}" alt="">
          <div class="course-info">
            <div class="course-title">
              <h2>${title}</h2>
            </div>
          </div>
        </div>
      </a>
    </div>
  `;
};

for (const [key, {id, category, title, imgSrc }] of Object.entries(courses)) {
  AddCoursesContent({ id, category, title, imgSrc });
}


categoriesContaier.addEventListener('click', (e) => {
  const categoryItem = e.target.closest(".filter-item");
  coursesSectionContent.innerHTML = '';
  if (categoryItem) {
    for (const [key, { id, category, title, imgSrc }] of Object.entries(
      courses
    )) {
      if (categoryItem.id === category) AddCoursesContent({ id, category, title, imgSrc });
      if (categoryItem.id === 'category-all') AddCoursesContent({ id, category, title, imgSrc });
    }
  };
})