import {React, useState} from 'react';

const AddItem = (props) => {
    const [newItemInput, setNewItemInput] = useState('');

    const onSubmitAddTolist = (event) => {
        event.preventDefault(); //research what exactly this does
        //lift state up to App.js
        props.onAddThisToList(newItemInput);
        console.log('Item Added')
    }



    const addItemHandler = (event) => {
        setNewItemInput(() => {
            return {  id: getRandomID(), data: event.target.value };
        });
        
        function getRandomID(){
            return Math.random();
        }
    }

    return(
        <form onSubmit={onSubmitAddTolist}>
            <label>What do you need to do?</label>
            <input type='text' onChange={addItemHandler}></input>
            <button type='submit' >Submit</button>
        </form>
    );
}

export default AddItem;