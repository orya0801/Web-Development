const article = document.querySelectorAll('p')

console.log(article)

article.forEach(a => a.addEventListener('mouseenter', event => {
    let target = event.target;
    
    target.style.fontSize = "24px";
}))

article.forEach(a => a.addEventListener('mouseleave', event => {
    let target = event.target;
    
    target.style.fontSize = "16px";
}))



