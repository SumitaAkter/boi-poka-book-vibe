import { toast } from "react-toastify";

const getStoredReadList = () => {
    //read list
    const storedListStr = localStorage.getItem('read-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else {
        return [];
    }

}

const addToStoredReadList = (id) => {
    const storedList = getStoredReadList();
    if (storedList.includes(id)) {
        //Already exist dont add it
        console.log(id, 'Already Exist in the read list')
    }
    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
        //ideally trigger toast from the cpomponent
        toast('This book is added to your read list.')
    }

}


const getStoredWishList = () => {
    //wish list
    const storedListStr = localStorage.getItem('wish-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else {
        return [];
    }

}
const addToStoredWishList = (id) => {
    const storedList = getStoredWishList();
    if (storedList.includes(id)) {
        //Already exist dont add it
        console.log(id, 'Already Exist in the wish list')
    }
    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('wish-list', storedListStr);
        toast('This book is added to your wish list.')
    }

}

export {addToStoredReadList, addToStoredWishList, getStoredReadList, getStoredWishList};

