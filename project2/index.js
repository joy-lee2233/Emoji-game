let data = [
    {
        'name': 'Joy',
        'age': '23'
    },
    {
        'name': 'Peter',
        'age': '26'
    },
    {
        'name': 'Kariuki',
        'age': '2'
    },
    {
        'name': 'Winners',
        'age': '44'
    },
    {
        'name': 'Koi',
        'age': '34'
    },
    {
        'name': 'Marsai',
        'age': '19'
    },
]

let info = document.querySelector('#info')
let details = data.map(function(item){
    return '<div>' + item.name + ' ' + ' is ' + item.age + ' years old' + '</div>';
})

info.innerHTML = details.join('\n');