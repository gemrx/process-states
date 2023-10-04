let processCores = 1;
let limit = 5;
const form = document.querySelector('form');
const tableBody = document.querySelector('tbody');
// const svgAdmit = document.querySelector('svg.admit');
// const svgDelete = document.querySelector('svg.delete');

function addProcces (event) {
    // prevent the form from submitting and reloading the page
    event.preventDefault(); 

    const tableRows = document.querySelectorAll('tr.process');
    if (tableRows.length >= limit) {
        alert('Has excedido el máximo de procesos que puedes crear');
        this.reset(); // reset the form
        return; // No hagas nada más
    }

    // Create a table row (<tr>)
    const tableRow = document.createElement('tr');
    tableRow.setAttribute('class', 'process')

    // Create a table data cell for the "Name" column (<td class="name align-middle">Brave</td>)
    const nameCell = document.createElement('td');
    nameCell.classList.add('name', 'align-middle');
    nameCell.textContent = document.querySelector('form input').value;

    // Create a table data cell for the "State" column (<td class="align-middle">...</td>)
    const stateCell = document.createElement('td');
    stateCell.classList.add('align-middle');

    // Create a <div class="state"> element
    const stateDiv = document.createElement('div');
    stateDiv.classList.add('state');

    // Set the text content for the state element
    stateDiv.textContent = 'Nuevo';

    // Create a <div class="circle waiting"> element
    const circleDiv = document.createElement('div');
    circleDiv.classList.add('circle', 'waiting');

    // Append the circleDiv to the stateDiv
    stateDiv.appendChild(circleDiv);

    // Append the stateDiv to the stateCell
    stateCell.appendChild(stateDiv);

    // Create a table data cell for the buttons column (<td class="align-middle">...</td>)
    const buttonsCell = document.createElement('td');
    buttonsCell.classList.add('align-middle');

    // Create a <div class="buttons-container"> element
    const buttonsContainerDiv = document.createElement('div');
    buttonsContainerDiv.classList.add('buttons-container');

    // Create an SVG element for the "Admit" icon
    const admitSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    admitSVG.setAttribute("class", "admit");
    admitSVG.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    admitSVG.setAttribute('viewBox', '0 0 24 24');
    const admitPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    admitPath.setAttribute("fill-rule", "evenodd");
    admitPath.setAttribute("clip-rule", "evenodd");
    admitPath.setAttribute("d", "M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z");
    admitSVG.appendChild(admitPath)
    admitSVG.addEventListener('click', changeState);
    buttonsContainerDiv.appendChild(admitSVG)

    // Create an SVG element for the "Delete" icon
    const deleteSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    deleteSVG.setAttribute("class", "delete");
    deleteSVG.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    deleteSVG.setAttribute('viewBox', '0 0 24 24');
    const deletePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    deletePath.setAttribute('d', 'M12 4c-4.419 0-8 3.582-8 8s3.581 8 8 8s8-3.582 8-8s-3.581-8-8-8zm3.707 10.293a.999.999 0 1 1-1.414 1.414L12 13.414l-2.293 2.293a.997.997 0 0 1-1.414 0a.999.999 0 0 1 0-1.414L10.586 12L8.293 9.707a.999.999 0 1 1 1.414-1.414L12 10.586l2.293-2.293a.999.999 0 1 1 1.414 1.414L13.414 12l2.293 2.293z');
    deleteSVG.appendChild(deletePath);
    deleteSVG.addEventListener('click', changeState);
    buttonsContainerDiv.appendChild(deleteSVG);

    // Append the buttonsContainerDiv to the buttonsCell
    buttonsCell.appendChild(buttonsContainerDiv);

    // Append the nameCell, stateCell, and buttonsCell to the tableRow
    tableRow.appendChild(nameCell);
    tableRow.appendChild(stateCell);
    tableRow.appendChild(buttonsCell);

    // Now, you can append the tableRow to your existing table (assuming you have a table element in your HTML)
    const table = document.querySelector('table'); // Change the selector based on your HTML structure
    table.querySelector('tbody').appendChild(tableRow);
    
    // reset the form
    this.reset(); 
}

