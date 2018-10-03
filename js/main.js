// var list = new OrderedArrayList();
var list = new OrderedLinkedList();
// var list = new OrderedDoublyLinkedList();

$().ready( () => {
    $('#insert').click(insertElement)
    $('#insert_at').click(insertElementAt)
    $('#remove').click(removeElement)
    $('#remove_at').click(removeElementAt)
})

function showData(){
    let text = `<div class="ui label">
                    ${list.show('</div><div class="ui label">')}
                </div>`
    let out = $('#output');
    out.empty()
    out.append(text)
}
function insertElement(){
    let val = parseInt(prompt('digite um valor a ser inserido:'));
    list.append(val);
    showData();
}
function insertElementAt(){
    let val = parseInt(prompt('digite um valor a ser inserido:'));
    let pos = parseInt(prompt('digite uma posição a inserir:'));
    list.insert(pos, val);
    showData();
}
function removeElement(){
    let val = parseInt(prompt('digite um valor a ser removido:'));
    list.remove(val);
    showData();
}
function removeElementAt(){
    let pos = parseInt(prompt('digite uma posição a remover:'));
    list.removeAt(pos)
    showData();
}