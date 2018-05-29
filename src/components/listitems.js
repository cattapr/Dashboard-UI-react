import React from 'react';

const ListItems = (props) => {
   let listItems = [];
   Object.keys( props.object ).map(( item, index ) => {
       listItems.push(
           <li key = { index } > { props.listTitles[index] }: { props.object[item] } </li>
       )
   })
   return listItems;
}

export default ListItems;