function changeState(event) {
    const svg = event.currentTarget
    const svgParent = svg.parentElement;
    let svgClass = svg.classList[0];

    if (svgClass === 'admit') {
        // create a run-svg and replace the admit-svg
        const newSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        newSVG.setAttribute("class", "run");
        newSVG.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        newSVG.setAttribute("viewBox", "0 0 24 24");
        const newPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        newPath.setAttribute("d", "M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm8.528-4.882a1 1 0 0 1 1.027.05l6 4a1 1 0 0 1 0 1.664l-6 4A1 1 0 0 1 9 16V8a1 1 0 0 1 .528-.882z");
        newPath.setAttribute("fill-rule", "evenodd");
        newPath.setAttribute("d", "M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm8.528-4.882a1 1 0 0 1 1.027.05l6 4a1 1 0 0 1 0 1.664l-6 4A1 1 0 0 1 9 16V8a1 1 0 0 1 .528-.882z");
        newPath.setAttribute("clip-rule", "evenodd");
        newSVG.appendChild(newPath)
        newSVG.addEventListener('click', changeState);
        svgParent.replaceChild(newSVG, svg);

        // update the process state
        const currentTableRow = svgParent.parentElement.parentElement;
        const secondColumn = currentTableRow.children[1].children[0];
        const circle = secondColumn.childNodes[1];
        secondColumn.childNodes[0].textContent = "Listo"
        circle.classList.replace(circle.classList[1], 'ready');

    } else if (svgClass === 'run') {
        // Obtén todas las filas con clase 'process'
        const tableRows = document.querySelectorAll('tr.process');

        // Filtra las filas que tienen el estado 'En ejecución'
        const runningProcesses = Array.from(tableRows).filter(row => {
            const secondColumn = row.children[1].children[0];
            return secondColumn.childNodes[0].textContent === 'En ejecución';
        });

        // Verifica si se ha excedido el límite
        if (runningProcesses.length >= processCores) {
            alert('Has excedido el máximo de procesos que puedes tener en ejecución.');
            return; // No hagas nada más
        }
        // create a stop-svg and replace the run-svg
        const newSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        newSVG.setAttribute("class", "stop");
        newSVG.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        newSVG.setAttribute("viewBox", "0 0 24 24");
        const newPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        newPath.setAttribute("fill-rule", "evenodd");
        newPath.setAttribute("clip-rule", "evenodd");
        newPath.setAttribute("d", "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM8.07612 8.61732C8 8.80109 8 9.03406 8 9.5V14.5C8 14.9659 8 15.1989 8.07612 15.3827C8.17761 15.6277 8.37229 15.8224 8.61732 15.9239C8.80109 16 9.03406 16 9.5 16C9.96594 16 10.1989 16 10.3827 15.9239C10.6277 15.8224 10.8224 15.6277 10.9239 15.3827C11 15.1989 11 14.9659 11 14.5V9.5C11 9.03406 11 8.80109 10.9239 8.61732C10.8224 8.37229 10.6277 8.17761 10.3827 8.07612C10.1989 8 9.96594 8 9.5 8C9.03406 8 8.80109 8 8.61732 8.07612C8.37229 8.17761 8.17761 8.37229 8.07612 8.61732ZM13.0761 8.61732C13 8.80109 13 9.03406 13 9.5V14.5C13 14.9659 13 15.1989 13.0761 15.3827C13.1776 15.6277 13.3723 15.8224 13.6173 15.9239C13.8011 16 14.0341 16 14.5 16C14.9659 16 15.1989 16 15.3827 15.9239C15.6277 15.8224 15.8224 15.6277 15.9239 15.3827C16 15.1989 16 14.9659 16 14.5V9.5C16 9.03406 16 8.80109 15.9239 8.61732C15.8224 8.37229 15.6277 8.17761 15.3827 8.07612C15.1989 8 14.9659 8 14.5 8C14.0341 8 13.8011 8 13.6173 8.07612C13.3723 8.17761 13.1776 8.37229 13.0761 8.61732Z");
        newSVG.appendChild(newPath)
        newSVG.addEventListener('click', changeState);
        svgParent.replaceChild(newSVG, svg);

        // update the process state
        const currentTableRow = svgParent.parentElement.parentElement;
        const secondColumn = currentTableRow.children[1].children[0];
        const circle = secondColumn.childNodes[1];
        secondColumn.childNodes[0].textContent = "En ejecución"
        circle.classList.replace(circle.classList[1], 'running');

    } else if (svgClass === 'stop') {
        // create an admit-svg and replace the stop-svg
        const newSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        newSVG.setAttribute("class", "admit");
        newSVG.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        newSVG.setAttribute("viewBox", "0 0 24 24");
        const newPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        newPath.setAttribute("fill-rule", "evenodd");
        newPath.setAttribute("clip-rule", "evenodd");
        newPath.setAttribute("d", "M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z");
        newSVG.appendChild(newPath)
        newSVG.addEventListener('click', changeState);
        svgParent.replaceChild(newSVG, svg);
        
        // update the process state
        const currentTableRow = svgParent.parentElement.parentElement;
        const secondColumn = currentTableRow.children[1].children[0];
        const circle = secondColumn.childNodes[1];
        secondColumn.childNodes[0].textContent = "Bloqueado"
        circle.classList.replace(circle.classList[1], 'waiting');

    } else if (svgClass === 'delete') {
        if(confirm('Quieres finalizar este proceso?')){
            tableBody.removeChild(event.currentTarget.parentElement.parentElement.parentElement);
        }
    }
}

function deleteItem(event){
    if(confirm('Are you sure?')){
        processTable.removeChild(event.target.parentElement);
    }
}

// svgAdmit.addEventListener('click', changeState);
// svgDelete.addEventListener('click', changeState);
form.addEventListener('submit', addProcces);

