//
const result = {}
let requireComponents = require.context(
    './',
    true,
    /\.vue$/
)
requireComponents.keys().forEach((component) =>{
    let comp = requireComponents(component);
    if(component.includes('parent')){
        let key =  component.replace(/^\.\/(.*)\/(.*)\.\w+$/, '$2');
        console.log(key[0].toUpperCase())
        key = key[0].toUpperCase() + key.slice(1);
        result[key] = comp.default
    }

});
console.log(result)
export default result;
