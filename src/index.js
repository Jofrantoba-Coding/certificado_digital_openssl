import _ from 'loadsh';

function component(){
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello','Jofrantoba','alias','Jonathan','Franchesco','Torres','Baca'],' ')
    return element;
}

document.body.appendChild(component());