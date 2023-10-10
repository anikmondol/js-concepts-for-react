const addData = () =>{
    const storageId = document.getElementById('storage-id');
    const storageValue = document.getElementById('storage-value');
    const id = storageId.value;
    const value = storageValue.value;

    if(id && value){
        localStorage.setItem(id, value);
    }

    storageId.value = '';
    storageValue.value = '';
}