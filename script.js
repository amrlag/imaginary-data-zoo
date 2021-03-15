const zoo=
[ 
    {"id":{"$oid":"60461f6efc13ae2ea6000000"},"animal":"Painted stork","scientificname":"Mycteria leucocephala","amount":9,"location":"Philadelphia"},
    {"id":{"$oid":"60461f6efc13ae2ea6000001"},"animal":"Barbet, levaillant's","scientificname":"Trachyphonus vaillantii","amount":46,"location":"Velikooktyabr’skiy"},
    {"id":{"$oid":"60461f6efc13ae2ea6000002"},"animal":"Oryx, fringe-eared","scientificname":"Oryx gazella callotis","amount":56,"location":"Registro"},
    {"id":{"$oid":"60461f6efc13ae2ea6000003"},"animal":"Gila monster","scientificname":"Heloderma horridum","amount":8,"location":"Trashigang"},
    {"id":{"$oid":"60461f6efc13ae2ea6000004"},"animal":"Dove, laughing","scientificname":"Streptopelia senegalensis","amount":3,"location":"Seattle"},
    {"id":{"$oid":"60461f6efc13ae2ea6000005"},"animal":"Malagasy ground boa","scientificname":"Acrantophis madagascariensis","amount":12,"location":"Yako"},
    {"id":{"$oid":"60461f6efc13ae2ea6000006"},"animal":"Dunnart, fat-tailed","scientificname":"Smithopsis crassicaudata","amount":23,"location":"Arvidsjaur"},
    {"id":{"$oid":"60461f6efc13ae2ea6000007"},"animal":"Otter, african clawless","scientificname":"Aonyx capensis","amount":71,"location":"Zhize"}
]

const zooElements=zoo.map((listAnimals) => {

    const listAnimalsElement=document.createElement("div");

    const attributeList=document.createElement("ul");

    const idElement=document.createElement("li");
    const animalElement=document.createElement("li");
    const scientificNameElement=document.createElement("li");
    const amountElement=document.createElement("li");
    const locationElement=document.createElement("li");  

    idElement.innerText=`id: ${listAnimals.id.$oid}`;
    animalElement.innerText=`animal: ${listAnimals.animal}`;
    scientificNameElement.innerText=`sc: ${listAnimals.scientificname}`;
    amountElement.innerText=`amount: ${listAnimals.amount}`;
    locationElement.innerText=`location: ${listAnimals.location}`;

    listAnimalsElement.appendChild(attributeList);
   
    attributeList.appendChild(idElement);
    attributeList.appendChild(animalElement);
    attributeList.appendChild(scientificNameElement);
    attributeList.appendChild(amountElement);
    attributeList.appendChild(locationElement);

    return listAnimalsElement;
})

document.addEventListener('DOMContentLoaded', (event)=> {

    const container=document.querySelector('.container');
    zooElements.forEach(val =>container.appendChild(val))
})