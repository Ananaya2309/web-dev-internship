const skills = [
{
    title:"Web Development",
    level:"Beginner",
    rating:"⭐ 4.9",
    description:"Learn HTML, CSS and JavaScript."
},

{
    title:"Artificial Intelligence",
    level:"Advanced",
    rating:"⭐ 5.0",
    description:"Build smart AI applications."
},

{
    title:"Data Analytics",
    level:"Intermediate",
    rating:"⭐ 4.8",
    description:"Analyze and visualize data."
},

{
    title:"UI/UX Design",
    level:"Beginner",
    rating:"⭐ 4.7",
    description:"Design beautiful interfaces."
},

{
    title:"App Development",
    level:"Intermediate",
    rating:"⭐ 4.8",
    description:"Create Android and iOS apps."
},

{
    title:"Machine Learning",
    level:"Advanced",
    rating:"⭐ 5.0",
    description:"Train intelligent models."
}

];

const cardContainer =
document.getElementById("cardContainer");

const searchInput =
document.getElementById("searchInput");

const noResult =
document.getElementById("noResult");


// Function to Display Cards

function displayCards(data){

cardContainer.innerHTML = "";

if(data.length === 0){

    noResult.style.display = "block";

    return;
}

noResult.style.display = "none";

data.forEach(skill => {

cardContainer.innerHTML += `

<div class="card">

<h2>${skill.title}</h2>

<span class="badge">
${skill.level}
</span>

<p class="rating">
${skill.rating}
</p>

<p>
${skill.description}
</p>

<button>
View Course
</button>

</div>

`;

});

}


// Initial Cards Display

displayCards(skills);


// Search Functionality

searchInput.addEventListener("keyup", function(){

const searchValue =
searchInput.value.toLowerCase();

const filteredSkills =
skills.filter(skill =>

skill.title
.toLowerCase()
.includes(searchValue)

);

displayCards(filteredSkills);

});