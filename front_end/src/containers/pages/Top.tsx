import React, { useState, useEffect, useCallback, DependencyList } from 'react';
import SideBar from 'containers/organisms/SideBar';
import ShoppingList from 'containers/organisms/ShoppingList';
import AddItemForm from 'containers/organisms/AddItemForm';
import CategoryBox from 'containers/organisms/CategoryBox';
import axios from 'axios';
import 'assets/css/pages/Top.css';

type Item = {
  id: number;
  name: string;
  note: string;
  image_url: string;
  category_id: number;
}

type Category = {
  id: number;
  name: string;
  items: Item[];
}


function useEffectAsync(
  effect: () => any,
  deps?: DependencyList
) {
  useEffect(() => {
    effect();
  }, deps);
}

const Top: React.FC = ()=> {
  const [ categories, setCategories ] = useState([]);
  const [ isAddItemForm, setIsItemForm] = useState(false);

  useEffectAsync(async () => {
    const res = await axios.get('http://localhost:3001/category')
    setCategories(res.data)
  }, [])

  const handleShowItemForm = useCallback(() => {
    setIsItemForm(true)
  }, []);

  const handleHiddenItemForm = useCallback(() => {
    setIsItemForm(false)
  }, []);

  return (
    <div className='container'>
      <SideBar/>
        <div className='content'>
          <h2 className='content-title'><span className='font--yellow'>Shoppingify</span> allows you take your shopping list wherever you go</h2>
          {
            categories.map((category: Category) => {
              return (
                <CategoryBox category={category} key={category.id}/>
              )
            })
          }
        </div>
      {
        isAddItemForm ? <AddItemForm categories={categories.map((category: Category) => { return category.name })} func={handleHiddenItemForm}/> : <ShoppingList func={handleShowItemForm}/>
      }

    </div>
  )
};

export default Top;