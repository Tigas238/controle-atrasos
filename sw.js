self.addEventListener("install", e => {

e.waitUntil(

caches.open("controle-atrasos").then(cache => {

return cache.addAll([

"/",
"/index.html",
"/manifest.json"

])

})

)

})