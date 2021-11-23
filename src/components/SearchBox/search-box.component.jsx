import React from 'react';

export const SearchBox  = props =>{
    let searchField = '';
    const filteredMonsters = props.monsters.filter(monster => {
        return monster.name.toLowerCase().includes(searchField.toLowerCase())
    });



    return  <input
        type='search'
        placeholder='Find Monster'
        onChange={e=> this.setState({searchField: e.target.value})}
    />
}
