
let accordionCurrent;
document.querySelector ('.accordion_content').addEventListener ('click', handleClick);


function handleClick (e) 
{
    const accordionItem = e.target.closest ('.accordion_item');

    accordionItem.classList.toggle ('active');

    if (accordionCurrent)
        accordionCurrent.classList.remove ('active');

    if (accordionItem.classList.contains ('active'))
        accordionCurrent = accordionItem;
    else
        accordionCurrent = null;
 
    
}


