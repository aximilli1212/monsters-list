import React from 'react';
import './card-list.style.css';

export const CardList = props => {
    return <div className='card-list'>
        {
            props.monsters.map(monster=>{
                return <Card key={monster.id}>
                    {monster.name}
                </Card>
            })
        }
    </div>
}
